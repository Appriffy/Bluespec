import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetPage } from './skill-set.page';

describe('SkillSetPage', () => {
  let component: SkillSetPage;
  let fixture: ComponentFixture<SkillSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
