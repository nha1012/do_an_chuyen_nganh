import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XuatNhapTonComponent } from './xuat-nhap-ton.component';

describe('XuatNhapTonComponent', () => {
  let component: XuatNhapTonComponent;
  let fixture: ComponentFixture<XuatNhapTonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XuatNhapTonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XuatNhapTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
