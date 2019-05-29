import make from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getData = () => {
  const firstItem = getRandomNumber();
  const difference = getRandomNumber();
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const getItem = index => firstItem + (index - 1) * difference;
  const buildProgression = (length, index = 0, array = []) => {
    if (index === length) {
      return array;
    }
    return buildProgression(length, index + 1, array.concat(getItem(index)));
  };
  const getQuestion = (progression) => {
    const progressionArray = progression;
    progressionArray.splice(randomIndex, 1, '..');
    return progressionArray.join(' ');
  };
  const result = buildProgression(progressionLength);
  const correctAnswer = String(result[randomIndex]);
  const question = getQuestion(result);
  return { correctAnswer, question };
};

export default () => make(getData, description);
