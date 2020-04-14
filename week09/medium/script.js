var nums = [0, 1, 2, 4, 5, 6, 7];
function index(num) {
  while (num.indexOf(4) != -1) {
    return num.indexOf(4);
  }
  return -1;
}
console.log(index(nums));
