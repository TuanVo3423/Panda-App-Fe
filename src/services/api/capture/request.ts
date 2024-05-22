import { request } from '@services/axios';
import { CaptureRequest, SolvingProblemRequest } from './types';

export const getOCR = async (url_image: string) => {
  const res = await request({
    url: 'ocr/text',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ imgUrl: url_image }),
  });
 
  return res as SolvingProblemRequest;
};

export const getCaptureResult = async (data: CaptureRequest) => {
  const res = await request({
    url: 'search?questionQuery=${data.query}',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('da encode:', data.query);

  return res;
};
