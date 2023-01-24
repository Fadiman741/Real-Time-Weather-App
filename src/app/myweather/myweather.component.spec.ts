/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyweatherComponent } from './myweather.component';

describe('MyweatherComponent', () => {
  let component: MyweatherComponent;
  let fixture: ComponentFixture<MyweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
