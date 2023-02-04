//Function for the object key pairings
function objectTest(obj,key) {
    return key in obj
}

// TEST
test('object key pairings', () => {
    expect(objectTest({name: "John Doe", age: 16},'name')).toBe(true);
  });
  test('object key pairings', () => {
    expect(objectTest({name: "John Doe", age: 16},'occupation')).toBe(false);
  });
