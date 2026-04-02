const Curry = require('../20.Curry');

describe('Curry Implementation', () => {
  test('should curry a function with multiple arguments', () => {
    function multi(a, b, c) {
      return a * b * c;
    }

    const curriedMulti = Curry(multi);
    expect(curriedMulti(1)(2)(3)).toBe(6);
  });

  test('should curry a function with partial arguments', () => {
    function multi(a, b, c) {
      return a * b * c;
    }

    const curriedMulti = Curry(multi, 1, 2);
    expect(curriedMulti(3)).toBe(6);
  });

  test('should curry a function with multiple partial arguments', () => {
    function add(a, b, c, d) {
      return a + b + c + d;
    }

    const curriedAdd = Curry(add, 1);
    expect(curriedAdd(2)(3)(4)).toBe(10);
  });

  test('should handle functions with no arguments', () => {
    function hello() {
      return 'Hello';
    }

    const curriedHello = Curry(hello);
    expect(curriedHello()).toBe('Hello');
  });

  test('should handle functions with only one argument', () => {
    function square(x) {
      return x * x;
    }

    const curriedSquare = Curry(square);
    expect(curriedSquare(5)).toBe(25);
  });
});
