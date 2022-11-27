import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  searchText: any;


  constructor() { }

  ngOnInit(): void {
  }

  inputMsg = new FormControl('');

  messages: any[] = [
    {
      to: 1,
      me: 2,
      msg: "Olá",
      id: 1
    },
    {
      to: 2,
      me: 1,
      msg: "Olá, irei testar",
      id: 1
    },
    {
      to: 2,
      me: 1,
      msg: "Teste",
      id: 1
    }
  ];
  
  sendMessage(){
    const msg = this.inputMsg.value

    console.log(msg)

    let messageData = {
      to: 1,
      me: 2,
      msg,
      id: 1
    };
    
    this.messages.push(messageData);

    this.inputMsg.setValue('')
  };

}
