import axios from 'axios';
import queryString from 'query-string';
import { FuelInterface, FuelGetQueryInterface } from 'interfaces/fuel';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFuels = async (query?: FuelGetQueryInterface): Promise<PaginatedInterface<FuelInterface>> => {
  const response = await axios.get('/api/fuels', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFuel = async (fuel: FuelInterface) => {
  const response = await axios.post('/api/fuels', fuel);
  return response.data;
};

export const updateFuelById = async (id: string, fuel: FuelInterface) => {
  const response = await axios.put(`/api/fuels/${id}`, fuel);
  return response.data;
};

export const getFuelById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/fuels/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFuelById = async (id: string) => {
  const response = await axios.delete(`/api/fuels/${id}`);
  return response.data;
};
