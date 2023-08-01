interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Logistics Manager', 'Transporter', 'Supplier', 'Driver'],
  tenantName: 'Organization',
  applicationName: 'Trucker',
  addOns: ['chat', 'notifications', 'file'],
};
