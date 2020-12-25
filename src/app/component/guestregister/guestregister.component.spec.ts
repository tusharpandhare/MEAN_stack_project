import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestregisterComponent } from './guestregister.component';

describe('GuestregisterComponent', () => {
  let component: GuestregisterComponent;
  let fixture: ComponentFixture<GuestregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
