import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

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

  constructor() { }

  ngOnInit(): void {
    //const ctx = document.getElementById('myChart').getContext('2d');
  }

  ngAfterViewInit(){
    this.chartPieNumerica();
    this.chartPieState();
    this.chartPieEstadoCivil();
    this.chartPieGenero();
  }

  chartPieNumerica(){
    const ctx = new Chart(this.myChartPieNumerica.nativeElement, {
      type: 'pie',
      data: {
        labels: ["10","9", "8", "7", "6"],
        datasets: [
          {
            data: [43, 20, 12, 36, 25],
            backgroundColor: ['#36a2eb', 'purple', '#367E18', '#0F3460', '#ff6384'],
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
    const ctx = new Chart(this.myChartPieState.nativeElement, {
      type: 'pie',
      data: {
        labels: ["RO","SP", "RJ", "SC", "BH"],
        datasets: [
          {
            data: [33, 10, 6, 24, 18],
            backgroundColor: ['#36a2eb', 'purple', 'gray', 'gold', '#ff6384'],
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
    const ctx = new Chart(this.myChartPieEstadoCivil.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Solteiro", "Casado", "Divorciado", "Noivo"],
        datasets: [
          {
            data: [12, 37, 6, 9],
            backgroundColor: ['#36a2eb', '#CD104D', '#829460', '#F57328'],
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
    const ctx = new Chart(this.myChartPieGenero.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Masculino", "Feminino"],
        datasets: [
          {
            data: [63, 37],
            backgroundColor: ['#36a2eb', '#ff6384'],
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
