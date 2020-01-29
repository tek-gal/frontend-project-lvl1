
import game, { generateNum } from '..';

const getStep = () => {
  const step = generateNum(20);
  return step === 0 ? getStep() : step;
};

const makeProgression = (len) => {
  let num = generateNum();
  const step = getStep();
  const arr = [num];
  const toThrow = generateNum(10);

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
    .filter((n) => n !== '..')
    .reduce((acc, n, i, arr1) => {
      if (i === 0) return acc;
      return Math.min(acc, +n - (+arr1[i - 1] || 0));
    }, Infinity);
  const value = arr.reduce((acc, n, i, arr1) => {
    if (n !== '..') return acc;

    if (i === 0) return +arr1[1] - step;
    return +arr[i - 1] + step;
  }, 0);
  return value;
};

const description = 'What number is missing in the progression?';

export default () => game(questionGenerator, answerChecker, description);
