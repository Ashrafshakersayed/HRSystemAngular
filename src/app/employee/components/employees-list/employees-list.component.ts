import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Column } from 'src/app/shared/models/column.model';
import { TableAction } from 'src/app/shared/models/table-action.model';
import { EmployeesListDto } from '../../models/employees-list-dto';
import { ColumnTypes } from 'src/app/shared/enums/column-type.enum';
import { PipesFormat } from 'src/app/shared/enums/pipes-format.enum';
import { SigningService } from '../../services/signing.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  cols: Column[] = [];
  actions: TableAction[] = [];
  dataItems: EmployeesListDto[] = [];

  constructor(
    private employeeS: EmployeeService,
    private router: Router,
    private signingS: SigningService
  ) {}
  ngOnInit(): void {
    this.createCols();
    this.createActions();
    this.getMany();
  }

  onClickAdd() {
    this.router.navigate(['/employees/add']);
  }

  createCols() {
    this.cols = [
      {
        fieldName: 'id',
        searchable: true,
        hidden: true,
        headerName: 'ID',
      },
      {
        fieldName: 'name',
        searchable: true,
        headerName: 'Name',
      },
      {
        fieldName: 'address',
        searchable: true,
        headerName: 'Address',
      },
      {
        fieldName: 'emailAddress',
        searchable: true,
        headerName: 'Email Address',
      },
      {
        fieldName: 'birthDate',
        searchable: true,
        headerName: 'Birth Date',
        type: ColumnTypes.DATE,
        pipeFormat: PipesFormat.DateFotmat,
      },
      {
        fieldName: 'mobileNumber',
        searchable: true,
        headerName: 'Mobile Number',
      },
      {
        fieldName: 'managerName',
        searchable: true,
        headerName: 'Manager Name',
      },
    ];
  }

  getMany() {
    this.employeeS.getMany().subscribe((res: EmployeesListDto[]) => {
      this.dataItems = res;
    });
  }

  createActions() {
    this.actions = [
      {
        name: 'Sign in',
        handler: (rowData) => {
          this.signingS.signIn(rowData.id).subscribe(console.log);
        },
      },
      {
        name: 'Sign out',
        handler: (rowData) => {
          this.signingS.signOut(rowData.id).subscribe(console.log);
        },
      },
    ];
  }
}
