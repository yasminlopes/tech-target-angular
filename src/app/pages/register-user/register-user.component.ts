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

  registerUserForm: FormGroup

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.registerUserForm = this.formBuilder.group({
      tipoPessoa: ['fisica', [ Validators.required ]],
      nome: ['', [ Validators.required ]],
      cpf: [''],
      cnpj: [''],
      email: ['', [ Validators.required, Validators.email ]],
      telefone: ['', [ Validators.required ]],
      senha: ['', [ Validators.required ]]
    })
  }

  registerUser(){
    this.http.post<any>(`${environment.api}/user`, this.registerUserForm.value).subscribe( res => {
      if(res) this.router.navigate(['/login'])
    })
  }

}
