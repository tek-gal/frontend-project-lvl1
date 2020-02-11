import createGame from '..';
import generateInt from '../generateInt';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < Math.floor(num); i += 1) {
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
