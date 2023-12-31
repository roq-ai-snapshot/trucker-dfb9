import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface FuelInterface {
  id?: string;
  fuel_type: string;
  price: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface FuelGetQueryInterface extends GetQueryInterface {
  id?: string;
  fuel_type?: string;
  organization_id?: string;
}
