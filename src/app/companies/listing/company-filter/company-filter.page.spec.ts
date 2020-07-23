import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFilterPage } from './job-filter.page';

describe('JobFilterPage', () => {
  let component: JobFilterPage;
  let fixture: ComponentFixture<JobFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
