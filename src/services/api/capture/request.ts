import { request } from '@services/axios';
import { CaptureRequest, SolvingProblemRequest } from './types';
import { fetcher } from '@services/fetcher';
import { API_CONTRACT } from '@constants/index';

export const getOCR = async (url_image: string) => {
  const res = await fetcher(`${API_CONTRACT}/ocr/text`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify({ imgUrl: url_image }),
  });
  // console.log('res', res);
  return res as SolvingProblemRequest;
};

export const getCaptureResult = async (data: CaptureRequest) => {
  console.log('da encode:', data.query);
  // const res = await request({
  //   url: 'search',
  //   method: 'GET',
  //   data,
  // });
  // console.log('res', res);
  // return res;
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
  // console.log('res', res);
  return res;
};
