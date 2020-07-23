import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-jobs-summary',
  templateUrl: './jobs-summary.page.html',
  styleUrls: ['./jobs-summary.page.scss'],
})
export class JobsSummaryPage implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;
  colorArray: any;

  @ViewChild('barChartForJobOffers', {static: false}) barChartForJobOffers;
  barsForOffers: any;
  //colorArrayForOffers: any;

  tabChoice = "status";
  
  constructor() { }

  ngOnInit() {
  }

ionViewDidEnter() {
  this.createBarChart();
  this.createBarChartForJobOffers();
}

createBarChart() {
  this.bars = new Chart(this.barChart.nativeElement, {
    type: 'bar',
    data: {
      labels: ['PENDING', 'ONGOING', 'COMPLETED'],
      datasets: [{
        label: 'Displaying All Job Posts ',
        data: [118, 17, 25],
        backgroundColor: 'rgb(38, 94, 220)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(38, 220, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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

createBarChartForJobOffers() {
  this.barsForOffers = new Chart(this.barChartForJobOffers.nativeElement, {
    type: 'bar',
    data: {
      labels: ['SENT OFFERS', 'ACCEPTED', 'REJECTED'],
      datasets: [{
        label: 'Displaying All Job Offers ',
        data: [311, 17, 64],
        backgroundColor: 'rgb(38, 94, 220)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(218, 20, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1
      }]
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
