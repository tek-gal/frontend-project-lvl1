import {
  welcome,
  hello,
  throwDescription,
  askQuestion,
  getAnswer,
  getCorrectness,
  alertMistake,
  congratulate,
} from './functions';

export default (generateQuestion, getCorrectAnswer, description) => {
  welcome();
  const name = hello();

  if (description) throwDescription(description);

  for (let i = 1; i <= 3; i += 1) {
    const question = generateQuestion();
    askQuestion(question);

    const answer = getAnswer();
    const correctAnswer = getCorrectAnswer(question).toString();
    const isCorrect = getCorrectness(answer, correctAnswer);

    if (!isCorrect) {
      alertMistake(name);
      return;
    }
  }

  congratulate(name);
};
