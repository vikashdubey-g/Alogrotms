// 1- create debounce polyfill implementation
// 2- create throttle polyfill implementation

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

// const debounceCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

const myDebounce = (cb, d) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = myDebounce((count) => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

// const throttleCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

const myThrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const throttleCount = myThrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount(count);
  // debounceCount();
  // throttleCount();
});
