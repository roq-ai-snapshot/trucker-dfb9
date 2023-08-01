import axios from 'axios';
import queryString from 'query-string';
import { LoadingSlipInterface, LoadingSlipGetQueryInterface } from 'interfaces/loading-slip';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLoadingSlips = async (
  query?: LoadingSlipGetQueryInterface,
): Promise<PaginatedInterface<LoadingSlipInterface>> => {
  const response = await axios.get('/api/loading-slips', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLoadingSlip = async (loadingSlip: LoadingSlipInterface) => {
  const response = await axios.post('/api/loading-slips', loadingSlip);
  return response.data;
};

export const updateLoadingSlipById = async (id: string, loadingSlip: LoadingSlipInterface) => {
  const response = await axios.put(`/api/loading-slips/${id}`, loadingSlip);
  return response.data;
};

export const getLoadingSlipById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/loading-slips/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLoadingSlipById = async (id: string) => {
  const response = await axios.delete(`/api/loading-slips/${id}`);
  return response.data;
};
