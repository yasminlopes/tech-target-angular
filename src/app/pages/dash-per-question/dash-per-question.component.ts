import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dash-per-question',
  templateUrl: './dash-per-question.component.html',
  styleUrls: ['./dash-per-question.component.scss']
})
export class DashPerQuestionComponent implements OnInit {

  forms: any[] = []

  constructor(
    private http: HttpClient,
    public userLoggedService: UserLoggedService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getForms();
    await this.getQuestions();
  }

  async getForms(){
    this.forms = await this.http.get<any>(`${environment.api}/forms/perUser/${this.userLoggedService.idUsuario}`).toPromise();
    console.log(this.forms)
  }

  async getQuestions(){
    for (const [index, form] of this.forms.entries()) {
      this.forms[index].questions = await this.http.get<any>(`${environment.api}/questions/perForm?form=${form.id}`).toPromise();
    }
    console.log(this.forms)
  }


}
