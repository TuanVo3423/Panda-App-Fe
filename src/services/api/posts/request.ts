import { request } from '@services/axios';
import { IPostRequest, IPostResponse, IUpdatePostRequest } from './types';

export const getPosts = async () => {
  const res = await request({
    url: `posts`,
    method: 'GET',
  });
  return res as IPostResponse[];
};

export const createPosts = async (data: IPostRequest, token: string) => {
  const res = await request({
    url: `posts`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    data: JSON.stringify(data),
  });

  return res as IPostResponse;
};

export const updatePosts = async (
  data: IUpdatePostRequest,
  post_id: string,
  token: string
) => {
  const res = await request({
    url: `posts/${post_id}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    data: JSON.stringify(data),
  });

  return res as IPostResponse;
};
