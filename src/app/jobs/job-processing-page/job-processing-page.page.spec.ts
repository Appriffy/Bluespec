import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProcessingPagePage } from './job-processing-page.page';

describe('JobProcessingPagePage', () => {
  let component: JobProcessingPagePage;
  let fixture: ComponentFixture<JobProcessingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobProcessingPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProcessingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
