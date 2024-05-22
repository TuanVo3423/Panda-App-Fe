import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';
import { request } from '@services/axios';

export const getAllTutors = async () => {
  const res = await request({
    url: 'users/tutor',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return res as any;
};

export const likeTutor = async (data: any) => {
  const res = await request({
    url: `users/tutor/${data.id}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data,
  });

  return res as any;
};

// export const UpdateProfile = async (data: UpdateProfileRequest) => {
//   const res = await fetcher(`${API_CONTRACT}/auth/me`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     // headers: {
//     //   "Content-Type": "application/json",
//     // },
//     body: JSON.stringify(data),
//   });
//   return res as any;
// };
