import make from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 0) {
    return false;
  }
  const iter = (i) => {
    if (i === 1) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    return iter(i - 1);
  };
  return iter(number - 1);
};

const getData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => make(getData, description);
