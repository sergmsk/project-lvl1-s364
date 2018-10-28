import game from '..';
import getRandomInt from '../utils';

const specification = 'What number is missing in this progression?';

const length = 10;
const minRandomNum = 1;
const maxRandomNum = 50;

const generatorProgression = (init, step, len) => {
  const arrProgression = [init];
  for (let i = 1; i < len; i += 1) {
    arrProgression.push(arrProgression[i - 1] + step);
  }
  return arrProgression;
};
const makeQuestion = (arr, indexToHide) => {
  const arrTmp = arr.concat();
  arrTmp[indexToHide] = '..';
  return arrTmp.join(' ');
};
const generator = () => {
  const initNum = getRandomInt(minRandomNum, maxRandomNum);
  const stepLength = getRandomInt(minRandomNum, maxRandomNum);
  const progressionArr = generatorProgression(initNum, stepLength, length);
  const indexAnswer = getRandomInt(0, length - 1);
  const rightAnswer = `${initNum + stepLength * indexAnswer}`;
  const question = makeQuestion(progressionArr, indexAnswer);
  return { question, rightAnswer };
};

export default () => game(specification, generator);
