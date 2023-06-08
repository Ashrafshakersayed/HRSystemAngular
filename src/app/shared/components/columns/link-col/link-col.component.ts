import { Component, Input, OnInit } from '@angular/core';
import { ColumnComponent } from 'src/app/shared/models/column-component.model';
import { Column } from 'src/app/shared/models/column.model';

@Component({
  selector: 'app-link-col',
  templateUrl: './link-col.component.html',
  styleUrls: ['./link-col.component.scss']
})
export class LinkColComponent implements OnInit ,ColumnComponent{
  @Input() rowData: any;
  @Input() column: Column;
  @Input() enableEdit: boolean;

  constructor() { }


  ngOnInit(): void {
  }
}
