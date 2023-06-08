import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchTypes } from '../../enums/search-fields-type.enum';
import { SearchField } from '../../models/search-field-model';

@Component({
  selector: 'app-dynamic-search-form',
  templateUrl: './dynamic-search-form.component.html',
  styleUrls: ['./dynamic-search-form.component.sass'],
})
export class DynamicSearchFormComponent implements OnInit {
  @Input() searchFields: SearchField[];
  @Input() type: any
  form: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    typeof(this.type);
    console.log(this.type);
    
    this.createForm();
  }

  createForm() {    
    var Fields: any = {};
    this.searchFields.forEach((e) => {
      Fields[e.fieldName] = [''];
    });
    console.log(Fields);
    this.form = this._fb.group(Fields);
    console.log(this.form.value);
  }

  get searchTypes(){
    return  SearchTypes;
  }

  log(){
    console.log(this.form.value);

  }
}
