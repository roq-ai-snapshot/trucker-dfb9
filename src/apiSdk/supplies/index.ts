import axios from 'axios';
import queryString from 'query-string';
import { SupplyInterface, SupplyGetQueryInterface } from 'interfaces/supply';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSupplies = async (query?: SupplyGetQueryInterface): Promise<PaginatedInterface<SupplyInterface>> => {
  const response = await axios.get('/api/supplies', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSupply = async (supply: SupplyInterface) => {
  const response = await axios.post('/api/supplies', supply);
  return response.data;
};

export const updateSupplyById = async (id: string, supply: SupplyInterface) => {
  const response = await axios.put(`/api/supplies/${id}`, supply);
  return response.data;
};

export const getSupplyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/supplies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupplyById = async (id: string) => {
  const response = await axios.delete(`/api/supplies/${id}`);
  return response.data;
};
