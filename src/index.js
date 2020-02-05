import readlineSync from 'readline-sync';

export default (generateQuestion, description) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (description) console.log(description);

  for (let i = 1; i <= 3; i += 1) {
    let { question, correctAnswer } = generateQuestion();
    question = question.toString();
    correctAnswer = correctAnswer.toString();

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
