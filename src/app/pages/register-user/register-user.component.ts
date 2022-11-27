import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CnpjValidator } from 'src/app/validators/cnpj.validator';
import { CpfValidator } from 'src/app/validators/cpf.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registerUserForm: FormGroup;
  genders: any = []
  statusCivil: any = []
  segments: any = []
  cidades: any = []
  estados: any = []

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private cpfValidator: CpfValidator,
    private cnpjValidator: CnpjValidator
  ) { }

  ngOnInit(): void {
    this.getGender();
    this.getState();
    this.getStatusCivil();
    this.getSegments();
    this.iniciarForm();
    this.listenState()
  }

  listenState(){
    this.registerUserForm.get('user_state')?.valueChanges.subscribe((valor) => {
      this.getCity(valor)
    })
  }

  iniciarForm(){
    this.registerUserForm = this.formBuilder.group({
      tipoPessoa: ['fisica', [ Validators.required ]],
      name: ['', [ Validators.required ]],
      last_name: ['', [ Validators.required ]],
      cpf: ['', [Validators.required, this.cpfValidator.validaCpf()]],
      cnpj: ['', [Validators.required, this.cnpjValidator.validaCnpj()]],
      corporate_name: ['', [ Validators.required ]],
      fancy_name: ['', [ Validators.required ]],
      segments: [null, [ Validators.required ]],
      user_state: [null, [ Validators.required ]],
      user_city: [null, [ Validators.required ]],
      user_address: ['', [ Validators.required ]],
      birth_date: ['', [ Validators.required ]],
      civil_status: [null, [ Validators.required ]],
      gender: [null, [ Validators.required ]],
      profession: ['', [ Validators.required ]],
      user_email: ['', [ Validators.required, Validators.email ]],
      user_phone: ['', [ Validators.required ]],
      user_password: ['', [ Validators.required ]],
      user_photo: null
    })
  }

  registerUser(){
    this.registerUserForm.patchValue({
      birth_date: this.convertDate(this.registerUserForm.get('birth_date')?.value)
    }) 
    
    const type =  this.registerUserForm.get('tipoPessoa')?.value == 'fisica' ? 'cpf' : 'cnpj';
    
    this.http.post<any>(`${environment.api}/users/commonUsers/?user_type=${type}`, {
      
      user_name: this.registerUserForm.get('name')?.value + ' ' + this.registerUserForm.get('last_name')?.value,
      ...this.registerUserForm.value

      
    }).subscribe( res => {      
      if(res) {
        this.toastr.success('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login'])
      }else{
        this.toastr.error('Erro ao cadastrar usuário!');
      }
    })
  }

  getState(){
    this.http.get<any>(`${environment.api}/country/states`).subscribe( res => {
      // console.log(res)
      this.estados = res
    })
  }

  getCity(valor: string){
    this.http.get<any>(`${environment.api}/country/cities?state=${valor}`).subscribe( res => {
      this.registerUserForm.get('user_city')?.patchValue(null)
      this.cidades = res
      // console.log(this.cidades)
    })
  }

  getGender(){
    this.http.get<any>(`${environment.api}/genders/`).subscribe( res => {
      // console.log(res)
      this.genders = res
    })
  }

  getStatusCivil(){
    this.http.get<any>(`${environment.api}/civilStatus/`).subscribe( res => {
      this.statusCivil = res
    })
  }

  getSegments(){
    this.http.get<any>(`${environment.api}/segments/`).subscribe( res => {
      this.segments = res
    })
  }

  convertDate(date: any): string{
    if(!date) return '';

    let d = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    
    return `${ye}-${mo}-${da}`
  }



}
