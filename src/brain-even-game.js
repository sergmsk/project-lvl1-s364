import readline from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateGame = () => [1, 2, 3].map(() => getRandomInt(1, 99));
const checkAnswer = (currNumber, answer) => {
  if (currNumber % 2 === 0 && answer.toLowerCase() === 'yes') return true;
  if (currNumber % 2 !== 0 && answer.toLowerCase() === 'no') return true;
  return false;
};
const rightAnswer = currNumber => (currNumber % 2 === 0 ? 'yes' : 'no');

export default (name) => {
  const game = generateGame();
  for (let i = 0; i < game.length; i += 1) {
    const currNumber = game[i];
    console.log(`Question: ${currNumber}`);
    const answer = readline.question('Your answer: ');
    if (!checkAnswer(currNumber, answer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(currNumber)}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
