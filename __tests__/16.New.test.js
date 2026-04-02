const New = require('../16.New');

describe('New Operator Implementation', () => {
  test('should create a new object with the given constructor', () => {
    function Person(name) {
      this.name = name;
    }

    const person = New(Person, 'Jerry');
    expect(person).toBeInstanceOf(Person);
    expect(person.name).toBe('Jerry');
  });

  test('should handle constructors that return an object', () => {
    function Person(name) {
      this.name = name;
      return { name: 'Overridden', age: 30 };
    }

    const person = New(Person, 'Jerry');
    expect(person).not.toBeInstanceOf(Person);
    expect(person.name).toBe('Overridden');
    expect(person.age).toBe(30);
  });

  test('should handle constructors that return a function', () => {
    function Person(name) {
      this.name = name;
      return function() {
        return 'Hello ' + name;
      };
    }

    const person = New(Person, 'Jerry');
    expect(typeof person).toBe('function');
    expect(person()).toBe('Hello Jerry');
  });

  test('should handle constructors with no arguments', () => {
    function Person() {
      this.name = 'Default';
    }

    const person = New(Person);
    expect(person).toBeInstanceOf(Person);
    expect(person.name).toBe('Default');
  });

  test('should handle constructors with multiple arguments', () => {
    function Person(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }

    const person = New(Person, 'Jerry', 30, 'New York');
    expect(person).toBeInstanceOf(Person);
    expect(person.name).toBe('Jerry');
    expect(person.age).toBe(30);
    expect(person.city).toBe('New York');
  });
});
