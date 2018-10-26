const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
// +, -, *
const getRandomOperator = () => {
  const matrix = [
    (a, b) => ((a === 'symbol') ? '-' : a - b),
    (a, b) => ((a === 'symbol') ? '+' : a + b),
    (a, b) => ((a === 'symbol') ? '*' : a * b),
  ];
  const int = getRandomInt(0, 2);
  return matrix[int];
};
const brainCalcGame = () => {
  const specification = 'What is the result of the expression?';
  const generator = () => {
    const num1 = getRandomInt(1, 99);
    const num2 = getRandomInt(1, 99);
    const operator = getRandomOperator();
    const question = `${num1} ${operator('symbol')} ${num2}`;
    const rightAnswer = `${operator(num1, num2)}`;
    return { question, rightAnswer };
  };
  return { specification, generator };
};
export default brainCalcGame;
