import { NgModule } from '@angular/core';
import { AuthComponents } from './components';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { AuthServices } from './services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule, MatFormFieldModule, MatProgressSpinnerModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import {RouterModule} from '@angular/router';


// in this module we import every angular material module
@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    ...AuthComponents,
    AuthRegisterComponent
  ],
  providers: [
    ...AuthServices
  ]
})
export class AuthModule { }
