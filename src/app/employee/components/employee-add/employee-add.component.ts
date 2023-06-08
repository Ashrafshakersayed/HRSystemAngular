import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeAdd } from '../../models/employee-add.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  constructor(private employeeS: EmployeeService, private router: Router) {}

  employee = new EmployeeAdd();
  ngOnInit() {
    // this.employeeS.postEmployee(this.employee).subscribe(console.log)
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.employeeS.postEmployee(this.employee).subscribe((r) => {
      this.router.navigate(['/employees']);
      console.log(r);
    });
  }
}
