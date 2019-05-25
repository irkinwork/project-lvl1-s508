import readlineSync from 'readline-sync';
import { check, getCorrect, getRandom } from './constant';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log('');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
const questionAmount = 3;

const make = (score = 0) => {
  if (score === questionAmount) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const randomNumber = getRandom();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your Answer: ');
  const correctAnswer = getCorrect(randomNumber);
  if (check(randomNumber, userAnswer)) {
    console.log('Correct!');
    make(score + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default make;
