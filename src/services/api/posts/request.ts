import { request } from '@services/axios';
import { IPostRequest, IPostResponse, IUpdatePostRequest } from './types';
import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';

export const getPosts = async () => {
  const res = await request({
    url: `posts`,
    method: 'GET',
  });
  return res as IPostResponse[];
};

export const createPosts = async (data: IPostRequest) => {
  const res = await fetcher(`${API_CONTRACT}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(data),
  });
  return res as IPostResponse;
};

export const updatePosts = async (
  data: IUpdatePostRequest,
  post_id: string,
  token: string
) => {
  const res = await fetcher(`${API_CONTRACT}/posts/${post_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(data),
  });
  return res as IPostResponse;
};
