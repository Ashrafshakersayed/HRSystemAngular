import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColumnTypes } from '../../enums/column-type.enum';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-data-list-body',
  templateUrl: './data-list-body.component.html',
  styleUrls: ['./data-list-body.component.scss']
})
export class DataListBodyComponent implements OnInit{
  @Input() column:Column;
  @Input() rowData:any;

  constructor() { }


  ngOnInit(): void {
  }

  get columnTypes(){
    return ColumnTypes;
  }

}
