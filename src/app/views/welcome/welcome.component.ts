import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'satellite';


  constructor() { }

  ngOnInit() {
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
  }

}
