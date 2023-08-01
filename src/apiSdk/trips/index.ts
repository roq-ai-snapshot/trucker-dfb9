import axios from 'axios';
import queryString from 'query-string';
import { TripInterface, TripGetQueryInterface } from 'interfaces/trip';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrips = async (query?: TripGetQueryInterface): Promise<PaginatedInterface<TripInterface>> => {
  const response = await axios.get('/api/trips', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTrip = async (trip: TripInterface) => {
  const response = await axios.post('/api/trips', trip);
  return response.data;
};

export const updateTripById = async (id: string, trip: TripInterface) => {
  const response = await axios.put(`/api/trips/${id}`, trip);
  return response.data;
};

export const getTripById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trips/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTripById = async (id: string) => {
  const response = await axios.delete(`/api/trips/${id}`);
  return response.data;
};
