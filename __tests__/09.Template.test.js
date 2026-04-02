const render = require('../09.Template');

describe('Template Render', () => {
  test('should render template with double curly braces', () => {
    const template = '嗨，{{name}}您好，今天是星期{day}';
    const data = { name: '张三', day: '三' };
    const result = render(template, data);
    expect(result).toBe('嗨，张三您好，今天是星期三');
  });

  test('should render template with single curly braces', () => {
    const template = 'Hello, {name}! You are {age} years old.';
    const data = { name: 'John', age: 30 };
    const result = render(template, data);
    expect(result).toBe('Hello, John! You are 30 years old.');
  });

  test('should handle template with only double curly braces', () => {
    const template = '{{greeting}}, {{name}}!';
    const data = { greeting: 'Hi', name: 'Alice' };
    const result = render(template, data);
    expect(result).toBe('Hi, Alice!');
  });

  test('should handle template with only single curly braces', () => {
    const template = 'The weather is {weather} today.';
    const data = { weather: 'sunny' };
    const result = render(template, data);
    expect(result).toBe('The weather is sunny today.');
  });

  test('should return original template if no data provided', () => {
    const template = 'Hello, {{name}}!';
    const result = render(template, {});
    expect(result).toBe('Hello, undefined!');
  });

  test('should handle template with no placeholders', () => {
    const template = 'Hello, world!';
    const data = { name: 'John' };
    const result = render(template, data);
    expect(result).toBe('Hello, world!');
  });
});
