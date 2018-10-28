import game from '..';
import { getRandomInt } from '../utils';

const minRandomNum = 1;
const maxRandomNum = 50;

const specification = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;

const generator = () => {
  const question = getRandomInt(minRandomNum, maxRandomNum);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => game(specification, generator);
