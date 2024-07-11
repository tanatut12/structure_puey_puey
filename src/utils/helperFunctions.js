function fizzBuzz(n) {
  const str = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 && i % 5 === 0) {
      str.push('FizzBuzz');
    } else if (i % 3 === 0) {
      str.push('Fizz');
    } else if (i % 5 === 0) {
      str.push('Buzz');
    } else {
      str.push(i.toString());
    }
  }
  return str;
}

fizzBuzz(5);
