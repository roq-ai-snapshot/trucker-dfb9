const mapping: Record<string, string> = {
  'e-bills': 'e_bill',
  fuels: 'fuel',
  'loading-slips': 'loading_slip',
  organizations: 'organization',
  reminders: 'reminder',
  services: 'service',
  supplies: 'supply',
  trips: 'trip',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
