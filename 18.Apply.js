// 实现一个 apply

function Apply(fn, ctx, args = []) {
  // 处理 null 和 undefined 上下文
  if (ctx === null || ctx === undefined) {
    ctx = globalThis;
  }
  
  ctx.fn = fn;
  const res = ctx.fn(...args);
  delete ctx.fn;
  return res;
}

module.exports = Apply;
