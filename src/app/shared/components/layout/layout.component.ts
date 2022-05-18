import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoggedService } from '../../services/user-logged/user-logged.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  userName: string = 'Não Indentificado';
  admin:boolean = false;

  constructor(
    private userLoggedService: UserLoggedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user-sf')
    
    if(user) this.userLoggedService.user = JSON.parse(user);
    
    this.userName = this.userLoggedService.user.nome;
    this.admin = this.userLoggedService.isAdmin;
  }

  disconnect(){
    this.userLoggedService.disconnect();
    this.router.navigate(['/login']);
  }

}
