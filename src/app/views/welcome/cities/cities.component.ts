import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WelcomeComponent} from '../welcome.component';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() childCities;

  constructor(private welcomeComponent: WelcomeComponent) { }

  ngOnInit() {
  }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  showCity(lat: number, lng: number) {
    this.welcomeComponent.showCity(lat, lng);
  }
}
