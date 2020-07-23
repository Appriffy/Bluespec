import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationFeesPage } from './relocation-fees.page';

describe('RelocationFeesPage', () => {
  let component: RelocationFeesPage;
  let fixture: ComponentFixture<RelocationFeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelocationFeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelocationFeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
