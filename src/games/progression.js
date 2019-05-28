import make from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getData = () => {
  const firstItem = getRandomNumber();
  const progressionDifference = getRandomNumber();
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const getProgressionItem = index => firstItem + (index - 1) * progressionDifference;
  const buildProgression = (length, index = 0, array = []) => {
    if (index === length) {
      return array;
    }
    return buildProgression(length, index + 1, array.concat(getProgressionItem(index)));
  };
  const parseProgressionToString = (progression) => {
    const progressionArray = progression;
    progressionArray.splice(randomIndex, 1, '..');
    return progressionArray.join(' ');
  };
  const resultProgression = buildProgression(progressionLength);
  const correctAnswer = String(resultProgression[randomIndex]);
  const question = parseProgressionToString(resultProgression);
  return { correctAnswer, question };
};

export default () => make(getData, description);
