import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingServiceComponent } from './using-service.component';

describe('UsingServiceComponent', () => {
  let component: UsingServiceComponent;
  let fixture: ComponentFixture<UsingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
