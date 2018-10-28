import game from '..';
import getRandomInt from '../utils';

const minRandomNum = 1;
const maxRandomNum = 100;

const specification = 'What is the result of the expression?';

const matrixOperators = [
  (a, b) => ((a === 'symbol') ? '-' : a - b),
  (a, b) => ((a === 'symbol') ? '+' : a + b),
  (a, b) => ((a === 'symbol') ? '*' : a * b),
];
const getRandomOperator = () => {
  const int = getRandomInt(0, 2);
  return matrixOperators[int];
};

const generator = () => {
  const num1 = getRandomInt(minRandomNum, maxRandomNum);
  const num2 = getRandomInt(minRandomNum, maxRandomNum);
  const operator = getRandomOperator();
  const question = `${num1} ${operator('symbol')} ${num2}`;
  const rightAnswer = `${operator(num1, num2)}`;
  return { question, rightAnswer };
};

export default () => game(specification, generator);
