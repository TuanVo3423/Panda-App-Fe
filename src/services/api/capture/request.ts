import { request } from '@services/axios';
import { CaptureRequest } from './types';
import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';

export const getCaptureResult = async (data: CaptureRequest) => {
  // const res = await request({
  //   url: 'search',
  //   method: 'GET',
  //   data,
  // });
  // console.log('res', res);
  // return res;
  console.log('heeere: ', data.query);
  const res = await fetcher(
    `${API_CONTRACT}/search?questionQuery=${data.query}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(data),
    }
  );
  console.log('res', res);
  return res;
};
