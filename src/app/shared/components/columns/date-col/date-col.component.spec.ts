import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateColComponent } from './date-col.component';

describe('DateColComponent', () => {
  let component: DateColComponent;
  let fixture: ComponentFixture<DateColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
