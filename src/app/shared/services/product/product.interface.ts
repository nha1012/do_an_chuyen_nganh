import { AttributeValueEntity } from '../atrribute-value/atrribute-value.interface';
import { ChuongTrinhKhuyenMaiValueEntity } from '../chuong-trinh-khuyen-mai-value/chuong-trinh-khuyen-mai-value.interface';
import { DanhMucSanPhamEntity } from '../danh-muc-san-pham/danh-muc-san-pham.interface';
import { HinhAnhSanPhamEntity } from '../ha-san-pham/ha-san-pham.interface';
import { NhaCungCapEntity } from '../nha-cung-cap/nha-cung-cap.interface';
import { OrderEntity } from '../order/order.interface';
import { ReviewSanPhamEntity } from '../review-san-pham/review-san-pham.interface';

export interface ProductEntity {
  productId?: string;
  tenSanPham?: string;
  reviewSanPhams?: ReviewSanPhamEntity[];
  giaSanPham?: number;
  giaKhuyenMai?: number;
  moTa?: string;
  soLuong?: number;
  danhMucSanPhamId?: string;
  danhMucSanPham?: DanhMucSanPhamEntity;
  createDate?: Date;
  status?: boolean;
  updateDate?: Date;
  anhMinhHoa?: string;
  hinhAnhSamPhams?: HinhAnhSanPhamEntity[];
  nhaCungCapId?: string;
  nhaCungCap?: NhaCungCapEntity;
  orders?: OrderEntity[];
  chuongTrinhKhuyenMaiValues?: ChuongTrinhKhuyenMaiValueEntity[];
  attributeValues?: AttributeValueEntity[];
}
