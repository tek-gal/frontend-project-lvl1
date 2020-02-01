import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (quest) => {
  const question = `Question: ${quest}`;
  console.log(question);
};

export const generateNum = (max = undefined) => {
  if (max === undefined) return Math.ceil(Math.random() * 100);
  return Math.floor(Math.random() * max);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const parseAnswer = (answer, correctAnswer) => {
  const isCorrect = answer === correctAnswer;
  const response = isCorrect ? 'Correct!'
    : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`;

  console.log(response);

  return isCorrect;
};

export const alertMistake = (name) => {
  console.log(`Let's try again, ${name}`);
};

export const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const throwDescription = (description) => console.log(description);
