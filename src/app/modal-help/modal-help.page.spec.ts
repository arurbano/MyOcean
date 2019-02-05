import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelpPage } from './modal-help.page';

describe('ModalHelpPage', () => {
  let component: ModalHelpPage;
  let fixture: ComponentFixture<ModalHelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
