import game, { generateNum } from '..';

const questionGenerator = () => {
  const num1 = generateNum();
  const num2 = generateNum();
  return `${num1} ${num2}`;
};

const findGCD = (num1, num2) => {
  let a = Math.max(num1, num2);
  let b = Math.min(num1, num2);

  while (a !== 0 && b !== 0) {
    [a, b] = [b, a % b];
  }

  return a + b;
};

const answerChecker = (question) => {
  const [num1, num2] = question.split(' ').map((n) => +n);
  const correctAnswer = findGCD(num1, num2);
  return correctAnswer;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => game(questionGenerator, answerChecker, description);
