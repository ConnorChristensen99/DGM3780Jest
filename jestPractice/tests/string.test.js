//Reverse String Function
function reverse(word) {
    let splitString = word.split('');

    let reverseWord = splitString.reverse()
    let newWord = reverseWord.join("")
    return newWord
}


// TEST
test('reverse string', () => {
    expect(reverse("Jonas")).toBe("sanoJ");
  });
  test('reverse string', () => {
    expect(reverse("sample")).toBe("elpmas");
  });
  test('reverse string', () => {
    expect(reverse("SpOnGeBoB")).toBe("BoBeGnOpS");
  });



reverse("best")