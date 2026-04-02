const { flatten, flattenDepth } = require('../14.Flat');

describe('Array Flatten', () => {
  test('flatten should flatten a nested array', () => {
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('flatten should handle empty array', () => {
    expect(flatten([])).toEqual([]);
  });

  test('flatten should handle deeply nested array', () => {
    expect(flatten([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('flattenDepth should flatten array to specified depth', () => {
    expect(flattenDepth([1, 2, [3, [4, 5]]], 2)).toEqual([1, 2, 3, 4, 5]);
  });

  test('flattenDepth should return original array when depth is 0', () => {
    const arr = [1, 2, [3, [4, 5]]];
    expect(flattenDepth(arr, 0)).toEqual(arr);
  });

  test('flattenDepth should handle empty array', () => {
    expect(flattenDepth([], 2)).toEqual([]);
  });

  test('flattenDepth should flatten to specified depth only', () => {
    expect(flattenDepth([1, [2, [3, [4, 5]]]], 1)).toEqual([1, 2, [3, [4, 5]]]);
  });
});