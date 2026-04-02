const { concurrency } = require('../10.Concurrency');

describe('Concurrency Control', () => {
  test('should handle empty request array', async () => {
    const result = await concurrency([]);
    expect(result).toEqual([]);
  });

  test('should handle non-array input', async () => {
    const result = await concurrency('not an array');
    expect(result).toEqual([]);
  });

  test('should handle negative concurrency count', async () => {
    const requestArr = [() => Promise.resolve(1), () => Promise.resolve(2)];
    const result = await concurrency(requestArr, -5);
    expect(result).toEqual([1, 2]);
  });

  test('should handle zero concurrency count', async () => {
    const requestArr = [() => Promise.resolve(1), () => Promise.resolve(2)];
    const result = await concurrency(requestArr, 0);
    expect(result).toEqual([1, 2]);
  });

  test('should use default concurrency count of 3', async () => {
    const requestArr = [
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3),
      () => Promise.resolve(4)
    ];
    const result = await concurrency(requestArr);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should respect specified concurrency count', async () => {
    const requestArr = [
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3)
    ];
    const result = await concurrency(requestArr, 2);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should return results in the correct order', async () => {
    const requestArr = [
      () => new Promise(resolve => setTimeout(() => resolve(1), 300)),
      () => new Promise(resolve => setTimeout(() => resolve(2), 100)),
      () => new Promise(resolve => setTimeout(() => resolve(3), 200))
    ];
    const result = await concurrency(requestArr, 2);
    expect(result).toEqual([1, 2, 3]); // 应该按照原始顺序返回结果
  });
});
