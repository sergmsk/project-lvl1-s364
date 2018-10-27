import game from '..';
import { getRandomInt } from '../utils';

const specification = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;

const generator = () => {
  const question = getRandomInt(1, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};

export default () => game(specification, generator);
