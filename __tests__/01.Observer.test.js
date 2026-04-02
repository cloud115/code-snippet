const { Subject, Observer } = require('../01.Observer');

describe('Observer Pattern', () => {
  test('Subject should add observer', () => {
    const subject = new Subject();
    const observer = new Observer('test');
    subject.addObserver(observer);
    expect(subject.observers.length).toBe(1);
  });

  test('Subject should remove observer', () => {
    const subject = new Subject();
    const observer = new Observer('test');
    subject.addObserver(observer);
    subject.removeObserver(observer);
    expect(subject.observers.length).toBe(0);
  });

  test('Subject should notify observers', () => {
    const subject = new Subject();
    const observer = new Observer('test');
    subject.addObserver(observer);
    
    // 模拟 console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    subject.notifyObservers('test message');
    expect(consoleSpy).toHaveBeenCalledWith('test', 'get message', 'test message');
    
    consoleSpy.mockRestore();
  });

  test('Observer should automatically add to subject when created with subject', () => {
    const subject = new Subject();
    const observer = new Observer('test', subject);
    expect(subject.observers.length).toBe(1);
  });
});