import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ReminderInterface {
  id?: string;
  reminder_info: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ReminderGetQueryInterface extends GetQueryInterface {
  id?: string;
  reminder_info?: string;
  organization_id?: string;
}
