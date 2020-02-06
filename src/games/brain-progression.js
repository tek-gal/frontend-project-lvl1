import createGame from '..';
import generateInt from '../functions';

const progressionLength = 10;

const makeProgression = (startNum, step) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const currentNum = startNum + step * i;
    progression.push(currentNum);
  }

  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const startNum = generateInt();
  const step = generateInt(1);

  const progression = makeProgression(startNum, step);
  const numIdxToThrow = generateInt(0, progressionLength);

  const correctAnswer = progression[numIdxToThrow];

  progression[numIdxToThrow] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => createGame(getQuestionAndCorrectAnswer, description);
