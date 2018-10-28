import game from '..';
import { getRandomInt, primeGenerator } from '../utils';

const minRandomNum = 2;
const maxRandomNum = 100;

const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setPrime = primeGenerator(maxRandomNum);
const isPrime = n => setPrime.has(n);

const generator = () => {
  const question = getRandomInt(minRandomNum, maxRandomNum);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => game(specification, generator);
