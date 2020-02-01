import game from '..';
import { generateNum } from '../functions';

const generateQuestion = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  return num1 !== num2 ? `${num1} ${num2}` : generateQuestion();
};

const findGCD = (num1, num2) => {
  let num = Math.max(num1, num2);
  let delimiter = Math.min(num1, num2);

  while (num !== 0 && delimiter !== 0) {
    const remainder = num % delimiter;
    [num, delimiter] = [delimiter, remainder];
  }

  return num + delimiter;
};

const getCorrectAnswer = (question) => {
  const [num1, num2] = question.split(' ').map((n) => +n);
  const correctAnswer = findGCD(num1, num2);
  return correctAnswer;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => game(generateQuestion, getCorrectAnswer, description);
