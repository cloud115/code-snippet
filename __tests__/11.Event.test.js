const EventEmitter = require('../11.Event');

describe('Event Emitter', () => {
  test('should register and trigger events', () => {
    const emitter = new EventEmitter();
    const mockCallback = jest.fn();

    emitter.on('test', mockCallback);
    emitter.trigger('test', 'arg1', 'arg2');

    expect(mockCallback).toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should register multiple listeners for the same event', () => {
    const emitter = new EventEmitter();
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    emitter.on('test', mockCallback1);
    emitter.on('test', mockCallback2);
    emitter.trigger('test');

    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalled();
  });

  test('should remove listeners', () => {
    const emitter = new EventEmitter();
    const mockCallback = jest.fn();

    emitter.on('test', mockCallback);
    emitter.off('test', mockCallback);
    emitter.trigger('test');

    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('should handle once listeners', () => {
    const emitter = new EventEmitter();
    const mockCallback = jest.fn();

    emitter.once('test', mockCallback);
    emitter.trigger('test');
    emitter.trigger('test');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('should handle non-existent events', () => {
    const emitter = new EventEmitter();
    // Should not throw an error
    expect(() => emitter.trigger('non-existent')).not.toThrow();
  });

  test('should handle removing non-existent listeners', () => {
    const emitter = new EventEmitter();
    const mockCallback = jest.fn();
    // Should not throw an error
    expect(() => emitter.off('non-existent', mockCallback)).not.toThrow();
  });
});
