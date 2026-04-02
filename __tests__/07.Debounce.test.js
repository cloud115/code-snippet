const debounce = require('../07.Debounce');

describe('Debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should debounce function call', async () => {
    const mockFn = jest.fn().mockReturnValue('result');
    const debouncedFn = debounce(mockFn, 100);

    const promise = debouncedFn('arg1', 'arg2');
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    const result = await promise;
    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
    expect(result).toBe('result');
  });

  test('should cancel debounce', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn();
    debouncedFn.cancel();
    
    jest.advanceTimersByTime(100);
    expect(mockFn).not.toHaveBeenCalled();
  });

  test('should invoke immediately when immediate is true', async () => {
    const mockFn = jest.fn().mockReturnValue('result');
    const debouncedFn = debounce(mockFn, 100, true);

    const result = await debouncedFn('arg1');
    expect(mockFn).toHaveBeenCalledWith('arg1');
    expect(result).toBe('result');

    // 第二次调用应该在 setTimeout 后执行
    const promise2 = debouncedFn('arg2');
    jest.advanceTimersByTime(100);
    await promise2;
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith('arg2');
  });

  test('should reset timer on subsequent calls', async () => {
    const mockFn = jest.fn().mockReturnValue('result');
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('first');
    jest.advanceTimersByTime(50);
    const promise = debouncedFn('second'); // 重置计时器
    jest.advanceTimersByTime(50);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    await promise;
    expect(mockFn).toHaveBeenCalledWith('second');
  });
});
