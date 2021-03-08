import { ProductEntity } from '../product/product.interface';

export interface ChuongTrinhKhuyenMaiEntity {
  chuongTrinhKhuyenMaiId?: string;
  startDate?: Date;
  endDate?: Date;
  phanTramGiamGia?: number;
  products?: ProductEntity[];
}
