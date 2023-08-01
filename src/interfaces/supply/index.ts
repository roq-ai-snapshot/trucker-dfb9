import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SupplyInterface {
  id?: string;
  supply_info: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SupplyGetQueryInterface extends GetQueryInterface {
  id?: string;
  supply_info?: string;
  user_id?: string;
}
