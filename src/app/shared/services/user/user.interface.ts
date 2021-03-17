import { RoleEntity } from '../role/role.interface';
import { WorkshiftEntity } from '../workshift/workshift.interface';

export class UserEntity {
  userId?: string;
  username?: string;
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  address?: string;
  roleId?: string;
  role?: RoleEntity;
  workshifts?: WorkshiftEntity[];
}
