import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('myChartLine', {static: true}) myChartLine: ElementRef;
  @ViewChild('myChartPie', {static: true}) myChartPie: ElementRef;
  @ViewChild('myChartPie2', {static: true}) myChartPie2: ElementRef;
  @ViewChild('myChartAxis', {static: true}) myChartAxis: ElementRef;
  @ViewChild('myChartBar', {static: true}) myChartBar: ElementRef;

  constructor() { }

  ngOnInit(): void {
    //const ctx = document.getElementById('myChart').getContext('2d');
  }

  ngAfterViewInit(){
    this.chartLine();
    this.chartPie();
    this.chartPie2();
    this.chartAxis();
    this.chartBar();
  }

  chartLine(){
    const ctx = new Chart(this.myChartLine.nativeElement, {
      type: 'line',
      data: {
        labels: ["Pergunta 1","Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5"],
        datasets: [
          {
            label: 'Dataset 1',
            data: [23, 51, 42, 56, 75],
            borderColor: '#00AEFF',
            fill: false,
          },
          {
            label: 'Dataset 2',
            data: [50, 12, 6, 20, 15],
            borderColor: '#FFCC00',
            fill: false,
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
            text: 'Respostas - Formulário de Satisfação'
          }
        }
      }
    });
  }

  chartPie(){
    const ctx = new Chart(this.myChartPie.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Discordo totalmente","Discordo", "Indiferente", "Concordo", "Concordo plenamente"],
        datasets: [
          {
            data: [43, 20, 12, 36, 25],
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
            text: 'Qualitativa'
          }
        }
      }
    });
  }
  
  chartPie2(){
    const ctx = new Chart(this.myChartPie2.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Sempre","Muitas vezes", "Algumas vezes", "Poucas vezes", "Nunca"],
        datasets: [
          {
            data: [12, 67, 6, 29, 48],
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
            text: 'Quantitativa'
          }
        }
      }
    });
  }

  chartAxis(){
    const ctx = new Chart(this.myChartAxis.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro","Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
          {
            label: 'Formulário 1',
            data: [10, 51, 42, 56, 100],
            borderColor: '#36a2eb',
            yAxisID: 'y'
          },
          {
            label: 'Formulário 2',
            data: [50, 12, 100, 20, 15],
            borderColor: '#ff6384',
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Respostas (MESES)'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
    
            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        }
      },
    });
  }

  chartBar(){
    const ctx = new Chart(this.myChartBar.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Janeiro","Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
          {
            label: 'Formulário 1',
            data: [100, 151, 242, 156, 255],
            borderColor: '#36a2eb',
            backgroundColor: '#36a2eb'
          },
          {
            label: 'Formulário 2',
            data: [250, 123, 110, 230, 159],
            borderColor: '#ff6384',
            backgroundColor: '#ff6384'
          }
        ]
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Respostas (MESES)'
          }
        }
      },
    });
  }

}
