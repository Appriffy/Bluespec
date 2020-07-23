import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersPage } from './job-offers.page';

describe('JobOffersPage', () => {
  let component: JobOffersPage;
  let fixture: ComponentFixture<JobOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOffersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
