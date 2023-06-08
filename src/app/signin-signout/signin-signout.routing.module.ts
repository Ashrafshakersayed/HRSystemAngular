import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingHoursComponent } from './working-hours/working-hours.component';

const routes: Routes = [
  { path: 'working-hours', component: WorkingHoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigningRoutingModule {}
