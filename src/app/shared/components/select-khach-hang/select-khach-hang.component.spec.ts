import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKhachHangComponent } from './select-khach-hang.component';

describe('SelectKhachHangComponent', () => {
  let component: SelectKhachHangComponent;
  let fixture: ComponentFixture<SelectKhachHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectKhachHangComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
