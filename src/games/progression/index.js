import make from '../..';
import getRandomNumber from '../../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

export const data = () => {
  const first = getRandomNumber();
  const difference = getRandomNumber();
  const randomIndex = Math.abs(getRandomNumber(progressionLength));
  const getProgressionItem = index => first + (index - 1) * difference;
  const buildProgression = (length, index = 0, array = []) => {
    if (index === length) {
      return array;
    }
    return buildProgression(length, index + 1, array.concat(getProgressionItem(index)));
  };
  const parseProgToString = (progression) => {
    const arr = progression;
    arr.splice(randomIndex, 1, '..');
    return arr.join(' ');
  };
  const resultProgression = buildProgression(progressionLength);
  const correctAnswer = String(resultProgression[randomIndex]);
  const question = parseProgToString(resultProgression);
  return { correctAnswer, question };
};

export default () => make(data, description);
