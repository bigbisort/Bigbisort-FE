import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweComponent } from './swe.component';

describe('SweComponent', () => {
  let component: SweComponent;
  let fixture: ComponentFixture<SweComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweComponent]
    });
    fixture = TestBed.createComponent(SweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
