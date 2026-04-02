const { PubSub, Publisher, Subscriber } = require('../02.PubSub');

describe('Publish-Subscribe Pattern', () => {
  test('PubSub should publish and store messages', () => {
    const pubsub = new PubSub();
    const type = 'TEST_TYPE';
    const message = 'test message';
    
    pubsub.publish(type, message);
    expect(pubsub.messages[type]).toEqual([message]);
  });

  test('PubSub should subscribe to events', () => {
    const pubsub = new PubSub();
    const type = 'TEST_TYPE';
    const mockCallback = jest.fn();
    
    pubsub.subscribe(type, mockCallback);
    expect(pubsub.listeners[type]).toContain(mockCallback);
  });

  test('PubSub should notify subscribers with the latest message', () => {
    const pubsub = new PubSub();
    const type = 'TEST_TYPE';
    const message1 = 'test message 1';
    const message2 = 'test message 2';
    const mockCallback = jest.fn();
    
    pubsub.publish(type, message1);
    pubsub.publish(type, message2);
    pubsub.subscribe(type, mockCallback);
    pubsub.notify(type);
    
    expect(mockCallback).toHaveBeenCalledWith(message2); // 只传递最新的消息
  });

  test('PubSub should not notify subscribers if no messages', () => {
    const pubsub = new PubSub();
    const type = 'TEST_TYPE';
    const mockCallback = jest.fn();
    
    pubsub.subscribe(type, mockCallback);
    pubsub.notify(type);
    
    expect(mockCallback).not.toHaveBeenCalled(); // 没有消息时不调用回调
  });

  test('Publisher should publish messages through PubSub', () => {
    const pubsub = new PubSub();
    const publisher = new Publisher('test', pubsub);
    const type = 'TEST_TYPE';
    const message = 'test message';
    
    publisher.publish(type, message);
    expect(pubsub.messages[type]).toEqual([message]);
  });

  test('Subscriber should subscribe to events through PubSub', () => {
    const pubsub = new PubSub();
    const subscriber = new Subscriber('test', pubsub);
    const type = 'TEST_TYPE';
    const mockCallback = jest.fn();
    
    subscriber.subscribe(type, mockCallback);
    expect(pubsub.listeners[type]).toContain(mockCallback);
  });
});
