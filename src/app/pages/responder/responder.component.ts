import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NUMERICO, QUALITATIVA, QUANTITATIVA } from 'src/app/constantes/tipos.const';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.scss']
})
export class ResponderComponent implements OnInit {

  public questions: any[] = [];
  public loading = true;
  public id: string | null;
  public responderForm: UntypedFormGroup;
  public NUMERICO: any[] = NUMERICO;
  public QUANTITATIVA: any[] = QUANTITATIVA;
  public QUALITATIVA: any[] = QUALITATIVA;
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public userLoggedService: UserLoggedService
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.getQuestions();
    this.iniciarForm();
    this.preencherForm()
  }

  async getQuestions(){
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${environment.api}/v1/questions/perForm?form=${this.id}`).subscribe( res => {
        console.log(res)
        res.shift()
        this.questions = res
        resolve('ok')
      })
    })
  }
  
  iniciarForm(){
    this.responderForm = this.formBuilder.group({
      answers: this.formBuilder.array([])
    })
  }

  get answers() {
    return this.responderForm.controls["answers"] as UntypedFormArray;
  }

  addQuestion(question: any) {
    const answersForm = this.formBuilder.group({
      question_id: [question.question_id, Validators.required],
      ['answer_field_' + question.question_order]: [null, Validators.required],
      question_order: [question.question_order],
      question_title: [question.question_title],
      question_type_title: [question.question_type_title]
    });
  
    this.answers.push(answersForm);
  }

  deleteQuestion(index: number) {
    this.answers.removeAt(index);
  }

  responder(){
    console.log(this.responderForm.value)
    this.http.post<any>(`${environment.api}/v1/answers/${this.userLoggedService.user.user_cpf_id}`, this.responderForm.value).subscribe( res => {
      console.log(res)
      if(res) {
        this.toastr.success('Formulário respondido com sucesso!');
        this.router.navigate(['/main/home'])
      }else{
        this.toastr.error('Erro ao responder formulário!');
      }
    })
  }

  preencherForm(){
    this.questions.map((question, idx) => {
      this.addQuestion(question)
      if(this.questions.length === (idx+1)) this.loading = false
    })
    console.log(this.responderForm)
  }

}
