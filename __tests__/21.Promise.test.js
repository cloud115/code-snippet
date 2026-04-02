const { _Promise_ } = require('../21.Promise');

describe('_Promise_', () => {
  test('应该正确创建Promise实例', () => {
    const promise = new _Promise_((resolve) => {
      resolve('success');
    });

    expect(promise).toBeInstanceOf(_Promise_);
    expect(promise.PromiseState).toBe('fulfilled');
    expect(promise.PromiseResult).toBe('success');
  });

  test('应该正确处理resolve', (done) => {
    new _Promise_((resolve) => {
      resolve('value');
    }).then((value) => {
      expect(value).toBe('value');
      done();
    });
  });

  test('应该正确处理reject', (done) => {
    new _Promise_((resolve, reject) => {
      reject('error');
    }).then(null, (error) => {
      expect(error).toBe('error');
      done();
    });
  });

  test('应该支持链式调用', (done) => {
    new _Promise_((resolve) => {
      resolve(1);
    })
      .then((value) => value + 1)
      .then((value) => {
        expect(value).toBe(2);
        done();
      });
  });

  test('应该正确处理异步操作', (done) => {
    new _Promise_((resolve) => {
      setTimeout(() => resolve('async'), 10);
    }).then((value) => {
      expect(value).toBe('async');
      done();
    });
  });

  test('应该正确处理executor中的错误', (done) => {
    new _Promise_(() => {
      throw new Error('executor error');
    }).then(null, (error) => {
      expect(error.message).toBe('executor error');
      done();
    });
  });

  test('应该正确处理then中的错误', (done) => {
    new _Promise_((resolve) => {
      resolve('value');
    })
      .then(() => {
        throw new Error('then error');
      })
      .then(null, (error) => {
        expect(error.message).toBe('then error');
        done();
      });
  });

  test('应该正确处理返回Promise的情况', (done) => {
    new _Promise_((resolve) => {
      resolve('outer');
    })
      .then(() => {
        return new _Promise_((resolve) => {
          resolve('inner');
        });
      })
      .then((value) => {
        expect(value).toBe('inner');
        done();
      });
  });

  test('应该正确处理默认的onFulfilled回调', (done) => {
    new _Promise_((resolve) => {
      resolve('value');
    })
      .then()
      .then((value) => {
        expect(value).toBe('value');
        done();
      });
  });

  test('应该正确处理默认的onRejected回调', (done) => {
    new _Promise_((resolve, reject) => {
      reject('error');
    })
      .then(null)
      .then(null, (error) => {
        expect(error).toBe('error');
        done();
      });
  });

  test('状态一旦确定就不能再改变', () => {
    let resolveFn;
    let rejectFn;

    const promise = new _Promise_((resolve, reject) => {
      resolveFn = resolve;
      rejectFn = reject;
    });

    resolveFn('first');
    rejectFn('second');

    expect(promise.PromiseState).toBe('fulfilled');
    expect(promise.PromiseResult).toBe('first');
  });
});
