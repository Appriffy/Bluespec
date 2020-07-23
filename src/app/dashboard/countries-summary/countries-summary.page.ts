import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-countries-summary',
  templateUrl: './countries-summary.page.html',
  styleUrls: ['./countries-summary.page.scss'],
})
export class CountriesSummaryPage implements OnInit {
  @ViewChild('barChartForCountry', {static: false}) barChart;
  bars: any;
  colorArray: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createBarChart();
  }
  
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Engineering', 'Banking', 'Teaching', 'Digital Marketing', 'Plumbing', 'Data Entry', 'Electrician'],
        datasets: [{
          label: 'Number of Grafters',
          data: [17, 7, 25, 11,6,4,19],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Job Posts',
          data: [3, 17, 1, 11, 26,4, 4],
          backgroundColor: 'rgb(225, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Job Skills',
          data: [11, 3, 26, 14, 26, 14,33],
          backgroundColor: 'rgb(125, 110, 200)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  

}
