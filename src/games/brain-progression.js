import game from '..';
import { generateNum } from '../functions';

const getStep = () => {
  const maxNum = 20;
  const step = generateNum(maxNum);
  return step === 0 ? getStep() : step;
};

const makeProgression = (len) => {
  let num = generateNum();
  const step = getStep();
  const arr = [num];
  const maxNum = 10;
  const toThrow = generateNum(maxNum);

  while (arr.length < len) {
    num += step;
    arr.push(num);
  }

  arr[toThrow] = '..';
  return arr.join(' ');
};

const questionGenerator = () => makeProgression(10);

const answerChecker = (question) => {
  const arr = question.split(' ');
  const emptyIdx = arr.indexOf('..');
  const len = arr.length;

  const step = emptyIdx > 1
    ? +arr[1] - +arr[0]
    : +arr[len - 1] - +arr[len - 2];

  const value = emptyIdx > 0
    ? +arr[emptyIdx - 1] + step
    : +arr[emptyIdx + 1] - step;

  return value;
};

const description = 'What number is missing in the progression?';

export default () => game(questionGenerator, answerChecker, description);
