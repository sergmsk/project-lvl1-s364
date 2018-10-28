import game from '..';
import getRandomInt from '../utils';

const specification = 'What number is missing in this progression?';

const length = 10;
const minRandomNum = 1;
const maxRandomNum = 50;

const generatorProgression = (init, step, len, indexHide) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    if (i === indexHide) arr[i] = '..';
    arr[i] = init + i * step;
  }
  return arr.join(' ');
};

const generator = () => {
  const initNum = getRandomInt(minRandomNum, maxRandomNum);
  const stepLength = getRandomInt(minRandomNum, maxRandomNum);
  const indexToHide = getRandomInt(0, length - 1);
  const question = generatorProgression(initNum, stepLength, length, indexToHide);
  const rightAnswer = `${initNum + stepLength * indexToHide}`;
  return { question, rightAnswer };
};

export default () => game(specification, generator);
