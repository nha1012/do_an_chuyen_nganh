import { ProductEntity } from '../product/product.interface';
import { UserEntity } from '../user/user.interface';

export interface ReviewSanPhamEntity {
  reviewSanPhamId?: string;
  productId?: string;
  product?: ProductEntity;
  soSao?: number;
  danhGia?: string;
  userId?: string;
  user?: UserEntity;
}
