import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeService } from './services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeesListComponent, EmployeeAddComponent],
  imports: [CommonModule, EmployeeRoutingModule,ReactiveFormsModule,FormsModule,SharedModule],
  providers: [EmployeeService],
})
export class EmployeeModule {}
