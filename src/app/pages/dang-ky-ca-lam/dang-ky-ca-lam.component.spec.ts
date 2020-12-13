import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyCaLamComponent } from './dang-ky-ca-lam.component';

describe('DangKyCaLamComponent', () => {
  let component: DangKyCaLamComponent;
  let fixture: ComponentFixture<DangKyCaLamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangKyCaLamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyCaLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
