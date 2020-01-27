import readlineSync from 'readline-sync';

const hello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askQuestion = () => {
  const num = Math.ceil(Math.random() * 100);
  const even = num % 2 === 0;
  const question = `Question: ${num}`;
  console.log(question);
  return even;
};

const parseAnswer = (even) => {
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = even ? 'yes' : 'no';
  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }

  return isCorrect;
};

export default () => {
  console.log('Welcome to the Brain Games!\n');

  const name = hello();

  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = askQuestion();
    const isCorrect = parseAnswer(correctAnswer);

    if (!isCorrect) {
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
