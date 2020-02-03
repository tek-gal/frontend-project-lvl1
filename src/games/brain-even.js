import game from '..';
import generateNum from '../functions';

const generateQuestion = () => {
  const question = generateNum();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const description = "Answer 'yes' if number is ever. Otherwise answer 'no'.";

export default () => game(generateQuestion, description);
