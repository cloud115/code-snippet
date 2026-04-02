const Apply = require('../18.Apply');

describe('Apply Implementation', () => {
  test('should call a function with the given context and arguments array', () => {
    function bar(val) {
      return this.value + val;
    }

    const result = Apply(bar, { value: 123 }, [456]);
    expect(result).toBe(579);
  });

  test('should handle functions without arguments', () => {
    function bar() {
      return this.value;
    }

    const result = Apply(bar, { value: 123 });
    expect(result).toBe(123);
  });

  test('should handle functions with multiple arguments', () => {
    function add(a, b, c) {
      return this.value + a + b + c;
    }

    const result = Apply(add, { value: 10 }, [1, 2, 3]);
    expect(result).toBe(16);
  });

  test('should handle functions that return undefined', () => {
    function bar() {
      this.value = 123;
    }

    const result = Apply(bar, {});
    expect(result).toBeUndefined();
  });

  test('should handle null or undefined context', () => {
    function bar() {
      return this;
    }

    const result1 = Apply(bar, null);
    const result2 = Apply(bar, undefined);
    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
});
