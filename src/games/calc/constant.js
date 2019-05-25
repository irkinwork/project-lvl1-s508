import getRandomNumber from '../../common/constant';

const getRandomOperation = () => ['+', '-', '*'].sort(() => 0.5 - Math.random())[0];

const getCorrect = (arr) => {
  const [first, second, op] = arr;
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

export const rules = 'What is the result of the expression?';

export const data = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operation = getRandomOperation();
  const arr = [first, second, operation];
  const correctAnswer = getCorrect(arr);
  const question = `${first} ${operation} ${second}`;
  return { correctAnswer, question };
};
