import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../models/column.model';
import { TableAction } from '../../models/table-action.model';

@Component({
  selector: 'app-data-list-search',
  templateUrl: './data-list-search.component.html',
  styleUrls: ['./data-list-search.component.scss'],
})
export class DataListSearchComponent implements OnInit {
  @Input() columns: Column[];
  @Input() tableActions: TableAction[];
  constructor() {}

  ngOnInit(): void {}
}
