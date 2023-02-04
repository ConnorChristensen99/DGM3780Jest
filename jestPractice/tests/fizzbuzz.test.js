//Function for fizzbuzz
function fizzbuzz(number) {
    let arr = []
    for (let i=1; i <= number; i++) {
        if (i%15 == 0) {
            arr.push('fizzbuzz')
        }else if (i%5 == 0) {
            arr.push('buzz')
        }else if (i%3 == 0) {
            arr.push('fizz')
        }else {
            arr.push(i)
        }
    }
     return arr
}
// TEST
test('fizz test', () => {
    expect(fizzbuzz(3)).toStrictEqual([1,2,'fizz']);
  });
  test('buzz test', () => {
    expect(fizzbuzz(5)).toStrictEqual([1,2,'fizz',4,'buzz']);
  });
  test('fizzbuzz test', () => {
    expect(fizzbuzz(15)).toStrictEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,"fizz",13,14,'fizzbuzz']);
  });                       
