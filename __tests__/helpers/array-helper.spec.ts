import { removeByIndex } from '@/helpers/array.helper';
import { describe, expect, it } from 'vitest';

describe('Array Helper', () => {
  describe('removeByIndex', () => {
    it('removes item by index in the begginning of the array', () => {
      const array = removeByIndex([1, 2, 3, 4, 5], 0);

      expect(array).toStrictEqual([2, 3, 4, 5]);
    });

    it('removes item by index in the end of the array', () => {
      const array = removeByIndex([1, 2, 3, 4, 5], 4);

      expect(array).toStrictEqual([1, 2, 3, 4]);
    });

    it('removes item by index in the middle of the array', () => {
      const array = removeByIndex([1, 2, 3, 4, 5], 2);

      expect(array).toStrictEqual([1, 2, 4, 5]);
    });
  })
})
