import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchFormComponent } from './dynamic-search-form.component';

describe('DynamicSearchFormComponent', () => {
  let component: DynamicSearchFormComponent;
  let fixture: ComponentFixture<DynamicSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
