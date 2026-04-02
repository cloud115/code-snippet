// 实现函数 compose，接受多个函数作为参数，并返回一个新函数，新的函数将从右向左执行原函数，并将上一次结果的返回值作为下一个函数的参数
// compose 函数要求原函数只能有一个参数，因为每次执行原函数只能得到一个返回值

function compose(...fns) {
  return function(...args) {
    // 处理没有函数的情况
    if (fns.length === 0) {
      return args[0];
    }
    
    // 从右向左执行函数
    let result = args;
    for (let i = fns.length - 1; i >= 0; i--) {
      result = [fns[i](...result)];
    }
    return result[0];
  };
}

module.exports = compose;
