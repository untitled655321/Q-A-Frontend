import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IsAuthenticatedOnLoginGuard} from '../../../src.1/app/guards';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[IsAuthenticatedOnLoginGuard]
})
export class DashboardModule { }
