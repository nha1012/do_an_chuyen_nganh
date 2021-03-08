import { ProductEntity } from 'app/shared/services/product/product.interface';

export interface HinhAnhSanPhamEntity {
  hinhAnhSanPhamId?: string;
  url?: string;
  alt?: string;
  productId?: string;
  product?: ProductEntity;
}
