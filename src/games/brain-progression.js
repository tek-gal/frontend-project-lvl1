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
  const step = arr
    .filter((num) => num !== '..')
    .reduce((acc, num, i, arr1) => {
      if (i === 0) return acc;
      return Math.min(acc, +num - (+arr1[i - 1] || 0));
    }, Infinity);
  const value = arr.reduce((acc, num, i, arr1) => {
    if (num !== '..') return acc;

    if (i === 0) return +arr1[1] - step;
    return +arr[i - 1] + step;
  }, 0);
  return value;
};

const description = 'What number is missing in the progression?';

export default () => game(questionGenerator, answerChecker, description);
