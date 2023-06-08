import { Component, Input, OnInit } from '@angular/core';
import { ColumnComponent } from 'src/app/shared/models/column-component.model';
import { Column } from 'src/app/shared/models/column.model';

@Component({
  selector: 'app-date-col',
  templateUrl: './date-col.component.html',
  styleUrls: ['./date-col.component.sass']
})
export class DateColComponent implements OnInit ,ColumnComponent {
  @Input() rowData:any;
  @Input() column:Column;
  @Input() enableEdit:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
