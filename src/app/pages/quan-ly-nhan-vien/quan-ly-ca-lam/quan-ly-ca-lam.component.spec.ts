import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyCaLamComponent } from './quan-ly-ca-lam.component';

describe('QuanLyCaLamComponent', () => {
  let component: QuanLyCaLamComponent;
  let fixture: ComponentFixture<QuanLyCaLamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyCaLamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyCaLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
