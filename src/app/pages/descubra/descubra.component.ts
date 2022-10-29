import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-descubra',
  templateUrl: './descubra.component.html',
  styleUrls: ['./descubra.component.scss']
})
export class DescubraComponent implements OnInit {

  forms: any[] = []
  searchText: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getForms()
  }

  getForms(){
    this.http.get<any>(`${environment.api}/forms/`).subscribe( res => {
      this.forms = res
    })
  }

}
