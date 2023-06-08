import { SearchTypes } from "../enums/search-fields-type.enum";

export interface SearchField{
    fieldName:string;
    dtoName:string;
    type:SearchTypes
}