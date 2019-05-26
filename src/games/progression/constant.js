import getRandomNumber from '../../common/constant';

export const rules = 'What number is missing in the progression?';

export const data = () => {
  const first = getRandomNumber();
  const der = getRandomNumber();
  const order = Math.abs(getRandomNumber(10));
  const formula = n => first + (n - 1) * der;
  const getTenItemsOFprogression = (nn = 0, arr = []) => {
    if (nn === 10) {
      return arr;
    }
    return getTenItemsOFprogression(nn + 1, arr.concat(formula(nn)));
  };
  const resultProgression = getTenItemsOFprogression();
  const correctAnswer = String(resultProgression[order]);
  const resultStr = resultProgression;
  resultStr.splice(order, 1, '..');
  const question = `${resultStr.join(' ')}`;
  return { correctAnswer, question };
};
