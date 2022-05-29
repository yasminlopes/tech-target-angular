import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TIPOS } from 'src/app/constantes/tipos.const';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.scss']
})
export class PublicarComponent implements OnInit {

  ARRAY_QTD_PERGUNTAS = Array.from({length: 10}, (v, k) => k+1);
  publicarForm: FormGroup;
  TIPOS = TIPOS

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public userLoggedService: UserLoggedService
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.addQuestion();
  }

  iniciarForm(){
    this.publicarForm = this.formBuilder.group({
      title: [null, [ Validators.required ]],
      description: ['', [ Validators.required ]],
      questions: this.formBuilder.array([])
    })
  }

  get questions() {
    return this.publicarForm.controls["questions"] as FormArray;
  }

  addQuestion() {
    const questionsForm = this.formBuilder.group({
      question_order: [null, Validators.required],
      question_type_id: [null, Validators.required],
      question_title: ['', Validators.required]
    });
  
    this.questions.push(questionsForm);
  }

  deleteQuestion(index: number) {
    this.questions.removeAt(index);
  }

  createForm(){
    console.log(this.publicarForm.value)
    this.http.post<any>(`${environment.api}/form/create/${this.userLoggedService.user.user_cnpj_id}`, this.publicarForm.value).subscribe( res => {
      console.log(res)
      if(res) {
        this.toastr.success('Formulário publicado com sucesso!');
        this.router.navigate(['/main/divulgue'])
      }else{
        this.toastr.error('Erro ao criar formulário!');
      }
    })
  }

}
