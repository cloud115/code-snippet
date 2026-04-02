const bigNumberSum = require('../12.BigNumberSum');

describe('Big Number Sum', () => {
  test('should add two small numbers', () => {
    expect(bigNumberSum('923', '456')).toBe('1379');
  });

  test('should add two numbers of different lengths', () => {
    expect(bigNumberSum('123', '45678')).toBe('45801');
  });

  test('should add two large numbers', () => {
    const a = '99999999999999999999';
    const b = '1';
    expect(bigNumberSum(a, b)).toBe('100000000000000000000');
  });

  test('should add two zero numbers', () => {
    expect(bigNumberSum('0', '0')).toBe('0');
  });

  test('should add a number to zero', () => {
    expect(bigNumberSum('12345', '0')).toBe('12345');
    expect(bigNumberSum('0', '12345')).toBe('12345');
  });

  test('should handle carry over at multiple positions', () => {
    expect(bigNumberSum('999', '999')).toBe('1998');
  });

  test('should handle large carry over', () => {
    expect(bigNumberSum('999999', '999999')).toBe('1999998');
  });
});
