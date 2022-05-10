let generateNumbers = () => {
  return parseInt(Math.floor(Math.random() * (99 - 1) + 1));
};

let arrayNumbers = () => {
  const numbers = new Set();
  while (numbers.size != 3) {
    numbers.add(generateNumbers());
  }
  return numbers;
};

let captureNumbers = () => {
  arrayNumbers().forEach((number) => {
    document.writeln(number);
  });
};
