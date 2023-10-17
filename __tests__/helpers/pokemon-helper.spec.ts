import { describe, expect, it } from 'vitest';

import { pokemonNameFormat } from '@/helpers/pokemon.helper';

describe('Pokemon Helper', () => {
  describe('pokemonNameFormat', () => {
    it('formats pokemon name', () => {
      const formattedName = pokemonNameFormat('nidoran-male')

      expect(formattedName).toBe('nidoran male');
    });

    it('formats pokemon long name', () => {
      const formattedName = pokemonNameFormat('urshifu-single-strike')

      expect(formattedName).toBe('urshifu single strike');
    })
  })
})
