import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSummaryPage } from './countries-summary.page';

describe('CountriesSummaryPage', () => {
  let component: CountriesSummaryPage;
  let fixture: ComponentFixture<CountriesSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
