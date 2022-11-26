import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    alert('Obrigado! Mensagem enviada com sucesso! Em breve entraremos em contato.')
  }

}
