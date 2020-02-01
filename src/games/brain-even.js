import game from '..';
import { generateNum } from '../functions';

const questionGenerator = () => generateNum();
const answerChecker = (question) => (question % 2 === 0 ? 'yes' : 'no');

export default () => game(questionGenerator, answerChecker);
