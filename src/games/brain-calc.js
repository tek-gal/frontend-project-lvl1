import game from '..';
import { generateNum } from '../functions';

const operators = ['+', '-', '*', '/'];
const mapper = {
  '+': (num1, num2) => +num1 + +num2,
  '-': (num1, num2) => +num1 - +num2,
  '*': (num1, num2) => +num1 * +num2,
  '/': (num1, num2) => +num1 / +num2,
};

const generateQuestion = () => {
  const operator = operators[generateNum(4)];
  return `${generateNum()} ${operator} ${generateNum()}`;
};

const getCorrectAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  const correctAnswer = mapper[operator](num1, num2);
  return correctAnswer;
};

export default () => game(generateQuestion, getCorrectAnswer);
