import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeSanPhamComponent } from './thong-ke-san-pham.component';

describe('ThongKeSanPhamComponent', () => {
  let component: ThongKeSanPhamComponent;
  let fixture: ComponentFixture<ThongKeSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongKeSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
