import game from '..';
import generateNum from '../functions';

const getStep = () => {
  const maxNum = 20;
  const step = generateNum(maxNum);
  return step === 0 ? getStep() : step;
};

const makeProgression = (len) => {
  const startNum = generateNum();
  const step = getStep();
  const progression = [];

  for (let i = 0; i < len; i += 1) {
    const currentNum = startNum + step * i;
    progression.push(currentNum);
  }

  return progression;
};

const generateQuestion = () => {
  const progressionLength = 10;
  const progression = makeProgression(progressionLength);
  const numIdxToThrow = generateNum(progressionLength);

  const correctAnswer = progression[numIdxToThrow];

  progression[numIdxToThrow] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => game(generateQuestion, description);
