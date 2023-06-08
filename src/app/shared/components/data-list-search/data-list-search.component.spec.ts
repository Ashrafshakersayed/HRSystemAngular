import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListSearchComponent } from './data-list-search.component';

describe('DataListSearchComponent', () => {
  let component: DataListSearchComponent;
  let fixture: ComponentFixture<DataListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
