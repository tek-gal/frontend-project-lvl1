import createGame from '..';
import generateInt from '../functions';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < Math.ceil(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const question = generateInt();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => createGame(getQuestionAndCorrectAnswer, description);
