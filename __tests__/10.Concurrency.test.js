const { concurrency, query } = require('../10.Concurrency');

describe('Concurrency Control', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.useRealTimers();
    console.log.mockRestore();
  });

  test('should handle empty request array', () => {
    concurrency([]);
    expect(console.log).not.toHaveBeenCalled();
  });

  test('should use default concurrency count of 3', () => {
    const timeoutArr = [100, 200, 300, 400];
    const requestArr = timeoutArr.map(timeout => {
      return () => query(timeout);
    });

    concurrency(requestArr);

    // 第一次执行应该有 3 个请求
    expect(console.log).toHaveBeenCalledWith('请求：100');
    expect(console.log).toHaveBeenCalledWith('请求：200');
    expect(console.log).toHaveBeenCalledWith('请求：300');
    expect(console.log).not.toHaveBeenCalledWith('请求：400');
  });
});
