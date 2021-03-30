import { AttributeValueEntity } from '../atrribute-value/atrribute-value.interface';
import { UserEntity } from '../user/user.interface';

export interface AttributesEntity {
  attributesId?: string;
  name?: string;
  createDate?: Date;
  updateDate?: Date;
  attributeValues?: AttributeValueEntity[];
}
