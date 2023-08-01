import { TripInterface } from 'interfaces/trip';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  vehicle_info: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  trip?: TripInterface[];
  organization?: OrganizationInterface;
  _count?: {
    trip?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_info?: string;
  organization_id?: string;
}
