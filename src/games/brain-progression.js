import game from '..';
import getRandomInt from '../utils';

const specification = 'What number is missing in this progression?';

const progressionLength = 10;
const minRandomIndexToHide = 1;
const maxRandomIndexToHide = 9;

const minRandomFirstNum = 1;
const maxRandomFirstNum = 50;

const minRandomStepNum = 1;
const maxRandomStepNum = 50;

const generatorProgression = () => {
  const initNum = getRandomInt(minRandomFirstNum, maxRandomFirstNum);
  const stepLength = getRandomInt(minRandomStepNum, maxRandomStepNum);
  const arrProgression = [initNum];
  for (let i = 1; i < progressionLength; i += 1) {
    arrProgression.push(arrProgression[i - 1] + stepLength);
  }
  return arrProgression;
};
const makeQuestion = (arr, indexToHide) => {
  const arrTmp = arr.concat();
  arrTmp[indexToHide] = '..';
  return arrTmp.join(' ');
};
const generator = () => {
  const progressionArr = generatorProgression();
  const indexRightAnswer = getRandomInt(minRandomIndexToHide, maxRandomIndexToHide);
  const rightAnswer = `${progressionArr[indexRightAnswer]}`;
  const question = makeQuestion(progressionArr, indexRightAnswer);
  return { question, rightAnswer };
};

export default () => game(specification, generator);
