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
  const progression = [num];
  const maxNum = 10;
  const numIdxToThrow = generateNum(maxNum);

  while (progression.length < len) {
    num += step;
    progression.push(num);
  }

  progression[numIdxToThrow] = '..';
  return progression.join(' ');
};

const generateQuestion = () => makeProgression(10);

const getCorrectAnswer = (question) => {
  const progression = question.split(' ');
  const emptyIdx = progression.indexOf('..');
  const lastIdx = progression.length - 1;

  const step = emptyIdx > 1
    ? +progression[1] - +progression[0]
    : +progression[lastIdx] - +progression[lastIdx - 1];

  const emptyValue = emptyIdx > 0
    ? +progression[emptyIdx - 1] + step
    : +progression[emptyIdx + 1] - step;

  return emptyValue;
};

const description = 'What number is missing in the progression?';

export default () => game(generateQuestion, getCorrectAnswer, description);
