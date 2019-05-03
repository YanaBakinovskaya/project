for (let n = 0; n < 100; n++) {
  let x = 1;
  if (n == 0 || n == 1) {
    x = 0;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      x = 0;
      break;
    }
  }
  if (x == 1) {
    console.log(n + ' ' + 'Делители этого числа: ' + x + ' и ' + n);
  }
}