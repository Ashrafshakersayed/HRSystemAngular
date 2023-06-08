import { Column } from "./column.model";

export interface ColumnComponent{
     rowData:any;
     column:Column;
     enableEdit:boolean;
}