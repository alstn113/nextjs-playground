import { SigninRequest, SignupRequest } from '@/shared/types';
import client from '@/utils/axios';

export const signup = async (body: SignupRequest) => {
  const { data } = await client.post('/auth/signup/local', body);
  return data;
};

export const signin = async (body: SigninRequest) => {
  const { data } = await client.post('/auth/signin/local', body);
  return data;
};

export const logout = async () => {
  const { data } = await client.post('/auth/logout');
  return data;
};
