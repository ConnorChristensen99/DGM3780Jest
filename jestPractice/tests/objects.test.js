// TEST
test('object key pairings', () => {
    expect(objectTest({name: "John Doe", age: 16}),'name').toBe(true);
  });
  test('object key pairings', () => {
    expect(objectTest({name: "John Doe", age: 16}),'occupation').toBe(false);
  });
