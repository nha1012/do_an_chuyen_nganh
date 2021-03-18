import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellSoLuongSanPhamComponent } from './cell-so-luong-san-pham.component';

describe('CellSoLuongSanPhamComponent', () => {
  let component: CellSoLuongSanPhamComponent;
  let fixture: ComponentFixture<CellSoLuongSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellSoLuongSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellSoLuongSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
