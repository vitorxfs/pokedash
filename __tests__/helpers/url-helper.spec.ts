import { describe, expect, it } from 'vitest';

import { addSearchParam, buildQueryString, buildUrl, removeSearchParam } from '@/helpers/url.helper';

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
  });

  describe('addSearchParam', () => {
    it('adds parameter to search params', () => {
      const params = addSearchParam('param1=value1&param2=value2', 'param3', 'value3');

      expect(params).toBe('param1=value1&param2=value2&param3=value3');
    });

    it('adds array parameter to search params', () => {
      const params = addSearchParam('param1=value1&param2=value2', 'param3', ['value31', 'value32']);

      expect(params).toBe('param1=value1&param2=value2&param3=value31%2Cvalue32');
    });

    it('adds object parameter to search params', () => {
      const params = addSearchParam('param1=value1&param2=value2', 'obj', { objParameter: 'objValue' });

      expect(params).toBe('param1=value1&param2=value2&obj=%7B%22objParameter%22%3A%22objValue%22%7D');
    });

    it('adds parameter to empty search params', () => {
      const params = addSearchParam('', 'param3', 'value3');

      expect(params).toBe('param3=value3');
    });
  });

  describe('removeSearchParam', () => {
    it('removes parameter from search params', () => {
      const params = removeSearchParam('param1=value1&param2=value2&param3=value3', 'param2');

      expect(params).toBe('param1=value1&param3=value3');
    });
  });
});
