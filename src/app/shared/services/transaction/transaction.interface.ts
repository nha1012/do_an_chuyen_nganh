import { OrderEntity } from '../order/order.interface';
import { UserEntity } from '../user/user.interface';

export interface TranSactionEntity {
  tranSactionId?: string;
  status?: boolean;
  userId?: string;
  user?: UserEntity;
  userEmail?: string;
  userPhone?: string;
  username?: string;
  tongTien?: number;
  payment?: string;
  message?: string;
  createDate?: Date;
  updateDate?: Date;
  orders?: OrderEntity[];
}
