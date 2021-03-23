import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachComponent } from './danh-sach.component';

describe('DanhSachComponent', () => {
  let component: DanhSachComponent;
  let fixture: ComponentFixture<DanhSachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
