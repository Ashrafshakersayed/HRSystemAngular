import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../models/column.model';
import { TableAction } from '../../models/table-action.model';

@Component({
  selector: 'app-data-list-actions',
  templateUrl: './data-list-actions.component.html',
  styleUrls: ['./data-list-actions.component.scss']
})
export class DataListActionsComponent implements OnInit {
  @Input() rowData:any;
  @Input() tableAction:TableAction;

  constructor() { }

  ngOnInit(): void {
  }

}
