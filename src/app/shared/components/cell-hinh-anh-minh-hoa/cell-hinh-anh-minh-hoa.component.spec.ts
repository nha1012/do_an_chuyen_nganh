import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellHinhAnhMinhHoaComponent } from './cell-hinh-anh-minh-hoa.component';

describe('CellHinhAnhMinhHoaComponent', () => {
  let component: CellHinhAnhMinhHoaComponent;
  let fixture: ComponentFixture<CellHinhAnhMinhHoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellHinhAnhMinhHoaComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellHinhAnhMinhHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
