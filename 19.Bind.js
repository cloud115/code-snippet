// 实现一个 bind

function Bind(fn, ctx, ...args) {
  return function () {
    return fn.apply(ctx, args.concat(...arguments));
  };
}

module.exports = Bind;
