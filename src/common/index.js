import readlineSync from 'readline-sync';

const totalRounds = 3;
const check = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const make = (getQuestionData, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (score = 0) => {
    if (score === totalRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const data = getQuestionData();
    const { correctAnswer, question } = data;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (check(correctAnswer, userAnswer)) {
      console.log('Correct!');
      iter(score + 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter();
};

export default make;
