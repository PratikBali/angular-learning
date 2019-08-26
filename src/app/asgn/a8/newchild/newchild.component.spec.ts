import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchildComponent } from './newchild.component';

describe('NewchildComponent', () => {
  let component: NewchildComponent;
  let fixture: ComponentFixture<NewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
