import { ChuongTrinhKhuyenMaiEntity } from '../chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.interface';
import { ProductEntity } from '../product/product.interface';

export interface ChuongTrinhKhuyenMaiValueEntity {
  chuongTrinhKhuyenMaiValueId?: string;
  chuongTrinhKhuyenMaiId?: string;
  chuongTrinhKhuyenMai?: ChuongTrinhKhuyenMaiEntity;
  productId?: string;
  product?: ProductEntity;
  giaKhuyenMai?: number;
}
