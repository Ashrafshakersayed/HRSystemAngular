import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListActionsComponent } from './data-list-actions.component';

describe('DataListActionsComponent', () => {
  let component: DataListActionsComponent;
  let fixture: ComponentFixture<DataListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
