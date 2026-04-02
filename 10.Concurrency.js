// 有 10 个异步请求，如何保持同时三个的并发

// 模拟异步请求
function query(timeout) {
  return new Promise(resolve => {
    console.log('请求：' + timeout);
    setTimeout(() => resolve(timeout), timeout);
  });
}

function concurrency(requestArr = [], count = 3) {
  // 处理边界情况
  if (!Array.isArray(requestArr)) {
    return Promise.resolve([]);
  }
  
  if (requestArr.length === 0) {
    return Promise.resolve([]);
  }
  
  // 处理负数或 0 并发数
  if (count <= 0) {
    count = 1;
  }
  
  let i = 0;
  const concurrencyArr = [];
  const results = [];
  let completed = 0;
  
  return new Promise((resolve) => {
    // 启动初始并发任务
    while (i < Math.min(count, requestArr.length)) {
      concurrencyArr.push(createNewRequest(i++));
    }

    function createNewRequest(index) {
      const promise = requestArr[index]().then(res => {
        results[index] = res;
        completed++;
      
        // 移除完成的请求
        const currentIndex = concurrencyArr.indexOf(promise);
        if (currentIndex !== -1) {
          concurrencyArr.splice(currentIndex, 1);
        }
      
        // 启动新的请求
        if (i < requestArr.length) {
          concurrencyArr.push(createNewRequest(i++));
        }
      
        // 所有请求完成
        if (completed === requestArr.length) {
          resolve(results);
        }
      
        return res;
      });
      return promise;
    }
  });
}

module.exports = { concurrency, query };
