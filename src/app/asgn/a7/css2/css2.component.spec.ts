import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Css2Component } from './css2.component';

describe('Css2Component', () => {
  let component: Css2Component;
  let fixture: ComponentFixture<Css2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Css2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
