import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingInformationPage } from './shipping-information.page';

describe('ShippingInformationPage', () => {
  let component: ShippingInformationPage;
  let fixture: ComponentFixture<ShippingInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
