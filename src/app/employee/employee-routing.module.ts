import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
