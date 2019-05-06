import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestaComponent } from './festa.component';

describe('FestaComponent', () => {
  let component: FestaComponent;
  let fixture: ComponentFixture<FestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
