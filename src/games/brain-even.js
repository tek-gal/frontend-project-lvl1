import game from '..';
import { generateNum } from '../functions';

const generateQuestion = () => generateNum();
const getCorrectAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');

export default () => game(generateQuestion, getCorrectAnswer);
