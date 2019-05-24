import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {circle, latLng, polygon, tileLayer} from 'leaflet';
import {LeafletDirective, LeafletDirectiveWrapper} from '@asymmetrik/ngx-leaflet';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Coordinate} from '../../shared/model/coordinate';
import {CoordinatesService} from './service';

declare let L;


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  apiUrl = 'http://localhost:3000';
  @ViewChild("map")
  public mapElement: ElementRef;

  private map:any;
  constructor(private coordinatesService: CoordinatesService) {
  }

  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  public ngAfterViewInit() {

      // this.map.on('moveend' || 'zoomend', function(e) {
      //
      //   console.log(this.map.getCenter());
      //
      // });



  }


sendCoordinants() {

  this.coordinatesService.sendCoordinate(this.map.getCenter())
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
}
}
