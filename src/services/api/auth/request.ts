import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';
import { LoginRequest, UpdateProfileRequest } from './types';
import { request } from '@services/axios';

export const Login = async (data: LoginRequest) => {
  const res = await request({
    url: 'auth/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(data),
  });
  // const res = await request(`${API_CONTRACT}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   // },
  //   body: JSON.stringify(data),
  // });
  return res as any;
};

export const UpdateProfile = async ({
  data,
}: {
  data: UpdateProfileRequest;
}) => {
  const res = await request({
    url: `users/${data.id}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(data),
  });
  return res;
};
