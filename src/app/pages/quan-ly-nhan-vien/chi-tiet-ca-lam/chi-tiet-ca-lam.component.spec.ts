import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietCaLamComponent } from './chi-tiet-ca-lam.component';

describe('ChiTietCaLamComponent', () => {
  let component: ChiTietCaLamComponent;
  let fixture: ComponentFixture<ChiTietCaLamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietCaLamComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietCaLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
