import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  // splitTimestampFromDate(event){
  //   let dataVal = event.target.value;
  //   if(dataVal.includes('T')){
  //   let formattedVal = dataVal.split('T')[0];
  //   return formattedVal;
  //   }
  //   return event;
  // }

  splitTimestampFromDate(dataVal){
    if(dataVal.includes('T')){
    let formattedVal = dataVal.split('T')[0];
    return formattedVal;
    }
    return dataVal;
  }

   public isValidDate(dateString:string) : boolean {
    try{
      var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
    }catch(Exception){
        return true;
    }
  }

   formatTheDate(date:string) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


}
