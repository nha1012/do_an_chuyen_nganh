import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-select-ca-lam',
  templateUrl: './select-ca-lam.component.html',
  styleUrls: ['./select-ca-lam.component.scss'],
})
export class SelectCaLamComponent implements OnInit, ViewCell {
  @Input() value: string;
  @Input() rowData: any;
  constructor() {}

  ngOnInit(): void {}
}
