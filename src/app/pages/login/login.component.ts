import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup

  constructor(
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private userLoggedService: UserLoggedService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.loginForm = this.formBuilder.group({
      user_email: ['', [ Validators.required, Validators.email ]],
      user_password: ['', [ Validators.required ]]
    })
  }

  login(){
    this.http.post<any>(`${environment.api}/auth/`, this.loginForm.value).subscribe( ( res ): any => {
      const status = res[0].response_status
      this.userLoggedService.user = res[1]
      if(status === 200) {
        localStorage.setItem('user-tt', JSON.stringify(res[1]))
        this.toastr.success('Logado com sucesso!');

        return this.userLoggedService.isCompany ? this.router.navigate(['/main/divulgue']) : this.router.navigate(['/main/home'])
      }

      this.toastr.error('Login inválido!');
    })
  }

}
