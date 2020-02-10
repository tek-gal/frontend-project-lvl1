import readlineSync from 'readline-sync';

const roundCount = 3;

export default (getQuestionAndCorrectAnswer, description) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 1; i <= roundCount; i += 1) {
    const { question, correctAnswer } = getQuestionAndCorrectAnswer();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const isCorrect = answer === correctAnswer;

    if (!isCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
