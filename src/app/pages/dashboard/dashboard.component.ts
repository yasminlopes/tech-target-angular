import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('myChartPieNumerica', {static: true}) myChartPieNumerica: ElementRef;
  @ViewChild('myChartPieState', {static: true}) myChartPieState: ElementRef;
  @ViewChild('myChartPieEstadoCivil', {static: true}) myChartPieEstadoCivil: ElementRef;
  @ViewChild('myChartPieGenero', {static: true}) myChartPieGenero: ElementRef;

  public dash: any = {};
  public id: string | null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    public userLoggedService: UserLoggedService
  ) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.getDataDash();
    this.createDashs();
  }

  async getDataDash(){
    this.dash = await this.http.get<any>(`${environment.api}/dashboards/${this.id}`).toPromise();
  }

  generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  createDashs(){
    this.chartPieNumerica();
    this.chartPieState();
    this.chartPieEstadoCivil();
    this.chartPieGenero();
  }

  chartPieNumerica(){
    const labelDash = Object.keys(this.dash.results[0][0].answer)
    const dataDash = Object.values(this.dash.results[0][0].answer)
    const colorDash = Array.from({length: labelDash.length}, (v, k) => k+1).map( num => this.generateColor())

    const ctx = new Chart(this.myChartPieNumerica.nativeElement, {
      type: 'pie',
      data: {
        labels: labelDash,
        datasets: [
          {
            data: dataDash,
            backgroundColor: colorDash,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Respostas'
          }
        }
      }
    });
  }

 
  chartPieState(){
    const labelDash = Object.keys(this.dash.results[0][1].state)
    const dataDash = Object.values(this.dash.results[0][1].state)
    const colorDash = Array.from({length: labelDash.length}, (v, k) => k+1).map( num => this.generateColor())

    const ctx = new Chart(this.myChartPieState.nativeElement, {
      type: 'pie',
      data: {
        labels: labelDash,
        datasets: [
          {
            data: dataDash,
            backgroundColor: colorDash,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Estados'
          }
        }
      }
    });
  }
  
  chartPieEstadoCivil(){
    const labelDash = Object.keys(this.dash.results[0][2].user_civil_status)
    const dataDash = Object.values(this.dash.results[0][2].user_civil_status)
    const colorDash = Array.from({length: labelDash.length}, (v, k) => k+1).map( num => this.generateColor())

    const ctx = new Chart(this.myChartPieEstadoCivil.nativeElement, {
      type: 'pie',
      data: {
        labels: labelDash,
        datasets: [
          {
            data: dataDash,
            backgroundColor: colorDash,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Estado Civil'
          }
        }
      }
    });
  }

  chartPieGenero(){
    const labelDash = Object.keys(this.dash.results[0][3].user_gender)
    const dataDash = Object.values(this.dash.results[0][3].user_gender)
    const colorDash = Array.from({length: labelDash.length}, (v, k) => k+1).map( num => this.generateColor())

    const ctx = new Chart(this.myChartPieGenero.nativeElement, {
      type: 'pie',
      data: {
        labels: labelDash,
        datasets: [
          {
            data: dataDash,
            backgroundColor: colorDash,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Gênero'
          }
        }
      }
    });
  }

}
