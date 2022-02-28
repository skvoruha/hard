const paragraph = document.getElementById('paragraph')
const input = document.querySelector('input')


function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}

let logger = () => {
  console.log('проверка');
  paragraph.textContent = input.value};
 // debounce: call the logger when two seconds have elapsed since the last call
let debouncedLogger = debounce(logger, 300);
input.addEventListener('input', () => {
  debouncedLogger()
})


// "My args are 7, 8, 9" - logged after two seconds