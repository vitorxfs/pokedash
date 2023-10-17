import { omitBy, isNil, isPlainObject } from 'lodash';

export const buildQueryString = (params: Record<string, any>): string => {
  Object.keys(params).forEach((k) => {
    if (isPlainObject(params[k])) {
      params[k] = JSON.stringify(params[k]);
    }
  });

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
  query = query.replace(/^\?/, '')
  return [url, query].join('?');
}
