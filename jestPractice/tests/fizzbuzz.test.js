// TEST
test('fizz test', () => {
    expect(fizzbuzz(3)).toBe(['1','2','fizz']);
  });
  test('buzz test', () => {
    expect(fizzbuzz(5)).toBe(['1','2','fizz','4','buzz']);
  });
  test('fizzbuzz test', () => {
    expect(fizzbuzz(15)).toBe(['1','2','fizz','4','buzz','fizz','7','8','fizz','buzz','11',"fizz",'13','14','fizzbuzz']);
  });                       