export class GooglePlaceResponse{
    latitude:number;
    longitude:number;
    address:string;
  
    constructor(latitude:number, longitude:number, address:string){
      this.address = address;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }