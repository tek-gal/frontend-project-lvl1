import game from '..';
import generateNum from '../functions';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const question = generateNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = "Answer 'yes' if number is ever. Otherwise answer 'no'.";

export default () => game(generateQuestion, description);
