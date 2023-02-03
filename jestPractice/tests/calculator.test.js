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





// TEST
test('subtraction calculator', () => {
  expect(product(5, 5)).toBe(25);
});
test('subtraction calculator', () => {
  expect(product(0, 10000)).toBe(0);
});

