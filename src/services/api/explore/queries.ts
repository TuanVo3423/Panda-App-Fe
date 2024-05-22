import { useQuery } from 'react-query';
import { getAllTutors } from './request';
// import { getCaptureResult } from './request';
// import { CaptureRequest } from './types';

export const useGetAllTutors = (options?: any) =>
  useQuery(
    'getAllTutors',
    async () => {
      const res = await getAllTutors();
      return res;
    },
    { ...options }
  );
