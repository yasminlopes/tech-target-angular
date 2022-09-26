import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destaques: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getDestaques()
  }

  getDestaques(){
    this.http.get<any>(`${environment.api}v1/forms/`).subscribe( res => {
      console.log(res)
      res.shift()
      this.destaques = res.slice(0, 4)
    })
  }

}
