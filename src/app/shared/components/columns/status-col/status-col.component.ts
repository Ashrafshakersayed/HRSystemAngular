import { Component, Input, OnInit } from '@angular/core';
import { ColumnComponent } from 'src/app/shared/models/column-component.model';
import { Column } from 'src/app/shared/models/column.model';

@Component({
  selector: 'app-status-col',
  templateUrl: './status-col.component.html',
  styleUrls: ['./status-col.component.sass']
})
export class StatusColComponent implements OnInit ,ColumnComponent{
  @Input() rowData: any;
  @Input() column: Column;
  @Input() enableEdit: boolean;

  constructor() { }


  ngOnInit(): void {
  }
}
