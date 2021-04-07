import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuocTinhSanPhamComponent } from './thuoc-tinh-san-pham.component';

describe('ThuocTinhSanPhamComponent', () => {
  let component: ThuocTinhSanPhamComponent;
  let fixture: ComponentFixture<ThuocTinhSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuocTinhSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuocTinhSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
