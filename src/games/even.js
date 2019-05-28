import make from '..';
import getRandomNumber from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise  answer "no".';

const getData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => make(getData, description);
