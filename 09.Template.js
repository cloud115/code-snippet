// 简易模板引擎
function render(tpl, data) {
  return tpl.replace(/(\{\{(.+?)\}\})|(\{(.+?)\})/g, function ($1, $2, $3, $4, $5) {
    if ($3) return data[$3];
    return data[$5];
  });
}

module.exports = render;
