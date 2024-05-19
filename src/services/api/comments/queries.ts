import { useQuery } from 'react-query';
import { getComments } from './request';

export const useGetComments = (post_id: string, options?: any) =>
  useQuery(
    ['getComments', post_id],
    async () => {
      const data = await getComments(post_id);
      return data;
    },
    { ...options }
  );
