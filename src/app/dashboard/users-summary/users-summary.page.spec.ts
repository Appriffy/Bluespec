import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSummaryPage } from './users-summary.page';

describe('UsersSummaryPage', () => {
  let component: UsersSummaryPage;
  let fixture: ComponentFixture<UsersSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
