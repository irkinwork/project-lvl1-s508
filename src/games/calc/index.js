import make from '../..';
import getRandomNumber from '../../utils';

const operations = ['+', '-', '*'];
const getRandomOperation = () => operations.sort(() => 0.5 - Math.random())[0];

const calculate = (array) => {
  const [first, second, op] = array;
  switch (op) {
    case '+':
      return String(first + second);
    case '*':
      return String(first * second);
    case '-':
      return String(first - second);
    default: break;
  }
  return null;
};

const description = 'What is the result of the expression?';

export const data = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operation = getRandomOperation();
  const array = [first, second, operation];
  const correctAnswer = calculate(array);
  const question = `${first} ${operation} ${second}`;
  return { correctAnswer, question };
};

export default () => make(data, description);
