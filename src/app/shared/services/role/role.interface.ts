export interface RoleEntity {
  roleId?: RoleEnum;
  roleName?: string;
}
export enum RoleEnum {
  Employee = 'fdf1b651-f456-4e51-a714-4d698b9bb910',
  Admin = '31f996e9-0fb9-45fa-ad67-2adb708291cb',
  User = 'c5075942-6d22-474f-8468-40b199201b4f',
}
