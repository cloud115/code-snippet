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
    new Observer('test', subject);
    expect(subject.observers.length).toBe(1);
  });

  test('Subject should remove specific observer by reference, not by name', () => {
    const subject = new Subject();
    const observer1 = new Observer('test');
    const observer2 = new Observer('test'); // 同名但不同引用
    
    subject.addObserver(observer1);
    subject.addObserver(observer2);
    expect(subject.observers.length).toBe(2);
    
    subject.removeObserver(observer1);
    expect(subject.observers.length).toBe(1);
    expect(subject.observers[0]).toBe(observer2); // 确保移除的是第一个观察者
  });

  test('Subject should not remove observer if not found', () => {
    const subject = new Subject();
    const observer1 = new Observer('test1');
    const observer2 = new Observer('test2');
    
    subject.addObserver(observer1);
    expect(subject.observers.length).toBe(1);
    
    subject.removeObserver(observer2); // 尝试移除不存在的观察者
    expect(subject.observers.length).toBe(1); // 长度应该保持不变
  });
});