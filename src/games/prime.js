import game from '..';
import getRandomInt from '../utils';

const minRandomNum = 2;
const maxRandomNum = 100;

const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const stop = number / 3;
  const iter = (num, div) => {
    if (num % div !== 0 && div < stop) return iter(num, div + 1);
    if (num % div !== 0 && div > stop) return true;
    return false;
  };
  return iter(number, 2);
};

const generator = () => {
  const question = getRandomInt(minRandomNum, maxRandomNum);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => game(specification, generator);
