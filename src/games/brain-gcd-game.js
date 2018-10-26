const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const gcd = (n1, n2) => {

// }

const brainGCDGame = () => {
  const specification = 'Find the greatest common divisor of given numbers.';
  const generator = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const rightAnswer = `${1}`;
    const question = `${num1} ${num2}`;

    return { question, rightAnswer };
  };
  return { specification, generator };
};
export default brainGCDGame;
