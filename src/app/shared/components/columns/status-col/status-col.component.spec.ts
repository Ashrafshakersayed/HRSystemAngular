import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusColComponent } from './status-col.component';

describe('StatusColComponent', () => {
  let component: StatusColComponent;
  let fixture: ComponentFixture<StatusColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
