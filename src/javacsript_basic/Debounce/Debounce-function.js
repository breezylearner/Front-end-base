function debounce(fn, delay = 1000) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

// 检验
input1.addEventListener(
  "keyup",
  debounce(function () {
    console.log(input1.value);
  })
);
