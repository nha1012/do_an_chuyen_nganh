import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyKhoComponent } from './quan-ly-kho.component';

describe('QuanLyKhoComponent', () => {
  let component: QuanLyKhoComponent;
  let fixture: ComponentFixture<QuanLyKhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyKhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
