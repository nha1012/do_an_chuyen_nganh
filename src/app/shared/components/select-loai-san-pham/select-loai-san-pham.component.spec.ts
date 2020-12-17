import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLoaiSanPhamComponent } from './select-loai-san-pham.component';

describe('SelectLoaiSanPhamComponent', () => {
  let component: SelectLoaiSanPhamComponent;
  let fixture: ComponentFixture<SelectLoaiSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLoaiSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLoaiSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
