import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncCallComponent } from './func-call.component';

describe('FuncCallComponent', () => {
  let component: FuncCallComponent;
  let fixture: ComponentFixture<FuncCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
