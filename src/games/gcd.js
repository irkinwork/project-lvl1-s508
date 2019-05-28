import make from '..';
import getRandomNumber from '../utils';

const getGcd = (firstNumber, secondNumber) => {
  const numbers = [firstNumber, secondNumber].map(item => Math.abs(item));
  const lowerNumber = Math.min(...numbers);
  const greaterNumber = Math.max(...numbers);
  const getDivisors = (i) => {
    if (i === 1) {
      return 1;
    }
    if (lowerNumber % i === 0 && greaterNumber % i === 0) {
      return i;
    }
    return getDivisors(i - 1);
  };

  return getDivisors(lowerNumber);
};

const description = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return { correctAnswer, question };
};

export default () => make(getData, description);
