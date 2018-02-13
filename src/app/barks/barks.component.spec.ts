import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarksComponent } from './barks.component';

describe('BarksComponent', () => {
  let component: BarksComponent;
  let fixture: ComponentFixture<BarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
