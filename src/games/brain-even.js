#!/usr/bin/env node

import game, { generateNum } from '..';

const questionGenerator = () => generateNum();
const answerChecker = (question) => (question % 2 === 0 ? 'yes' : 'no');

export default () => game(questionGenerator, answerChecker);
