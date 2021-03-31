import { ChuongTrinhKhuyenMaiValueEntity } from '../chuong-trinh-khuyen-mai-value/chuong-trinh-khuyen-mai-value.interface';

export interface ChuongTrinhKhuyenMaiEntity {
  chuongTrinhKhuyenMaiId?: string;
  startDate?: Date;
  endDate?: Date;
  tenChuongTrinh?: string;
  chuongTrinhKhuyenMaiValues?: ChuongTrinhKhuyenMaiValueEntity[];
}
