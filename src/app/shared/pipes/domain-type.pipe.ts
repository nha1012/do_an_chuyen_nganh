import { Pipe, PipeTransform } from '@angular/core';
import { CodedDomainEntity, ColumnTypeEnum } from '../../shared/interfaces/layer.interface';

@Pipe({ name: 'domainType' })
export class DomainTypePipe implements PipeTransform {
  transform(input: Array<CodedDomainEntity>, type: ColumnTypeEnum) {
    return input.filter(f => f.type === type);
  }
}
