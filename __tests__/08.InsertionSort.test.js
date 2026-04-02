const insertionSort = require('../08.InsertionSort');

describe('Insertion Sort', () => {
  test('should sort an array of numbers', () => {
    const arr = [5, 6, 1, 8, 7, 2, 4, 3];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([]);
  });

  test('should handle a single element array', () => {
    const arr = [42];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([42]);
  });

  test('should handle an array with duplicate elements', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });
});
