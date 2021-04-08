let td = document.getElementById("box");
function red() {
  return new Promise((resolve, reject) => {
    box.style.backgroundColor = "red";
    // 利用setTimeout特性调用green()
    setTimeout(() => {
      resolve(yellow());
    }, 2000);
  });
}

function yellow() {
  return new Promise((resolve, reject) => {
    box.style.backgroundColor = "yellow";
    setTimeout(() => {
      resolve(green());
    }, 1000);
  });
}

function green() {
  return new Promise((resolve, reject) => {
    box.style.backgroundColor = "green";
    setTimeout(() => {
      resolve(red());
    }, 1000);
  });
}
red();
