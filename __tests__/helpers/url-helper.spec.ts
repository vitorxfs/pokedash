import { describe, expect, it } from 'vitest';

import { buildQueryString, buildUrl } from '@/helpers/url.helper';

describe('URL Helper', () => {
  describe('buildQueryString', () => {
    it('builds query string correctly', () => {
      const queryString = buildQueryString({
        string: 'this is a string',
        number: 0,
      });

      expect(queryString).toBe('string=this+is+a+string&number=0');
    });

    it('builds query string with array correctly', () => {
      const queryString = buildQueryString({
        string: 'this is a string',
        number: 0,
        stringArray:['string1', 'string2']
      });

      expect(queryString).toBe('string=this+is+a+string&number=0&stringArray=string1%2Cstring2');
    });

    it('builds query string with nested onjects stringified', () => {
      const queryString = buildQueryString({
        string: 'this is a string',
        number: 0,
        obj: { stringObj: 'newString', numObj: 1 }
      });

      expect(queryString).toBe('string=this+is+a+string&number=0&obj=%7B%22stringObj%22%3A%22newString%22%2C%22numObj%22%3A1%7D');
    });
  });

  describe('buildUrl', () => {
    it('builds URL with paths', () => {
      const url = buildUrl('http://example.com', ['path1', 'path2']);

      expect(url).toBe('http://example.com/path1/path2');
    });

    it('builds URL with paths without duplicated "/"', () => {
      const url = buildUrl('http://example.com/', ['/path1/', '/path2/']);

      expect(url).toBe('http://example.com/path1/path2');
    });

    it('builds URL with query string', () => {
      const url = buildUrl('http://example.com', [], 'string=string&number=number');

      expect(url).toBe('http://example.com?string=string&number=number');
    });

    it('builds URL with paths and query string', () => {
      const url = buildUrl('http://example.com/', ['/path1/', '/path2/'], 'string=string&number=number');

      expect(url).toBe('http://example.com/path1/path2?string=string&number=number');
    });

    it('builds URL with paths and query string without duplicated "?"', () => {
      const url = buildUrl('http://example.com/', ['/path1/', '/path2/'], '?string=string&number=number');

      expect(url).toBe('http://example.com/path1/path2?string=string&number=number');
    });

    it('builds URL with paths and query object', () => {
      const url = buildUrl('http://example.com/', ['/path1/', '/path2/'], { string: 'string', number: 'number' });

      expect(url).toBe('http://example.com/path1/path2?string=string&number=number');
    });
  })
});
