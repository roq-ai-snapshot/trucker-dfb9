import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoadingSlipInterface {
  id?: string;
  slip_info: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LoadingSlipGetQueryInterface extends GetQueryInterface {
  id?: string;
  slip_info?: string;
  user_id?: string;
}
