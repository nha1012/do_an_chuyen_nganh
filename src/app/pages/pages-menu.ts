import { NbMenuItem } from '@nebular/theme';
import { icon } from 'leaflet';
import { title } from 'process';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Bán hàng',
    group: true,
  },
  {
    title: 'Trang bán hàng',
    icon: 'shopping-cart-outline',
    link: '/pages/ban-hang',
    home: true,
  },
  {
    title: 'Danh mục quản lý',
    group: true,
  },

  {
    title: 'Quản lý nhân viên',
    icon: 'people-outline',
    link: '/pages/quan-ly-nhan-vien',
    children: [
      {
        title: 'Quản lý tài khoản',
        link: '/pages/quan-ly-nhan-vien/quan-ly-tai-khoan',
      },
      {
        title: 'Quản lý ca làm',
        link: '/pages/quan-ly-nhan-vien/quan-ly-ca-lam',
      },
    ],
  },
  {
    title: 'Duyệt sản phẩm trong kho',
    icon: 'done-all-outline',
    link: '/pages/quan-ly-san-pham/quan-ly-kho/danh-sach',
  },
  {
    title: 'Thống kê của hàng',
    icon: 'alert-triangle-outline',
    link: '/pages/thong-ke-cua-hang',
    children: [
      {
        title: 'Thống kê đơn hàng',
        link: '/pages/thong-ke-cua-hang/don-hang',
      },
      {
        title: 'Báo cáo xuất nhập tồn',
        link: '/pages/thong-ke-cua-hang/xuat-nhap-ton',
      },
      {
        title: 'Thống kê nhân sự',
        link: '/pages/thong-ke-cua-hang/nhan-su',
      },
      {
        title: 'Thống kê sản phẩm',
        link: '/pages/thong-ke-cua-hang/san-pham',
      },
    ],
  },
  {
    title: 'Danh mục nhân viên',
    group: true,
  },
  {
    title: 'Đăng ký ca làm',
    link: '/pages/dang-ky-ca-lam',
    icon: 'calendar-outline',
  },
  {
    title: 'Quản lý sản phẩm',
    icon: 'car-outline',
    link: '/pages/quan-ly-san-pham',
    children: [
      {
        title: 'Quản lý kho',
        link: '/pages/quan-ly-san-pham/quan-ly-kho',
        children: [
          {
            title: 'Nhập kho',
            link: '/pages/quan-ly-san-pham/quan-ly-kho/them-moi',
          },
          {
            title: 'Danh sách ',
            link: '/pages/quan-ly-san-pham/quan-ly-kho/danh-sach',
          },
        ],
      },
      {
        title: 'Danh sách sản phẩm',
        link: '/pages/quan-ly-san-pham/danh-sach',
      },
    ],
  },
  {
    title: 'Quản lý khách hàng',
    icon: 'person-outline',
    link: '/pages/quan-ly-khach-hang',
    children: [
      {
        title: 'Quản lý tài khoản',
        link: '/pages/quan-ly-khach-hang/quan-ly-tai-khoan',
      },
    ],
  },
  {
    title: 'Quản lý nhà cung cấp',
    icon: 'pricetags-outline',
    link: '/pages/quan-ly-nha-cung-cap',
    children: [
      {
        title: 'Danh sách nhà cung cấp',
        link: '/pages/quan-ly-nha-cung-cap/danh-sach',
      },
    ],
  },
  {
    title: 'Chương trình khuyến mãi',
    icon: 'gift-outline',
    link: '/pages/quan-ly-khuyen-mai',
    children: [
      {
        title: 'Danh sách ',
        link: '/pages/quan-ly-khuyen-mai/danh-sach',
      },
      {
        title: 'Báo cáo từng chương trình khuyến mãi',
        link: '/pages/quan-ly-khuyen-mai/bao-cao',
      },
    ],
  },
  {
    title: 'Quản lý đơn hàng',
    icon: 'shopping-cart-outline',
    link: '/pages/quan-ly-don-hang',
    children: [
      {
        title: 'Danh sách ',
        link: '/pages/quan-ly-don-hang/danh-sach',
      },
    ],
  },
  {
    title: 'Quản lý danh mục',
    icon: 'bookmark-outline',
    link: '/pages/quan-ly-danh-muc',
    children: [
      {
        title: 'Danh mục sản phẩm ',
        link: '/pages/quan-ly-danh-muc/danh-muc-san-pham',
      },
    ],
  },
];
