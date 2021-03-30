import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AttributesEntity } from 'app/shared/services/atrributes/atrributes.interface';
import { AttributesService } from 'app/shared/services/atrributes/atrributes.service';

@Component({
  selector: 'ngx-select-thuoc-tinh',
  templateUrl: './select-thuoc-tinh.component.html',
  styleUrls: ['./select-thuoc-tinh.component.scss'],
})
export class SelectThuocTinhComponent implements OnInit {
  @Input() value: string;
  @Input() disabled = false;
  @Output() selectedItem = new EventEmitter();

  lstThuocTinh: AttributesEntity[];
  constructor(private attributesService: AttributesService) {
    this.attributesService.getMany()
      .subscribe(value => this.lstThuocTinh = value);
  }

  ngOnInit(): void {
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
