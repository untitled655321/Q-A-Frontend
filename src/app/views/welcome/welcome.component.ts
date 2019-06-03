import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {circle, icon, latLng, marker, polygon, polyline, tileLayer, point, Map, LeafletEvent,LatLng} from 'leaflet';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Coordinate} from '../../shared/model/coordinate';
import {CoordinatesService} from './service';
import {CityButton} from '../../shared/model/cityButton';

declare let L;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {



  constructor(private coordinatesService: CoordinatesService) {
  }


  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Marker for the top of Mt. Ranier
  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Marker for the parking lot at the base of Mt. Ranier trails
  paradise = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Path from paradise to summit - most points omitted from this example for brevity
  route = polyline([[ 46.78465227596462,-121.74141269177198 ],
    [ 46.80047278292477, -121.73470708541572 ],
    [ 46.815471360459924, -121.72521826811135 ],
    [ 46.8360239546746, -121.7323131300509 ],
    [ 46.844306448474526, -121.73327445052564 ],
    [ 46.84979408048093, -121.74325201660395 ],
    [ 46.853193528950214, -121.74823296256363 ],
    [ 46.85322881676257, -121.74843915738165 ],
    [ 46.85119913890958, -121.7519719619304 ],
    [ 46.85103829018772, -121.7542376741767 ],
    [ 46.85101557523012, -121.75431755371392 ],
    [ 46.85140013694763, -121.75727385096252 ],
    [ 46.8525277543813, -121.75995212048292 ],
    [ 46.85290292836726, -121.76049157977104 ],
    [ 46.8528160918504, -121.76042997278273 ]]);

  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Mt. Rainier Summit': this.summit,
      'Mt. Rainier Paradise Start': this.paradise,
      'Mt. Rainier Climb Route': this.route
    }
  };


  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [ this.streetMaps, this.route, this.summit, this.paradise ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

worldMap: any;
cities: any = {data: []};

  onMapReady(map: Map) {
    this.worldMap = map;
    map.fitBounds(this.route.getBounds(), {
      padding: point(24, 24),
      maxZoom: 12,
      animate: true
    });
    this.coordinatesService.sendCoordinate(map.getCenter())
      .pipe(first())
      .subscribe(
        data => {
          this.cities = data;

        },
        error => {
          console.log(error);
        }
      );

  }


  ngOnInit(){

  }

  ngAfterViewInit(): void {

  }

  showCity(lat: number, lng: number) {
    this.worldMap.panTo([lat, lng],1);

  }


  onMapMoveEnd(map: LeafletEvent) {
    this.coordinatesService.sendCoordinate(this.worldMap.getCenter())
      .pipe(first())
      .subscribe(
        data => {
          //console.log(data);
          this.cities = data;
        },
        error => {
          console.log(error);
        }
      );
  }
}


// apiUrl = 'http://localhost:3000';
// @ViewChild("map")
// public mapElement: ElementRef;
//
// private map:any;
// constructor(private coordinatesService: CoordinatesService) {
// }
//
// ngOnInit() {
//   this.map = L.map('map').setView([51.505, -0.09], 13);
//
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(this.map);
// }
//
// ngAfterViewInit() {
//
//   this.map.on('moveend' || 'zoomend', function(e) {
//
//     console.log(this.map.getCenter());
//
//   });
//
//
//
// }
//
//
// sendCoordinants() {
//
//   this.coordinatesService.sendCoordinate(this.map.getCenter())
//     .pipe(first())
//     .subscribe(
//       data => {
//         console.log(data);
//       },
//       error => {
//         console.log(error);
//       }
//     );
// }
