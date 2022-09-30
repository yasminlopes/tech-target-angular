import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-divulgue',
  templateUrl: './divulgue.component.html',
  styleUrls: ['./divulgue.component.scss']
})
export class DivulgueComponent implements OnInit {

  forms:any[] = []

  constructor(
    private http: HttpClient,
    public userLoggedService: UserLoggedService
  ) { }

  ngOnInit(): void {
    //this.getMyForms()
  }

  getMyForms(){
    this.http.get<any>(`${environment.api}/form/listForms/perUser/${this.userLoggedService.idUsuario}`).subscribe( res => {
      console.log(res)
      res.shift()
      this.forms = res
    })
  }
}
