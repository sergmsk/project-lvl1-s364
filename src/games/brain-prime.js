import game from '..';
import { getRandomInt } from '../utils';

const minRandomNum = 2;
const maxRandomNum = 20;

const specification = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const setPrime = new Set();
const primeGenerator = (max) => {
  const arrMatrix = [];
  for (let i = 2; i <= max; i += 1) {
    arrMatrix[i] = true;
  }
  let p = 2;
  do {
    for (let j = 2 * p; j <= max; j += p) {
      arrMatrix[j] = false;
    }
    for (let k = p + 1; k <= max; k += 1) {
      if (arrMatrix[k]) {
        p = k;
        break;
      }
    }
  } while (p * p <= max);

  arrMatrix.forEach((el, index) => {
    if (el) setPrime.add(index);
  });
  return setPrime;
};
primeGenerator(maxRandomNum);
const isPrime = n => setPrime.has(n);

const generator = () => {
  const question = getRandomInt(minRandomNum, maxRandomNum);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => game(specification, generator);
