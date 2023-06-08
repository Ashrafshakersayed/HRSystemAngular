/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinkColComponent } from './link-col.component';

describe('LinkColComponent', () => {
  let component: LinkColComponent;
  let fixture: ComponentFixture<LinkColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
