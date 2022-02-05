import client from '@/utils/axios';
import { useQuery } from 'react-query';
import {
  IProduct,
  ProductAddRequest,
  ProductSearchQuery,
} from '@/shared/types';

const getProducts = async (query: ProductSearchQuery): Promise<IProduct[]> => {
  const { data } = await client.get('products', { params: query });
  return data;
};

export const useGetProducts = (query: ProductSearchQuery) =>
  useQuery(['useGetProducts', query], () => getProducts(query));

export const addProduct = async (body: ProductAddRequest) => {
  const { data } = await client.post('products', body);
  return data;
};
