import game from '..';
import generateNum from '../functions';

const mapper = {
  '+': (num1, num2) => +num1 + +num2,
  '-': (num1, num2) => +num1 - +num2,
  '*': (num1, num2) => +num1 * +num2,
};

const generateQuestion = () => {
  const operators = Object.keys(mapper);
  const operatorsLen = operators.length;
  const operator = operators[generateNum(operatorsLen)];
  const num1 = generateNum();
  const num2 = generateNum();

  const question = `${num1} ${operator} ${num2}`;
  const answer = mapper[operator](num1, num2);
  return [question, answer];
};

const description = 'Calculate the expression.';
export default () => game(generateQuestion, description);
