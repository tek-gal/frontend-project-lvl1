import {
  welcome,
  hello,
  throwDescription,
  askQuestion,
  getAnswer,
  parseAnswer,
  alertMistake,
  congratulate,
} from './functions';

export default (questionGenerator, answerChecker, description) => {
  welcome();
  const name = hello();

  if (description) throwDescription(description);

  for (let i = 1; i <= 3; i += 1) {
    const question = questionGenerator();
    askQuestion(question);

    const answer = getAnswer();
    const correctAnswer = answerChecker(question).toString();
    const isCorrect = parseAnswer(answer, correctAnswer);

    if (!isCorrect) {
      alertMistake(name);
      return;
    }
  }

  congratulate(name);
};
