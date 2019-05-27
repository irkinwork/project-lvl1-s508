import make from '../..';
import getRandomNumber from '../../utils';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

export const data = () => {
  const first = getRandomNumber();
  const difference = getRandomNumber();
  const order = Math.abs(getRandomNumber(progressionLength));
  const formula = n => first + (n - 1) * difference;
  const getTenItemsOFprogression = (nn = 0, arr = []) => {
    if (nn === progressionLength) {
      return arr;
    }
    return getTenItemsOFprogression(nn + 1, arr.concat(formula(nn)));
  };
  const parseProgToString = (prog) => {
    const arr = prog;
    arr.splice(order, 1, '..');
    return arr.join(' ');
  };
  const resultProgression = getTenItemsOFprogression();
  const correctAnswer = String(resultProgression[order]);
  const question = parseProgToString(resultProgression);
  return { correctAnswer, question };
};

export default () => make(data, description);
