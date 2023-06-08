import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmployeeAdd } from '../models/employee-add.model';
import { EmployeesListDto } from '../models/employees-list-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor( private http: HttpClient) {}

  postEmployee(employee: EmployeeAdd) {
    return this.http.post<any>(`${environment.apiUrl}/api/employees`, employee);
  }

  getMany():Observable<EmployeesListDto[]> {
    return this.http.get<EmployeesListDto[]>(`${environment.apiUrl}/api/Employees`);
  }

}
