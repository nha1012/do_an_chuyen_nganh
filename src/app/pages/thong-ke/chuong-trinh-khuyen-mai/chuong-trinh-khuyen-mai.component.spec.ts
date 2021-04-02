import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuongTrinhKhuyenMaiComponent } from './chuong-trinh-khuyen-mai.component';

describe('ChuongTrinhKhuyenMaiComponent', () => {
  let component: ChuongTrinhKhuyenMaiComponent;
  let fixture: ComponentFixture<ChuongTrinhKhuyenMaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuongTrinhKhuyenMaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuongTrinhKhuyenMaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
