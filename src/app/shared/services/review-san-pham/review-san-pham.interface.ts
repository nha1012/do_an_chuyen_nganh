import { ProductEntity } from '../product/product.interface';

export interface ReviewSanPhamEntity {
  reviewSanPhamId?: string;
  productId?: string;
  product?: ProductEntity;
  soSao?: number;
  danhGia?: string;
}
