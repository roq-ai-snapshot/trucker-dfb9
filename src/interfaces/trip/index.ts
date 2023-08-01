import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface TripInterface {
  id?: string;
  trip_cost: number;
  vehicle_id?: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface TripGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
}
