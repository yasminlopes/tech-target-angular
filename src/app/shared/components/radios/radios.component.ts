import { Component, Input, OnInit } from '@angular/core';
import { NUMERICO, QUALITATIVA, QUANTITATIVA } from 'src/app/constantes/tipos.const';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {

  @Input() tipo: string = 'Numérico'
  public NUMERICO: any[] = NUMERICO;
  public QUANTITATIVA: any[] = QUANTITATIVA;
  public QUALITATIVA: any[] = QUALITATIVA;

  constructor() { }

  ngOnInit(): void {
  }

}
