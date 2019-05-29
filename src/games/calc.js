import make from '..';
import getRandomNumber from '../utils';

const operations = ['+', '-', '*'];
const getRandomOperation = () => operations.sort(() => getRandomNumber())[0];

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default: break;
  }
};

const description = 'What is the result of the expression?';

const getData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operation = getRandomOperation();
  const correctAnswer = String(calculate(firstNumber, secondNumber, operation));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return { correctAnswer, question };
};

export default () => make(getData, description);
