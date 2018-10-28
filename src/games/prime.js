import game from '..';
import getRandomInt from '../utils';

const minRandomNum = 2;
const maxRandomNum = 100;

const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const generator = () => {
  const question = getRandomInt(minRandomNum, maxRandomNum);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => game(specification, generator);
