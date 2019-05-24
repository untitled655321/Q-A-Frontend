import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CitiesComponent } from './cities/cities.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {AuthServices} from '../auth/services';
import {CoordinateService} from './service';

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



  ],
  providers: [
    ...CoordinateService
  ]
})
export class WelcomeModule { }
