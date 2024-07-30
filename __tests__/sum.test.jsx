import {describe, expect, test} from '@jest/globals';
import items from '../packages/calcas-theme/src/components/navbar/navbar-data/menu-item';

const sum = (a, b) => a + b;

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});