import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  loginForm: FormGroup

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
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
    this.http.post<any>(`${environment.api}/login/user/`, this.loginForm.value).subscribe( ( res ): any => {
      this.userLoggedService.user = res.user[0]
      console.log(res)
      if(res.status === 200) {
        localStorage.setItem('user-sf', JSON.stringify(res.user[0]))
        this.toastr.success(res.mensagem);

        return this.router.navigate(['/main/home'])
      }

      //this.toastr.error(res.mensagem);
    })
  }

}
