import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EBillInterface {
  id?: string;
  bill_info: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EBillGetQueryInterface extends GetQueryInterface {
  id?: string;
  bill_info?: string;
  user_id?: string;
}
