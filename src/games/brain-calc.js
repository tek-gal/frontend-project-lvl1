import createGame from '..';
import generateInt from '../generateInt';

const mapper = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};
const operators = Object.keys(mapper);

const getQuestionAndCorrectAnswer = () => {
  const operatorsLen = operators.length;
  const operator = operators[generateInt(0, operatorsLen - 1)];
  const num1 = generateInt();
  const num2 = generateInt();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = mapper[operator](num1, num2).toString();
  return { question, correctAnswer };
};

const description = 'Calculate the expression.';
export default () => createGame(getQuestionAndCorrectAnswer, description);
