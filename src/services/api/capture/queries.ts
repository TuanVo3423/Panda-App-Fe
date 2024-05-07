import { useQuery } from 'react-query';
import { getCaptureResult } from './request';
import { CaptureRequest } from './types';

export const useGetCaptureResult = (data: CaptureRequest, options?: any) =>
  useQuery(
    'getCaptureResult',
    async () => {
      const res = await getCaptureResult(data);
      return res;
    },
    { ...options }
  );
