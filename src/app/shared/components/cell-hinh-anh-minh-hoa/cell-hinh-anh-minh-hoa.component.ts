import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cell-hinh-anh-minh-hoa',
  templateUrl: './cell-hinh-anh-minh-hoa.component.html',
  styleUrls: ['./cell-hinh-anh-minh-hoa.component.scss'],
})
export class CellHinhAnhMinhHoaComponent implements OnInit {
  @Input() hinhAnh: string;
  constructor() { }

  ngOnInit(): void {
  }

}
