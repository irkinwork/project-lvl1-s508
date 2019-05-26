import getRandomNumber from '../../common/constant';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const absNum = Math.abs(num);
  const iter = (i) => {
    if (i === 1 || absNum === 1) {
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
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return { correctAnswer, question };
};
