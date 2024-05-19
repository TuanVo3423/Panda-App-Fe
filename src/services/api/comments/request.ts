import { request } from '@services/axios';
import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';
import { ICreateCommentRequest } from './types';

export const getComments = async (post_id: string) => {
  const res = await request({
    url: `posts/${post_id}/comment`,
    method: 'GET',
  });
  return res;
};

export const createComment = async (
  data: ICreateCommentRequest,
  post_id: string,
  token: string
) => {
  const res = await fetcher(`${API_CONTRACT}/comment/${post_id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(data),
  });
  return res;
};
