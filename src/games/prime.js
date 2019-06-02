import make from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (divisor) => {
    if (divisor === 1) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor - 1);
  };
  return iter(Math.ceil(number / 2));
};

const getData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => make(getData, description);
