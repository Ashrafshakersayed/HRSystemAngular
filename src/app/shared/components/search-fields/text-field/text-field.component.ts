import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchFieldComponent } from 'src/app/shared/models/search-field-component.model';
import { SearchField } from 'src/app/shared/models/search-field-model';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit ,SearchFieldComponent {

  constructor() { }
  @Input() field: SearchField;
  @Input() formGroup: FormGroup;


  ngOnInit(): void {
    console.log('dfdf');
    
  }

  beforeSave(obj: any): void {
  }

}
