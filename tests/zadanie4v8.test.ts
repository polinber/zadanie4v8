import { describe, it, expect } from 'vitest';
import { y } from '../src/zadanie4v8';

describe('zadanie4v8 function', () => {
    it('should return correct value for x = 0.7', () => {
        const result = y(0.7);
        expect(result).toBeCloseTo(0.326333, 5);
    });

    it('should return null for x = 1.6 (out of acos domain)', () => {
        const result = y(1.6);
        expect(result).toBeNull();
    });
});