import game from '..';
import generateNum from '../functions';

const findGCD = (num1, num2) => {
  let num = Math.max(num1, num2);
  let delimiter = Math.min(num1, num2);

  while (num !== 0 && delimiter !== 0) {
    const remainder = num % delimiter;
    [num, delimiter] = [delimiter, remainder];
  }

  return num + delimiter;
};

const generateQuestion = () => {
  const num1 = generateNum();
  let num2 = generateNum();

  while (num2 === num1) {
    num2 = generateNum();
  }

  const question = `${num1} ${num2}`;
  const answer = findGCD(num1, num2);
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => game(generateQuestion, description);
