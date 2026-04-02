const instanceOf = require('../22.InstanceOf');

describe('InstanceOf Implementation', () => {
  test('should return true for arrays with Array constructor', () => {
    expect(instanceOf([], Array)).toBe(true);
  });

  test('should return false for arrays with Number constructor', () => {
    expect(instanceOf([], Number)).toBe(false);
  });

  test('should return true for objects with Object constructor', () => {
    expect(instanceOf({}, Object)).toBe(true);
  });

  test('should return true for dates with Date constructor', () => {
    expect(instanceOf(new Date(), Date)).toBe(true);
  });

  test('should return false for dates with Object constructor', () => {
    expect(instanceOf(new Date(), Object)).toBe(true); // 因为 Date 继承自 Object
  });

  test('should return false for null', () => {
    expect(instanceOf(null, Object)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(instanceOf(undefined, Object)).toBe(false);
  });

  test('should return false for primitives', () => {
    expect(instanceOf(123, Number)).toBe(false);
    expect(instanceOf('string', String)).toBe(false);
    expect(instanceOf(true, Boolean)).toBe(false);
  });

  test('should work with custom constructors', () => {
    function Person() {}
    const person = new Person();
    expect(instanceOf(person, Person)).toBe(true);
    expect(instanceOf(person, Object)).toBe(true);
  });
});
