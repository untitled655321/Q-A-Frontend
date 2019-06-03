import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CitiesComponent } from './cities/cities.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {AuthServices} from '../auth/services';
import {CoordinateService} from './service';
import {MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import {ScrollDispatcher, ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [CitiesComponent, TopicsComponent, QuestionsComponent],
  exports: [
    CitiesComponent,
    TopicsComponent,
    QuestionsComponent,

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LeafletModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    ScrollingModule



  ],
  providers: [
    ...CoordinateService
  ]
})
export class WelcomeModule { }
