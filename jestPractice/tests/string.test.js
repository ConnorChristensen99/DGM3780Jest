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






    //Function to remove vowels from a word
    function removeVowel(word) {
        //  let splitWord = word.split("")
        let newWord = word.replace(/[aeiou]/gi, '');

        return newWord


    }
    // TEST
    test('removes vowels from a string', () => {
        expect(removeVowel("Jonas")).toBe("Jns");
      });
      test('removes vowels from a string', () => {
        expect(removeVowel("sample")).toBe("smpl");
      });
      test('removes vowels from a string', () => {
        expect(removeVowel("SpOnGeBoB")).toBe("SpnGBB");
      });
