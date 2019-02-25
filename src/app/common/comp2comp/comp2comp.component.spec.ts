import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2compComponent } from './comp2comp.component';

describe('Comp2compComponent', () => {
  let component: Comp2compComponent;
  let fixture: ComponentFixture<Comp2compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
