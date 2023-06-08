import { FormControl, FormGroup } from "@angular/forms"
import { SearchField } from "./search-field-model";

export interface SearchFieldComponent{
    field:SearchField;
    formGroup:FormGroup;
    beforeSave(obj: any): void
}