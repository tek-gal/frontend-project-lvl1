import createGame from '..';
import generateInt from '../generateInt';

const progressionLength = 10;

const makeProgression = (startNum, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const currentNum = startNum + step * i;
    progression.push(currentNum);
  }

  return progression;
};

const getQuestionAndCorrectAnswer = () => {
  const startNum = generateInt();
  const step = generateInt(1, 20);

  const progression = makeProgression(startNum, step, progressionLength);
  const missingElementIndex = generateInt(0, progressionLength - 1);
  const correctAnswer = progression[missingElementIndex].toString();

  progression[missingElementIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => createGame(getQuestionAndCorrectAnswer, description);
