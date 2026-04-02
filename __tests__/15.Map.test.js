const implementMapUsingReduce = require('../15.Map');

describe('Map Implementation Using Reduce', () => {
  test('should map an array', () => {
    const arr = [1, 2, 3];
    const result = implementMapUsingReduce(arr, (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  test('should pass index to the callback', () => {
    const arr = [10, 20, 30];
    const result = implementMapUsingReduce(arr, (item, index) => item + index);
    expect(result).toEqual([10, 21, 32]);
  });

  test('should handle empty array', () => {
    const arr = [];
    const result = implementMapUsingReduce(arr, (x) => x * 2);
    expect(result).toEqual([]);
  });

  test('should handle array with one element', () => {
    const arr = [42];
    const result = implementMapUsingReduce(arr, (x) => x * 2);
    expect(result).toEqual([84]);
  });

  test('should handle complex transformation', () => {
    const arr = ['a', 'b', 'c'];
    const result = implementMapUsingReduce(arr, (item, index) => item.toUpperCase() + index);
    expect(result).toEqual(['A0', 'B1', 'C2']);
  });
});
