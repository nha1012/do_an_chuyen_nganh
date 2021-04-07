import { NbMenuItem } from '@nebular/theme';
import { RoleEnum } from 'app/shared/services/role/role.interface';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Bán hàng',
    group: true,
  },
  {
    data: RoleEnum.Employee,
    title: 'Trang bán hàng',
    icon: 'shopping-cart-outline',
    link: '/pages/ban-hang',
    home: true,
    hidden: true,
  },
  {
    title: 'Danh mục quản lý',
    group: true,
    data: RoleEnum.Admin,
    hidden: true,
  },

  {
    data: RoleEnum.Admin,
    title: 'Quản lý nhân viên',
    icon: 'people-outline',
    link: '/pages/quan-ly-nhan-vien',
    hidden: true,
    children: [
      {
        title: 'Thêm nhân viên',
        link: '/pages/quan-ly-nhan-vien/them-nhan-vien',
      },
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
    data: RoleEnum.Admin,
    hidden: true,
    title: 'Duyệt sản phẩm trong kho',
    icon: 'done-all-outline',
    link: '/pages/quan-ly-san-pham/quan-ly-kho/danh-sach',
  },
  {
    data: RoleEnum.Admin,
    hidden: true,
    title: 'Thống kê cửa hàng',
    icon: 'bar-chart-2-outline',
    link: '/pages/thong-ke-cua-hang',
    children: [
      {
        title: 'Thống kê đơn hàng',
        link: '/pages/thong-ke-cua-hang/don-hang',
      },
      {
        title: 'Thống kê kho',
        link: '/pages/thong-ke-cua-hang/kho',
      },
      {
        title: 'Thống kê nhân sự',
        link: '/pages/thong-ke-cua-hang/nhan-su',
      },
      {
        title: 'Thống kê sản phẩm',
        link: '/pages/thong-ke-cua-hang/san-pham',
      },
      {
        title: 'Thống kê chương trình khuyến mãi',
        link: '/pages/thong-ke-cua-hang/ct-khuyen-mai',
      },
    ],
  },
  {
    data: RoleEnum.Admin,
    hidden: true,
    title: 'Báo cáo doanh thu',
    icon: 'alert-triangle-outline',
    link: '/pages/bao-cao-doanh-thu',
  },
  {
    title: 'Danh mục nhân viên',
    group: true,
  },
  {
    hidden: true,
    data: RoleEnum.Employee,
    title: 'Đăng ký ca làm',
    link: '/pages/dang-ky-ca-lam',
    icon: 'calendar-outline',
  },
  {
    hidden: true,
    data: RoleEnum.Employee,
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
    hidden: true,
    data: RoleEnum.Employee,
    title: 'Quản lý khách hàng',
    icon: 'person-outline',
    link: '/pages/quan-ly-khach-hang',
    children: [
      {
        title: 'Thêm khách hàng',
        link: '/pages/quan-ly-khach-hang/them-khach-hang',
      },
      {
        title: 'Quản lý tài khoản',
        link: '/pages/quan-ly-khach-hang/quan-ly-tai-khoan',
      },

    ],
  },
  {
    hidden: true,
    data: RoleEnum.Employee,
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
    hidden: true,
    data: RoleEnum.Employee,
    title: 'Chương trình khuyến mãi',
    icon: 'gift-outline',
    link: '/pages/quan-ly-khuyen-mai',
    children: [
      {
        title: 'Danh sách ',
        link: '/pages/quan-ly-khuyen-mai/danh-sach',
      },
    ],
  },
  {
    hidden: true,
    data: RoleEnum.Employee,
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
    hidden: true,
    data: RoleEnum.Employee,
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
  {
    title: 'Quản lý thuộc tính',
    icon: 'bookmark-outline',
    link: '/pages/quan-ly-thuoc-tinh',
    children: [
      {
        title: 'Thuộc tính sản phẩm',
        link: '/pages/quan-ly-thuoc-tinh/thuoc-tinh-san-pham',
      },
    ],
  },
];
