import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingPipeComponent } from './using-pipe.component';

describe('UsingPipeComponent', () => {
  let component: UsingPipeComponent;
  let fixture: ComponentFixture<UsingPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
