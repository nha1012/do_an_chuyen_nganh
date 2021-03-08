import { ProductEntity } from '../product/product.interface';
import { TranSactionEntity } from '../transaction/transaction.interface';

export interface OrderEntity {
  orderid?: string;
  productId?: string;
  product?: ProductEntity;
  transactionId?: string;
  transaction?: TranSactionEntity;
  status?: boolean;
  qty?: number;
  tongTien?: number;

}
