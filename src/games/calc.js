import make from '..';
import getRandomNumber from '../utils';

const operations = ['+', '-', '*'];

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
  return new Error();
};

const description = 'What is the result of the expression?';

const getData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];
  const correctAnswer = String(calculate(firstNumber, secondNumber, operation));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return { correctAnswer, question };
};

export default () => make(getData, description);
