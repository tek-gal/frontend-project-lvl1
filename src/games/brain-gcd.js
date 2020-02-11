import createGame from '..';
import generateInt from '../generateInt';

const findGCD = (num1, num2) => {
  let num = Math.max(num1, num2);
  let delimiter = Math.min(num1, num2);

  while (num !== 0 && delimiter !== 0) {
    const remainder = num % delimiter;
    [num, delimiter] = [delimiter, remainder];
  }

  return num + delimiter;
};

const getQuestionAndCorrectAnswer = () => {
  const num1 = generateInt();
  let num2 = generateInt();

  while (num2 === num1) {
    num2 = generateInt();
  }

  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2).toString();
  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => createGame(getQuestionAndCorrectAnswer, description);
