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





// TEST
test('subtraction calculator', () => {
  expect(sum(32, 1)).toBe(31);
});
test('subtraction calculator', () => {
  expect(sum(15, 20)).toBe(-5);
});
