import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCustomComponent } from './observable-custom.component';

describe('ObservableCustomComponent', () => {
  let component: ObservableCustomComponent;
  let fixture: ComponentFixture<ObservableCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
