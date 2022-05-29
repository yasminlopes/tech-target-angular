import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoggedService } from '../../services/user-logged/user-logged.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userName = ''

  constructor(
    public router: Router,
    private userLoggedService: UserLoggedService
  ) { }

  @Input() classCustom: string = '';

  ngOnInit(): void {
    const user = localStorage.getItem('user-tt')
    
    if(user) this.userLoggedService.user = JSON.parse(user);
    console.log(this.userLoggedService.user)

    if(this.userLoggedService.isCompany){
      this.userName = this.userLoggedService.user.user_cnpj_fancy_name
    }else {
      this.userName = this.userLoggedService.user.user_cpf_name + ' ' + this.userLoggedService.user.user_cpf_last_name;
    }
  }

}
