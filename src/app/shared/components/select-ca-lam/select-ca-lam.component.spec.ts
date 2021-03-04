import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCaLamComponent } from './select-ca-lam.component';

describe('SelectCaLamComponent', () => {
  let component: SelectCaLamComponent;
  let fixture: ComponentFixture<SelectCaLamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCaLamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCaLamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
