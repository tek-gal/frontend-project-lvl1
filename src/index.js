import readlineSync from 'readline-sync';


export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const askQuestion = (quest) => {
  const question = `Question: ${quest}`;
  console.log(question);
};

export const generateNum = (max = undefined) => {
  if (max === undefined) return Math.ceil(Math.random() * 100);
  return Math.floor(Math.random() * max);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const parseAnswer = (answer, correctAnswer) => {
  const isCorrect = answer === correctAnswer;
  const response = isCorrect ? 'Correct!'
    : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;

  console.log(response);

  return isCorrect;
};

const alertMistake = (name) => {
  console.log(`Let's try again, ${name}`);
};

const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const throwDescription = (description) => console.log(description);

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
