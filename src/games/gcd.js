import make from '..';
import getRandomNumber from '../utils';

const getGcd = (firstNumber, secondNumber) => {
  const numbers = [firstNumber, secondNumber].map(item => Math.abs(item));
  const lowerNumber = Math.min(...numbers);
  const greaterNumber = Math.max(...numbers);
  const getDivisors = (divisor) => {
    if (divisor === 1) {
      return 1;
    }
    if (lowerNumber % divisor === 0 && greaterNumber % divisor === 0) {
      return divisor;
    }
    return getDivisors(divisor - 1);
  };

  return getDivisors(lowerNumber);
};

const description = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return { correctAnswer, question };
};

export default () => make(getData, description);
