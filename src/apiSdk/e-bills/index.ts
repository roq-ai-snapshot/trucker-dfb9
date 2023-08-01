import axios from 'axios';
import queryString from 'query-string';
import { EBillInterface, EBillGetQueryInterface } from 'interfaces/e-bill';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEBills = async (query?: EBillGetQueryInterface): Promise<PaginatedInterface<EBillInterface>> => {
  const response = await axios.get('/api/e-bills', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEBill = async (eBill: EBillInterface) => {
  const response = await axios.post('/api/e-bills', eBill);
  return response.data;
};

export const updateEBillById = async (id: string, eBill: EBillInterface) => {
  const response = await axios.put(`/api/e-bills/${id}`, eBill);
  return response.data;
};

export const getEBillById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/e-bills/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEBillById = async (id: string) => {
  const response = await axios.delete(`/api/e-bills/${id}`);
  return response.data;
};
