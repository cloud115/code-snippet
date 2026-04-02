const deepCopy = require('../03.DeepClone');

describe('Deep Clone', () => {
  test('should clone primitive values', () => {
    expect(deepCopy(1)).toBe(1);
    expect(deepCopy('string')).toBe('string');
    expect(deepCopy(true)).toBe(true);
    expect(deepCopy(null)).toBe(null);
    expect(deepCopy(undefined)).toBe(undefined);
  });

  test('should clone plain objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepCopy(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });

  test('should clone arrays', () => {
    const arr = [1, [2, 3]];
    const cloned = deepCopy(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
  });

  test('should clone Date objects', () => {
    const date = new Date();
    const cloned = deepCopy(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  test('should clone RegExp objects', () => {
    const regex = /test/g;
    const cloned = deepCopy(regex);
    expect(cloned).toEqual(regex);
    expect(cloned).not.toBe(regex);
  });

  test('should clone Map objects', () => {
    const map = new Map();
    map.set('key', 'value');
    const cloned = deepCopy(map);
    expect(cloned).toEqual(map);
    expect(cloned).not.toBe(map);
  });

  test('should clone Set objects', () => {
    const set = new Set();
    set.add('value');
    const cloned = deepCopy(set);
    expect(cloned).toEqual(set);
    expect(cloned).not.toBe(set);
  });

  test('should handle circular references', () => {
    const obj = {};
    obj.self = obj;
    const cloned = deepCopy(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.self).not.toBe(obj);
    expect(cloned.self).toBe(cloned);
  });

  test('should clone object prototypes', () => {
    function Person(name) {
      this.name = name;
    }
    Person.prototype.greet = function() {
      return `Hello, ${this.name}`;
    };
    const person = new Person('John');
    const cloned = deepCopy(person);
    expect(cloned).toEqual(person);
    expect(cloned).not.toBe(person);
    expect(cloned.greet()).toBe('Hello, John');
  });
});