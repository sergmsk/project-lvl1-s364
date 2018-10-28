import game from '..';
import getRandomInt from '../utils';

const minRandomNum = 1;
const maxRandomNum = 100;

const specification = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => ((b === 0) ? Math.abs(a) : gcd(b, a % b));

const generator = () => {
  const num1 = getRandomInt(minRandomNum, maxRandomNum);
  const num2 = getRandomInt(minRandomNum, maxRandomNum);
  const rightAnswer = `${gcd(num1, num2)}`;
  const question = `${num1} ${num2}`;
  return { question, rightAnswer };
};

export default () => game(specification, generator);
