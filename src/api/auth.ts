import { SigninRequest, SignupRequest } from '@/shared/types';
import client from '@/utils/axios';
import clientPrivate from '@/utils/axiosPrivate';
import { useQuery } from 'react-query';

export const signup = async (body: SignupRequest) => {
  const { data } = await client.post('/auth/signup/local', body);
  return data;
};

export const signin = async (body: SigninRequest) => {
  const { data } = await client.post('/auth/signin/local', body);
  return data;
};

export const logout = async () => {
  const { data } = await clientPrivate.post('/auth/logout');
  return data;
};

export const refresh = async () => {
  const { data } = await client.post('/auth/refresh');
  return data;
};

const getUsers = async () => {
  const { data } = await clientPrivate.get('/auth');
  return data;
};

export const useGetUsers = () => useQuery(['useGetUsers'], () => getUsers());
