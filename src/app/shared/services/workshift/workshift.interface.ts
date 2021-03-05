import { UserEntity } from '../user/user.interface';

export interface WorkshiftEntity {
  workshiftId?: string;
  workshift?: CaLamEnum;
  userId?: string;
  date?: Date;
  user?: UserEntity;
}

export enum CaLamEnum {
  SANG = 'SANG',
  CHIEU = 'CHIEU',
  TOI = 'TOI',
}
