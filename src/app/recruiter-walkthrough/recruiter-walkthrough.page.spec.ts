import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterWalkthroughPage } from './recruiter-walkthrough.page';

describe('RecruiterWalkthroughPage', () => {
  let component: RecruiterWalkthroughPage;
  let fixture: ComponentFixture<RecruiterWalkthroughPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterWalkthroughPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterWalkthroughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
