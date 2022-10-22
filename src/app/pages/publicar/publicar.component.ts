import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  publicarForm: UntypedFormGroup;
  formDados: any;
  TIPOS = TIPOS;
  public id: string | null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public userLoggedService: UserLoggedService
  ) { }

  async ngOnInit(): Promise<void> {
    this.iniciarForm();
    this.addQuestion();
    await this.preencherForm()
  }

  iniciarForm(){
    this.id = this.route.snapshot.paramMap.get('id');

    this.publicarForm = this.formBuilder.group({
      title: [null, [ Validators.required ]],
      description: ['', [ Validators.required ]],
      questions: this.formBuilder.array([])
    })
  }

  async getForm(){
    this.http.get<any>(`${environment.api}/questions/perForm?form=${this.id}`).subscribe( res => {
      console.log(res)
      this.formDados = res
    })
  }

  async preencherForm(){

    this.id = this.route.snapshot.paramMap.get('id');

    if(!this.id) return;

    await this.getForm();
    console.log(this.formDados)
    this.publicarForm.patchValue({
      title: this.formDados.title,
      description: this.formDados.description,
      questions: this.formDados.questions
    })
  }

  get questions() {
    return this.publicarForm.controls["questions"] as UntypedFormArray;
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
    console.log(this.userLoggedService.idUsuario)
    this.http.post<any>(`${environment.api}/forms/`, 
      {
        user_cnpj: this.userLoggedService.idUsuario,
        ...this.publicarForm.value
      }
    ).subscribe( res => {
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
