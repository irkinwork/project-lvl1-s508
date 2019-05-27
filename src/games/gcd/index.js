import make from '../..';
import getRandomNumber from '../../utils';

const getGcd = (first, second) => {
  const array = [first, second].map(item => Math.abs(item));
  const min = Math.min(...array);
  const max = Math.max(...array);
  const getDividers = (i) => {
    if (i === 1) {
      return 1;
    }
    if (min % i === 0 && max % i === 0) {
      return i;
    }
    return getDividers(i - 1);
  };

  return getDividers(min);
};

const description = 'Find the greatest common divisor of given numbers.';

export const data = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const correctAnswer = String(getGcd(first, second));
  const question = `${first} ${second}`;
  return { correctAnswer, question };
};

export default () => make(data, description);
