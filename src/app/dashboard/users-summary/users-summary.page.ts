import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { StorageService } from '../../services/storage.service';
import { AuthConstants } from '../../config/AuthConstants';
import { SettingsModel } from '../../dbmodels/settings-model';

@Component({
  selector: 'app-users-summary',
  templateUrl: './users-summary.page.html',
  styleUrls: ['./users-summary.page.scss'],
})
export class UsersSummaryPage implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;
  colorArray: any;
  statsSummary:any;

  countryLabels:string[] = [];
  countryAllUsersDataset:string[] = [];
  countryGraftersLabels:string[] = [];
  countryAllGraftersDataset:string[] = [];
  countryEmployersLabels:string[] = [];
  countryAllEmployersDataset:string[] = [];
  tabChoice: string = "all";

  //Countries
  @ViewChild('barChartForCountry', {static: false}) barChartForCountry;
  barsForCountry: any;
  @ViewChild('barChartForGraftersCountry', {static: false}) barChartForGraftersCountry;
  barsForCountryGrafters: any;
  @ViewChild('barChartForEmployersCountry', {static: false}) barChartForEmployersCountry;
  barsForCountryEmployers: any;
  
  appSettings: SettingsModel;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    console.log("GRAPHDEBUG: In ngOnInit()");

    this.storageService.get(AuthConstants.APP_SETTINGS).then(appSettings=>{
      if(appSettings){
        this.appSettings = appSettings;
      }
    });
  }


ionViewDidEnter() {
  console.log("GRAPHDEBUG: In ionViewDidEnter()");
  this.createBarChart();

  this.storageService.get(AuthConstants.DASHBOARD_STATS_SUMMARY_CACHE).then(dashData=>{
if(dashData){
  //var json = JSON.parse(dashData);
this.statsSummary = dashData;

console.log("GRAPHDEBUG PARSING JSON FOR GRAPHS: "+JSON.stringify(this.statsSummary));


/*********** SHOW ALL USERS - COUNTRY DISTRIBUTION **********/
this.statsSummary.totalUsersByCountry.forEach(element => {
  //console.log("PARSING GOT => "+JSON.stringify(element));
  element.forEach(subElement => {
    //console.log("PARSING GOT AGAIN => "+JSON.stringify(subElement));
    if(subElement){
    //console.log("PARSING EXACTLY => "+subElement.country);
    try{
      if(subElement.country !== null && subElement.country !== "" && subElement.country !=="Array" ){
        this.countryLabels.push(subElement.country);
        this.countryAllUsersDataset.push(subElement.numUsers);
      }
    }catch(Exception){
      alert(Exception.toString());
    }
    }
  });
});
this.createBarChartForCountry();
/*********** SHOW ALL USERS - COUNTRY DISTRIBUTION **********/


/*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/
this.statsSummary.totalGraftersByCountry.forEach(element => {
  console.log("PARSING GOT => "+JSON.stringify(element));
  element.forEach(subElement => {
    console.log("PARSING GOT AGAIN => "+JSON.stringify(subElement));
    if(subElement){
    console.log("PARSING EXACTLY => "+subElement.country);
    try{
      if(subElement.country !== null && subElement.country !== "" && subElement.country !=="Array" ){
        this.countryGraftersLabels.push(subElement.country);
        this.countryAllGraftersDataset.push(subElement.numUsers);
      }
    }catch(Exception){
      alert(Exception.toString());
    }
    }
  });
});
this.createBarChartForCountryGrafters();
/*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/




/*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/
this.statsSummary.totalEmployersByCountry.forEach(element => {
  console.log("PARSING GOT => "+JSON.stringify(element));
  element.forEach(subElement => {
    console.log("PARSING GOT AGAIN => "+JSON.stringify(subElement));
    if(subElement){
    console.log("PARSING EXACTLY => "+subElement.country);
    try{
      if(subElement.country !== null && subElement.country !== "" && subElement.country !=="Array" ){
        this.countryEmployersLabels.push(subElement.country);
        this.countryAllEmployersDataset.push(subElement.numUsers);
      }
    }catch(Exception){
      alert(Exception.toString());
    }
    }
  });
});
this.createBarChartForCountryEmployers();
/*********** SHOW ALL GRAFTERS - COUNTRY DISTRIBUTION **********/


}
  });
  
}


reloadGraphs(){
  this.createBarChartForCountry();
  this.createBarChartForCountryGrafters();
  this.createBarChartForCountryEmployers();
}

segmentButtonClicked(ev) {
  //console.log('Segment button clicked', ev);
  this.tabChoice = ev.detail.value;
  console.log('Selected Choice: ', this.tabChoice);
}

createBarChart() {
  this.bars = new Chart(this.barChart.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Grafters', 'Employers', 'Total Users'],
      datasets: [{
        label: 'Active ',
        data: [38, 7, 45],
        backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Pending',
        data: [7, 4, 11],
        backgroundColor: 'rgb(125, 110, 200)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
        borderWidth: 1
      },
      {
        label: 'Blocked',
        data: [0, 1, 1],
        backgroundColor: 'rgb(225, 0, 0)', // array should have same number of elements as number of dataset
        borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
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

createBarChartForCountry() {
  this.barsForCountry = new Chart(this.barChartForCountry.nativeElement, {
    type: 'bar',
    data: {
      labels: this.countryLabels,
      datasets: [{
        label: 'All Users',
        data: this.countryAllUsersDataset,
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

createBarChartForCountryEmployers() {
  this.barsForCountryEmployers = new Chart(this.barChartForEmployersCountry.nativeElement, {
    type: 'bar',
    data: {
      labels: this.countryEmployersLabels,
      datasets: [{
        label: 'All Employers',
        data: this.countryAllEmployersDataset,
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


createBarChartForCountryGrafters() {
  this.barsForCountryGrafters = new Chart(this.barChartForGraftersCountry.nativeElement, {
    type: 'bar',
    data: {
      labels: this.countryGraftersLabels,
      datasets: [{
        label: 'All Grafters',
        data: this.countryAllGraftersDataset,
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


}
