import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTenSanPhamComponent } from './select-ten-san-pham.component';

describe('SelectTenSanPhamComponent', () => {
  let component: SelectTenSanPhamComponent;
  let fixture: ComponentFixture<SelectTenSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTenSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTenSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
