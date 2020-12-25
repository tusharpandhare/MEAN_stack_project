import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcategoryComponent } from './getcategory.component';

describe('GetcategoryComponent', () => {
  let component: GetcategoryComponent;
  let fixture: ComponentFixture<GetcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
