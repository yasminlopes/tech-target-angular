import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.scss']
})
export class PublicarComponent implements OnInit {

  ARRAY_QTD_PERGUNTAS = Array.from({length: 10}, (v, k) => k+1);
  publicarForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm(){
    this.publicarForm = this.formBuilder.group({
      titulo: [null, [ Validators.required ]],
      descricao: ['', [ Validators.required ]],
      perguntas: this.formBuilder.array([])
    })
  }

  get perguntas() {
    return this.publicarForm.controls["perguntas"] as FormArray;
  }

  addPergunta() {
    const perguntasForm = this.formBuilder.group({
        ordem: ['', Validators.required],
        pergunta: ['', Validators.required]
    });
  
    this.perguntas.push(perguntasForm);
  }

  deletePergunta(index: number) {
    this.perguntas.removeAt(index);
}

}
