import { AttributesEntity } from '../atrributes/atrributes.interface';
import { ProductEntity } from '../product/product.interface';

export interface AttributeValueEntity {
  attributeValueId?: string;
  value?: string;
  productId?: string;
  product?: ProductEntity;
  attributesId?: string;
  attributes?: AttributesEntity;
  createDate?: Date;
  updateDate?: Date;
}
