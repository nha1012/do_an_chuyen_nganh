import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.scss'],
})
export class EditerComponent implements OnInit {
  @Input() value: any; // This hold the cell value
  @Input() rowData: any; // This holds the entire row object
  constructor() {}

  ngOnInit(): void {}
}
