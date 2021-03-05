import { RoleEntity } from '../role/role.interface';

export class UserEntity {
  userId?: number;
  username: string;
  displayName: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  address?: string;
  roleId?: string;
  role?: RoleEntity;
}
