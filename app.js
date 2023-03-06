
var firstnNaturalSum = function (n) {
  if (n == 0) return 0;
  else return n + firstnNaturalSum(n - 1);
};
console.log(firstnNaturalSum(5));
var sumDigit = function (n) {
  if (n == 0) return 0;
  else return (n % 10) + sumDigit(Math.floor(n / 10));
};
console.log(sumDigit(1234567));
