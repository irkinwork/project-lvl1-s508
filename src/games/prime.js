import make from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const iter = (divisor) => {
    if (number % divisor === 0) {
      return false;
    }
    if (divisor > number / 2) {
      return true;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

const getData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => make(getData, description);
