import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyHieuSuatComponent } from './quan-ly-hieu-suat.component';

describe('QuanLyHieuSuatComponent', () => {
  let component: QuanLyHieuSuatComponent;
  let fixture: ComponentFixture<QuanLyHieuSuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyHieuSuatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyHieuSuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
