// TEST
test('null test', () => {
    expect(typeof myFunction(typeof null)).toBe("null");
  });
  test('boolean test', () => {
    expect(typeof myFunction(typeof true)).toBe("boolean");
  });
  test('unidentified test', () => {
    expect(typeof myFunction(typeof unidentified)).toBe("unidentified");
  });
  test('number test', () => {
    expect(typeof myFunction(typeof 43)).toBe("number");
  });
  test('bigint test', () => {
    expect(typeof myFunction(typeof 9007199254740991)).toBe("bigint");
  });
  test('string test', () => {
    expect(typeof myFunction(typeof "Hello")).toBe("string");
  });
  test('symbol test', () => {
    expect(typeof myFunction(typeof $)).toBe("symbol");
  })