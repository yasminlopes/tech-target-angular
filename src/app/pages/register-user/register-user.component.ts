import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
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
      cpf: [''],
      cnpj: [''],
      corporate_name: [''],
      fancy_name: [''],
      segments: [null],
      user_state: [null, [ Validators.required ]],
      user_city: [null, [ Validators.required ]],
      user_address: [''],
      birth_date: [''],
      civil_status_id: [null],
      gender_id: [null],
      profession: [''],
      user_email: ['', [ Validators.required, Validators.email ]],
      user_phone: ['', [ Validators.required ]],
      user_password: ['', [ Validators.required ]]
    })
  }

  registerUser(){
    this.registerUserForm.patchValue({
      birth_date: this.convertDate(this.registerUserForm.get('birth_date')?.value)
    }) 

    const rota =  this.registerUserForm.get('tipoPessoa')?.value == 'fisica' ? '/user/create/cpf' : '/user/create/cnpj';
    
    this.http.post<any>(`${environment.api + rota}`, {
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
    this.http.get<any>(`${environment.api}/v1/country/states`).subscribe( res => {
      console.log(res)
      res.shift()
      this.estados = res
    })
  }

  getCity(valor: string){
    this.http.get<any>(`${environment.api}/v1/country/cities?state=${valor}`).subscribe( res => {
      this.registerUserForm.get('user_city')?.patchValue(null)
      res.shift()
      this.cidades = res
    })
  }

  getGender(){
    this.http.get<any>(`${environment.api}/v1/genders/`).subscribe( res => {
      res.shift()
      this.genders = res
    })
  }

  getStatusCivil(){
    this.http.get<any>(`${environment.api}/v1/civilStatus/`).subscribe( res => {
      res.shift()
      this.statusCivil = res
    })
  }

  getSegments(){
    this.http.get<any>(`${environment.api}/v1/segments/`).subscribe( res => {
      res.shift()
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
