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





  //Uppercases a word Function
  function uppercase(word) {
    let upperCase = word.toUpperCase()

    return upperCase
  }
  // TEST
  test('uppercase string', () => {
    expect(uppercase("Jonas")).toBe("JONAS");
  });
  test('uppercase string', () => {
    expect(uppercase("sample")).toBe("SAMPLE");
  });
  test('uppercase string', () => {
    expect(uppercase("SpOnGeBoB")).toBe("SPONGEBOB");
  });

