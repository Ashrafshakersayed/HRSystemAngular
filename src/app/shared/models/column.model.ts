import { TemplateRef } from "@angular/core";
import { ColumnTypes } from "../enums/column-type.enum";
import { PipesFormat } from "../enums/pipes-format.enum";
import { PipeTypes } from "../enums/pipes-type.enum";
import { SearchTypes } from "../enums/search-fields-type.enum";

export interface Column{
    fieldName:string,
    headerName:string
    pipe?:PipeTypes;
    hidden?:boolean;
    pipeFormat?:PipesFormat;
    template?: TemplateRef<any>;
    type?: ColumnTypes,
    disableSort?:boolean,
    isEditable?:boolean,
    searchable?:boolean,
    handler?: (rowData:any) => void;
    onEdite?:(rowData:any)=> void;
}
