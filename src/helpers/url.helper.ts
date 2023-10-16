import { omitBy, isNil } from 'lodash';

export const buildQueryString = (params: Record<string, any>): string => {
  const urlSearchParams = new URLSearchParams(omitBy(params, isNil));
  return urlSearchParams.toString();
}

type QueryObject = Record<string, any>;

export const buildUrl = (
  baseUrl: string,
  path: string | string[],
  query?: string | QueryObject,
) => {
  if (typeof path === 'string') {
    path = [path];
  }

  path = path.map((p) => p.replace(/^\//, '').replace(/\/$/, ''));
  baseUrl = baseUrl.replace(/^\//, '').replace(/\/$/, '');

  let url = [baseUrl, ...path].join('/');

  if (!query) {
    return url;
  }

  if (query && typeof query === 'object') {
    query = buildQueryString(query);
  }

  return [url, query].join('?');
}
