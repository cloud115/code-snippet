const Bind = require('../19.Bind');

describe('Bind Implementation', () => {
  test('should bind a function to the given context', () => {
    function bar(val1, val2) {
      return this.value + val1 + val2;
    }

    const boundFn = Bind(bar, { value: 123 }, 456);
    const result = boundFn(789);
    expect(result).toBe(1368);
  });

  test('should handle functions without arguments', () => {
    function bar() {
      return this.value;
    }

    const boundFn = Bind(bar, { value: 123 });
    const result = boundFn();
    expect(result).toBe(123);
  });

  test('should handle functions with only bound arguments', () => {
    function add(a, b, c) {
      return a + b + c;
    }

    const boundFn = Bind(add, null, 1, 2);
    const result = boundFn(3);
    expect(result).toBe(6);
  });

  test('should handle functions with no bound arguments', () => {
    function add(a, b) {
      return a + b;
    }

    const boundFn = Bind(add, null);
    const result = boundFn(1, 2);
    expect(result).toBe(3);
  });

  test('should maintain the bound context even when called with a different context', () => {
    function bar() {
      return this.value;
    }

    const boundFn = Bind(bar, { value: 123 });
    const result = boundFn.call({ value: 456 });
    expect(result).toBe(123);
  });
});
