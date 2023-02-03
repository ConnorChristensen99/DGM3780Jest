//Addition Function
function sum(a,b) {
  return a + b;
}
// TEST
test('addition calculator', () => {
  expect(sum(1, 1)).toBe(2);
});
test('addition calculator', () => {
  expect(sum(7, 44)).toBe(51);
});




//Subtraction Function
function difference(a,b) {
  return a - b;
}
// TEST
test('subtraction calculator', () => {
  expect(difference(32, 1)).toBe(31);
});
test('subtraction calculator', () => {
  expect(difference(15, 20)).toBe(-5);
});





//Multiplication Function
function product(a,b) {
  return a * b;
}
// TEST
test('multiplication calculator', () => {
  expect(product(5, 5)).toBe(25);
});
test('multiplication calculator', () => {
  expect(product(0, 10000)).toBe(0);
});







//Division Function
function quotient(a,b) {
  return a / b;
}
// TEST
test('division calculator', () => {
  expect(quotient(10, 10)).toBe(1);
});
test('division calculator', () => {
  expect(quotient(25, 5)).toBe(5);
});




//Remainder Function
function remainder(a,b) {
  return a % b;
}
// TEST
test('remainder calculator', () => {
  expect(remainder(10, 10)).toBe(0);
});
test('remainder calculator', () => {
  expect(remainder(87, 7)).toBe(3);
});




// TEST
test('exponential calculator', () => {
  expect(exponential(5, 3)).toBe(125);
});
test('exponential calculator', () => {
  expect(exponential(2, 5)).toBe(32);
});




