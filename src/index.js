import readline from 'readline-sync';
import brainEven from './games/brain-even-game';
import brainCalc from './games/brain-calc-game';
import brainGCD from './games/brain-gcd-game';

const getGame = (nameGame) => {
  let f;
  switch (nameGame) {
    case 'brainGCD':
      f = brainGCD;
      break;
    case 'brainEven':
      f = brainEven;
      break;
    case 'brainCalc':
      f = brainCalc;
      break;
    default:
      break;
  }
  return f;
};
const print = text => console.log(text);
const welcome = () => print('\nWelcome to Brain Games!');
const printSpecification = text => print(text);
const ask = text => readline.question(text);
const hello = name => print(`Hello, ${name}!\n`);

export const brainGames = () => {
  welcome();
  const name = ask('\nMay I have your name? ');
  hello(name);
};

export const game = (nameGame) => {
  const { generator, specification } = getGame(nameGame)();
  welcome();
  printSpecification(specification);
  const name = ask('\nMay I have your name? ');
  hello(name);
  for (let i = 0; i < 3; i += 1) {
    const step = generator();
    print(`Question: ${step.question}`);
    const answer = ask('Your answer: ');
    if (answer !== step.rightAnswer) {
      print(`\n'${answer}' is wrong answer ;(. Correct answer was '${step.rightAnswer}'.`);
      print(`Let's try again, ${name}!`);
      return;
    }
    print('Correct!');
  }
  print(`\nCongratulations, ${name}!`);
};
