import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CaLamEnum } from 'app/shared/services/workshift/workshift.interface';

@Component({
  selector: 'ngx-select-ca-lam',
  templateUrl: './select-ca-lam.component.html',
  styleUrls: ['./select-ca-lam.component.scss'],
})
export class SelectCaLamComponent implements OnInit {
  @Output() valueChange = new EventEmitter<string>();
  caLam: CaLamEnum;
  constructor() { }
  ngOnInit(): void { }
}
