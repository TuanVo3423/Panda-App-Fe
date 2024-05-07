export const fetcher = (input: any, init: any) =>
  fetch(input, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    ...init,
  }).then((res) => res.json());
