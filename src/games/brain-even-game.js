const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = n => (n % 2 === 0);
const brainEvenGame = () => {
  const specification = 'Answer "yes" if number even otherwise answer "no".';
  const generator = () => {
    const question = getRandomInt(1, 99);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return { question, rightAnswer };
  };
  return { specification, generator };
};
export default brainEvenGame;
