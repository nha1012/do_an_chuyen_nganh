export interface CartItem {
  productId: string;
  tenSanPham: string;
  giaKhuyenMai: number;
  soLuong: number;
  thanhTien: number;
  tongSoLuong?: number;
}

export enum TypeTransaction {
  TAIQUAY = 'TT_TAI_QUAY',
  ONLINE = 'TT_ONLINE',
}
