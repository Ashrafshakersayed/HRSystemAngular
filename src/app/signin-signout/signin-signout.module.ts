import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigningRoutingModule } from './signin-signout.routing.module';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WorkingHoursComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SigningRoutingModule
  ]
})
export class SigninSignoutModule { }
