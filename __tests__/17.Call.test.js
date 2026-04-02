const Call = require('../17.Call');

describe('Call Implementation', () => {
  test('should call a function with the given context', () => {
    function bar(val) {
      return this.value + val;
    }

    const result = Call(bar, { value: 123 }, 456);
    expect(result).toBe(579);
  });

  test('should handle functions without arguments', () => {
    function bar() {
      return this.value;
    }

    const result = Call(bar, { value: 123 });
    expect(result).toBe(123);
  });

  test('should handle functions with multiple arguments', () => {
    function add(a, b, c) {
      return this.value + a + b + c;
    }

    const result = Call(add, { value: 10 }, 1, 2, 3);
    expect(result).toBe(16);
  });

  test('should handle functions that return undefined', () => {
    function bar() {
      this.value = 123;
    }

    const result = Call(bar, {});
    expect(result).toBeUndefined();
  });

  test('should handle null or undefined context', () => {
    function bar() {
      return this;
    }

    const result1 = Call(bar, null);
    const result2 = Call(bar, undefined);
    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
});
