
//Functions for type of
function myFunction(type) {
    return type

}



// TEST
  test('boolean test', () => {
    expect(myFunction(typeof true)).toBe("boolean");
  });
  test('undefined test', () => {
    expect(myFunction(typeof undefined)).toBe("undefined");
  });
  test('number test', () => {
    expect(myFunction(typeof 43)).toBe('number');
  });
  test('bigint test', () => {
    expect(myFunction(typeof BigInt(9007199254740991))).toBe("bigint");
  });
  test('string test', () => {
    expect(myFunction(typeof "Hello")).toBe('string');
  });
  test('symbol test', () => {
    sym=Symbol('foo')
    expect(myFunction(typeof sym)).toBe('symbol');
  })
  test('null test', () => {
    expect(myFunction(typeof null)).toBe("object");
  });

