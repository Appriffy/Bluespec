import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit  {

 
  @Input() coords: {latitude: number, longitude: number};

  public map: google.maps.Map;
  public markers: any[] = [];
  private mapsLoaded: boolean = false;
  private networkHandler = null;
  constructor() { 

  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap(): void {
    const POSITION = {lat: this.coords.latitude, lng: this.coords.longitude}
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: POSITION || {lat: 22, lng: 22}
    });
    const marker = new google.maps.Marker({
      position: POSITION,
      map: this.map
    });

    this.map.setCenter(POSITION);
  }

  public addMarker(lat: number, lng: number): void {
    let latLng = new google.maps.LatLng(lat, lng);
    let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
    });
    this.markers.push(marker);
    this.map.setCenter(latLng);
    this.addRadiusAround(marker, lat, lng, 25);
    console.log("Marker has been added at "+lat+", "+lng);
}

public addRadiusAround(marker: google.maps.Marker, lat: number, lng: number, search_radius:number): void {
  
var latlng = new google.maps.LatLng(lat, lat);
    var sunCircle = {
      strokeColor: "#c3fc49",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#c3fc49",
      fillOpacity: 0.35,
      map: this.map,
      center: latlng,
      radius: search_radius // in meters
  };
  //cityCircle = new google.maps.Circle(sunCircle)
  console.log("Radius has been set being drawn.");
  new google.maps.Circle(sunCircle).bindTo('center', marker, 'position');
  console.log("Radius has been drawn.");
}


// Redraw all markers on the map
updateMap(locations) {
  // Remove all current marker
  this.markers.map(marker => marker.setMap(null));
  this.markers = [];
 
  for (let loc of locations) {
    let latLng = new google.maps.LatLng(loc.lat, loc.lng);
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.markers.push(marker);
  }
}


}



// import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss'],
// })
// export class MapComponent implements AfterViewInit  {

 
//   @Input() coords: {latitude: number, longitude: number};

//   constructor() { }

//   ngAfterViewInit() {
//     this.initMap();
//   }

//   initMap(): void {
//     const POSITION = {lat: this.coords.latitude, lng: this.coords.longitude}
//     const map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: POSITION || {lat: 22, lng: 22}
//     });
//     const marker = new google.maps.Marker({
//       position: POSITION,
//       map: map
//     });
//   }

  
// }
