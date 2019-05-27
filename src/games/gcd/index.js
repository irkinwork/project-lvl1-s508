import make from '../..';
import getRandomNumber from '../../utils';

const getGcd = (first, second) => {
  const [min, max] = [first, second].map(item => Math.abs(item)).sort((a, b) => a - b);
  const getDividers = (i, divs) => {
    if (i < 0) {
      return divs;
    }
    if (min % i === 0) {
      divs.add(i);
    }
    return getDividers(i - 1, divs);
  };

  const dividers = getDividers(min, new Set());
  const selectDivs = (divs) => {
    const divsArr = Array.from(divs);
    const iter = (i = 0) => {
      if (max % divsArr[i] === 0) {
        return String(divsArr[i]);
      }
      return iter(i + 1);
    };
    return iter();
  };
  return selectDivs(dividers);
};

const description = 'Find the greatest common divisor of given numbers.';

export const data = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const correctAnswer = getGcd(first, second);
  const question = `${first} ${second}`;
  return { correctAnswer, question };
};

export default () => make(data, description);
