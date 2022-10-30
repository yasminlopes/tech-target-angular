import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-erro',
  templateUrl: './form-erro.component.html',
  styleUrls: ['./form-erro.component.scss']
})
export class FormErroComponent implements OnInit {

  @Input() formControl: FormControl;
  @Input() class: string = 'text-danger';
  
  constructor() { }

  ngOnInit(): void {
  }

}
