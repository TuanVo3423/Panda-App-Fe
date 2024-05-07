import { useQuery } from 'react-query';
import { getPosts } from './request';

export const useGetPosts = (options?: any) =>
  useQuery(
    'getPosts',
    async () => {
      const data = await getPosts();
      return data;
    },
    { ...options }
  );
