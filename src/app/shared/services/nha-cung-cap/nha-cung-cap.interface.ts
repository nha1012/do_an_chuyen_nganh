import { ProductEntity } from '../product/product.interface';

export interface NhaCungCapEntity {
  nhaCungCapId?: string;
  tenNhaCungCap?: string;
  url?: string;
  phoneNumber?: string;
  address?: string;
  products?: ProductEntity[];
}
