import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { ColumnTypes } from '../../enums/column-type.enum';
import { PipesFormat } from '../../enums/pipes-format.enum';
import { PipeTypes } from '../../enums/pipes-type.enum';
import { TableModes } from '../../enums/table-mode.enum';
import { Column } from '../../models/column.model';
import { CustomDragEvent } from '../../models/drag-event.modal';
import { PagingMetaData } from '../../models/pagination-meta-data.model';
import { TableAction } from '../../models/table-action.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  providers:[TreeDragDropService],
})
export class DataListComponent implements OnInit ,OnChanges {
  @Input('columns') columns :Column[] = [];
  @Input() dataItems :any[] ;
  @Input() disablelazyLoading :boolean = false;
  @Input() paginationMetaData :PagingMetaData;
  @Input() tableMode : TableModes = TableModes.LISTPAGE;
  @Input() enableDargDrop : boolean = false;
  @Input() tableActions :TableAction[];
  @Input() enableExpand : boolean = false;
  @Input() expandRowDataKey = 'children'
  @Output() lazyLoadData :EventEmitter<any> = new EventEmitter();
  @Output() onDragStarted :EventEmitter<any> = new EventEmitter();
  @Output() onDragEnded :EventEmitter<any> = new EventEmitter();
  @Output() onDragEntered :EventEmitter<any> = new EventEmitter();
  @Output() onDragLeft :EventEmitter<any> = new EventEmitter();
  @Output() onDrop :EventEmitter<any> = new EventEmitter();
  @Output() onRowExpanded:EventEmitter<any> = new EventEmitter();

  treeNodes :TreeNode[] =[];
  loading :boolean;
  dragedRow: any;
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

    if(changes['dataItems'] && this.enableExpand){
      this.generateTreeNodes();
    }
  }
  generateTreeNodes(){
    this.treeNodes = [];
    this.dataItems?.forEach((item,index)=>{
      this.treeNodes =this.treeNodes.concat(this.getTreenode(item,index));
    })
  }

  getTreenode(rowData :any,index:any) :TreeNode[]{
    var children:TreeNode[] = [];

    if(rowData[this.expandRowDataKey]){
      rowData[this.expandRowDataKey].forEach((element:any,i:any) => {
       children = children.concat(this.getTreenode(element,index+'#'+i));
      });
    }
    var a = [{
      label: index,
      data: rowData,
      children,
    }];
    return a;
  }

  showLoading(){
    this.loading = true;
  }

  hideLoading(){
    this.loading = false;
  }

  getData(event :any){
    this.lazyLoadData.emit(event);

  }

  onDragStart(rowData:any){
    rowData.IsDragActive = true;
    this.dragedRow = rowData;
    this.onDragStarted.emit(rowData)
  }

  onDragEnd(rowData:any){
    rowData.IsDragActive = false;
    this.onDragEnded.emit(rowData)
    this.dragedRow = null;
  }

  onDragEnter(rowData:any){
    rowData.IsDropActive = true;
    this.onDragEntered.emit(rowData)

  }

  onDragLeave(rowData:any){
    rowData.IsDropActive = false;
    this.onDragLeft.emit(rowData)
  }

  finishDrop(rowData:any){
    rowData.IsDropActive = false;
    const constDragEvent:CustomDragEvent = {
      dragedItem : this.dragedRow,
      dropedItem:rowData
    }
    this.onDrop.emit(constDragEvent)

    this.dragedRow = null;
  }
  onRowExpand(event:any){
    this.onRowExpanded.emit(event);
  }
  get pipesFormat(){
    return PipesFormat;
  }
  get columnTypes(){
    return ColumnTypes;
  }
  get tableModes(){
    return TableModes;
  }

  get pipes(){
    return PipeTypes;
  }
}
