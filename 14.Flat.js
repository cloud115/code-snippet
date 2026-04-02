// 拍平数组
function flatten(list) {
  return list.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

// 更进一步，实现指定深度的拍平
function flattenDepth(list, depth) {
  if (depth === 0) return list;
  return list.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenDepth(curr, depth - 1) : curr);
  }, []);
}

module.exports = { flatten, flattenDepth };
