import game from '..';
import generateNum from '../functions';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateQuestion = () => {
  const num = generateNum();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [num, answer];
};


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => game(generateQuestion, description);
