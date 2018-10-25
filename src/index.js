import readline from 'readline-sync';
import brainEvenGame from './brain-even-game';

const welcome = () => console.log('\nWelcome to Brain Games!');
const askName = () => readline.question('\nMay I have your name? ');
const hello = name => console.log(`Hello, ${name}!\n`);

export const brainGames = () => {
  welcome();
  const name = askName();
  hello(name);
};

const specificationBrainEven = () => console.log('Answer "yes" if number even otherwise answer "no".');

export const brainEven = () => {
  welcome();
  specificationBrainEven();
  const name = askName();
  hello(name);
  brainEvenGame(name);
};
