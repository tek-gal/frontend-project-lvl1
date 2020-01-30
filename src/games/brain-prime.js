#!/usr/bin/env node

import game, { generateNum } from '..';




const questionGenerator = () => generateNum();

const answerChecker = (num) => {
  if (num === 0) return 'no';
  if (num === 1) return 'yes';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => game(questionGenerator, answerChecker, description);
