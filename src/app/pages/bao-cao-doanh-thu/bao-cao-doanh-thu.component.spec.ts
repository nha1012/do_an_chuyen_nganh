import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoCaoDoanhThuComponent } from './bao-cao-doanh-thu.component';

describe('BaoCaoDoanhThuComponent', () => {
  let component: BaoCaoDoanhThuComponent;
  let fixture: ComponentFixture<BaoCaoDoanhThuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoCaoDoanhThuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoCaoDoanhThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
