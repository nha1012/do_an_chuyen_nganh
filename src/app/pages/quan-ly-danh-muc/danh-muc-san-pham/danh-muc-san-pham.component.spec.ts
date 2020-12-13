import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucSanPhamComponent } from './danh-muc-san-pham.component';

describe('DanhMucSanPhamComponent', () => {
  let component: DanhMucSanPhamComponent;
  let fixture: ComponentFixture<DanhMucSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhMucSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
