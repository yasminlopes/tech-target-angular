import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGender();
    this.getCity();
    this.getStatusCivil();
    this.getSegments();

    this.iniciarForm();
  }

  iniciarForm(){
    this.registerUserForm = this.formBuilder.group({
      tipoPessoa: ['fisica', [ Validators.required ]],
      user_name: ['', [ Validators.required ]],
      name: ['', [ Validators.required ]],
      last_name: ['', [ Validators.required ]],
      cpf: [''],
      cnpj: [''],
      corporate_name: [''],
      fancy_name: [''],
      segments: [null],
      user_city: [null],
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
    console.log(this.registerUserForm.value)
    this.http.post<any>(`${environment.api}/user/create/cpf`, this.registerUserForm.value).subscribe( res => {
      if(res) this.router.navigate(['/login'])
    })
  }

  getCity(){
    this.http.get<any>(`${environment.api}/user/listCity/perState/TO`).subscribe( res => {
      console.log(res)
      res.shift()
      this.cidades = res
    })
  }

  getGender(){
    this.http.get<any>(`${environment.api}/user/listAll/gender`).subscribe( res => {
      console.log(res)
      res.shift()
      this.genders = res
    })
  }

  getStatusCivil(){
    this.http.get<any>(`${environment.api}/user/listAll/civil`).subscribe( res => {
      console.log(res)
      res.shift()
      this.statusCivil = res
    })
  }

  getSegments(){
    this.http.get<any>(`${environment.api}/user/listAll/segment`).subscribe( res => {
      console.log(res)
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
    
    return `${da}-${mo}-${ye}`
  }

}
