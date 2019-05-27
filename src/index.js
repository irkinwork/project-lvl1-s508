import readlineSync from 'readline-sync';

const roundsCount = 3;

const make = (getQuestionData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const startScore = 0;
  const iter = (score) => {
    if (score === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { correctAnswer, question } = getQuestionData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      iter(score + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(startScore);
};

export default make;
