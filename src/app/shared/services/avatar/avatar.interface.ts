import { UserEntity } from '../user/user.interface';

export interface AvatarEntity {
  avatarId?: string;
  userId?: string;
  user?: UserEntity;
  url?: string;
  createdDate?: Date;
  updateDate?: Date;
}
