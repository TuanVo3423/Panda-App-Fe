import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';
import { LoginRequest, UpdateProfileRequest } from './types';

export const Login = async (data: LoginRequest) => {
  const res = await fetcher(`${API_CONTRACT}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(data),
  });
  return res as any;
};

export const UpdateProfile = async (data: UpdateProfileRequest) => {
  const res = await fetcher(`${API_CONTRACT}/auth/me`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(data),
  });
  return res as any;
};
