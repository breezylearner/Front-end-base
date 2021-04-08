// apply 传入的是宿主，call是单独的内容
Function.prototype.apply_ = function (obj, arr) {
  obj = obj ? Object(obj) : window;
  obj.fn = this;
  let result;
  if (!arr) {
    result = obj.fn();
  } else {
    result = obj.fn(...arr);
  }

  delete obj.fn;
  return result;
};
