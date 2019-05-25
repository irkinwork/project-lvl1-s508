import getRandomNumber from '../../common/constant';

const getCorrect = num => (num % 2 === 0 ? 'yes' : 'no');

export const rules = 'Answer "yes" if number even otherwise  answer "no".';

export const data = () => {
  const num = getRandomNumber();
  const correctAnswer = getCorrect(num);
  const question = num;
  return { correctAnswer, question };
};
