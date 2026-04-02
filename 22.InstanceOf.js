// 实现一个 instanceOf 操作符

function instanceOf(instance, constructor) {
  // 处理 null 和 undefined
  if (instance === null || instance === undefined) return false;
  
  // 处理原始类型
  if (typeof instance !== 'object' && typeof instance !== 'function') return false;
  
  let proto = Object.getPrototypeOf(instance);
  const prototype = constructor.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

module.exports = instanceOf;
