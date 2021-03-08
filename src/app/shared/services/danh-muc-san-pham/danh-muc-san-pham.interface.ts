import { ProductEntity } from '../product/product.interface';

export interface DanhMucSanPhamEntity {
  danhMucSanPhamId?: string;
  danhMucChaId?: string;
  danhMucCha?: DanhMucSanPhamEntity;
  productId?: string;
  product?: ProductEntity;
}
