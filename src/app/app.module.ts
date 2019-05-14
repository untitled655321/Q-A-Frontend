import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreGuards } from './guards';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './views/auth/auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import {AlertComponent} from './shared/_directives';
import {AgmCoreModule} from '@agm/core';
import {WelcomeModule} from './views/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    AlertComponent

  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7skUvUJAduHHP4TjV0c8x_VkWewR7wMU '
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    }),
    WelcomeModule

  ],
  providers: [
    CoreGuards
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
