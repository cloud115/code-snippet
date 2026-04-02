const compose = require('../13.Compose');

describe('Compose Function', () => {
  test('should compose multiple functions', () => {
    function a(str) {
      return str + 'a';
    }

    function b(str) {
      return str + 'b';
    }

    function c(str) {
      return str + 'c';
    }

    const f = compose(c, b, a);
    expect(f('hello')).toBe('helloabc');
  });

  test('should handle a single function', () => {
    function a(str) {
      return str + 'a';
    }

    const f = compose(a);
    expect(f('hello')).toBe('helloa');
  });

  test('should handle no functions', () => {
    const f = compose();
    expect(f('hello')).toBe('hello');
  });

  test('should handle functions with multiple arguments', () => {
    function add(a, b) {
      return a + b;
    }

    function multiplyBy2(num) {
      return num * 2;
    }

    const f = compose(multiplyBy2, add);
    expect(f(2, 3)).toBe(10);
  });

  test('should handle complex function composition', () => {
    function add1(num) {
      return num + 1;
    }

    function multiplyBy3(num) {
      return num * 3;
    }

    function subtract2(num) {
      return num - 2;
    }

    const f = compose(subtract2, multiplyBy3, add1);
    expect(f(5)).toBe(16); // ((5 + 1) * 3) - 2 = 16
  });
});
