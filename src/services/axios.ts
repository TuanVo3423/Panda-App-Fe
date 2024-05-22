import { API_CONTRACT } from '@constants/index';
import axios, { AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
const TIMEOUT = 5 * 60 * 1000; // 5 minutes
const request = axios.create({
  baseURL: API_CONTRACT,
  timeout: TIMEOUT,
});

// Request interceptor for API calls
// @ts-ignore
request.interceptors.request.use(async (request) => {
  return request;
});

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    // if (waitForLogout) return;

    const { status, data } = error?.response || {};
    // // console.log('error: ', error);
    switch (status) {
      case 401: {
        return;
        // if (LocalStorage.get(PROJECT_AUTH_TOKEN)) {
        // if (data?.message) {
        //   toast({
        //     description: data?.message,
        //     status: "error",
        //   });
        // }
        //   // console.log('err ath');
        // }
        // let token;
        // if (isFetchingNewToken) {
        //   token = await waitForGetNewToken();
        // } else {
        //   token = await handleRefreshToken();
        // }
        // return request({
        //   ...config,
        //   headers: {
        //     ...config.headers,
        //     Authorization: `Bearer ${token}`,
        //   },
        // });
      }
      case 403: {
        // if (data?.message) {
        //   toast({
        //     description: data?.message,
        //     status: "error",
        //   });
        // }
        // clearLocalStorageAndGotoLogin();
        return;
      }
    }

    return Promise.reject(data);
  }
);

export { request };
