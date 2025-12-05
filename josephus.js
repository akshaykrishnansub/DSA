var findTheWinner = function (n, k) {
  //base condition
  if (n == 1) {
    return 0;
  } else {
    return [findTheWinner(n - 1, k) + k] % n;
  }
  return findTheWinner(n, k) + 1;
};
