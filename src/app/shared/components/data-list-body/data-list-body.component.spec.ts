import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListBodyComponent } from './data-list-body.component';

describe('DataListBodyComponent', () => {
  let component: DataListBodyComponent;
  let fixture: ComponentFixture<DataListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
