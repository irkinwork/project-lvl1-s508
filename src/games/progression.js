import make from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const buildProgression = (firstItem, difference, length) => {
  const iter = (index, acc) => {
    if (index === length) {
      return acc;
    }
    return iter(index + 1, acc.concat(firstItem + (index - 1) * difference));
  };
  return iter(0, []);
};

const getQuestion = (progression, index) => {
  const progressionCollection = progression;
  progressionCollection.splice(index, 1, '..');
  return progressionCollection.join(' ');
};

const getData = () => {
  const firstItem = getRandomNumber();
  const difference = getRandomNumber();
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const progression = buildProgression(firstItem, difference, progressionLength);
  const correctAnswer = String(progression[randomIndex]);
  const question = getQuestion(progression);
  return { correctAnswer, question };
};

export default () => make(getData, description);
