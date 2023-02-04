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






  
  // TEST
  test('Adds array of numbers', () => {
    expect(addArrayNumbers([1,2,3,4,5])).toBe(15);
  });
  test('Adds array of numbers', () => {
    expect(addArrayNumbers([1,7,34,4,5])).toBe(51);
  });