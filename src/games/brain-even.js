import createGame from '..';
import generateInt from '../generateInt';

const isEven = (num) => num % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const question = generateInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = "Answer 'yes' if number is even. Otherwise answer 'no'.";

export default () => createGame(getQuestionAndCorrectAnswer, description);
