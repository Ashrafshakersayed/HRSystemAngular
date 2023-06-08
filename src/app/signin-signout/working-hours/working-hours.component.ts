import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnTypes } from 'src/app/shared/enums/column-type.enum';
import { PipesFormat } from 'src/app/shared/enums/pipes-format.enum';
import { Column } from 'src/app/shared/models/column.model';
import { TableAction } from 'src/app/shared/models/table-action.model';
import { WorkingHourService } from '../services/working-hour.service';
import { WorkingHourDto } from '../models/working-hour';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css'],
})
export class WorkingHoursComponent implements OnInit {
  cols: Column[] = [];
  actions: TableAction[] = [];
  dataItems: WorkingHourDto[] = [];
  @ViewChild('hoursTemplate', {static: true}) hoursTemplate!: TemplateRef<any>;

  constructor(private workingHourS: WorkingHourService) {}
  ngOnInit(): void {
    this.createCols();
    this.getMany();
  }

  createCols() {
    this.cols = [
      {
        fieldName: 'id',
        hidden: true,
        headerName: 'ID',
      },
      {
        fieldName: 'signinTime',
        headerName: 'Date',
        type: ColumnTypes.DATE,
        pipeFormat: PipesFormat.DateFotmat,
      },
      {
        fieldName: 'signinTime',
        headerName: 'signin Time',
        type: ColumnTypes.DATE,
        pipeFormat: PipesFormat.TimeFotmat,
      },
      {
        fieldName: 'SignoutTime',
        headerName: 'Signout Time',
        type: ColumnTypes.DATE,
        pipeFormat: PipesFormat.TimeFotmat,
      },
      {
        fieldName: 'workingHours',
        headerName: 'Working Hours',
        type: ColumnTypes.TEMPLATE,
        template: this.hoursTemplate
      },
    ];
  }

  getMany() {
    this.workingHourS.getMany().subscribe((res: WorkingHourDto[]) => {
      this.dataItems = res;
    });
  }
}
