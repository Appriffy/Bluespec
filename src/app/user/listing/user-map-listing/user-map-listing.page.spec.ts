import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMapListingPage } from './user-map-listing.page';

describe('UserMapListingPage', () => {
  let component: UserMapListingPage;
  let fixture: ComponentFixture<UserMapListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMapListingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMapListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
