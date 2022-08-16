"use strict";

const nextPal = (result, steps = 0) => {
  if (isPal(result)) return {
    result: result, steps
  };
  else {
      return nextPal(++result, ++steps);
  };
};
function isPal(result) {
  let a = Number(result.toString().split('').reverse().join(''));
  if (a === result) return true;
  return false;
};

console.log(nextPal(312 + 213));