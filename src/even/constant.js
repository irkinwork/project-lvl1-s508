export const getCorrect = num => (num % 2 === 0 ? 'yes' : 'no');

export const check = (num, answer) => getCorrect(num) === answer;
export const getRandom = () => Math.round((0.5 - Math.random()) * 100);
