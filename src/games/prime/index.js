import make from '../..';
import getRandomNumber from '../../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const absNum = Math.abs(num);
  const iter = (i) => {
    if (i === 1) {
      return true;
    }
    if (absNum % i === 0) {
      return false;
    }
    return iter(i - 1);
  };
  return iter(absNum - 1);
};

export const data = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => make(data, description);
