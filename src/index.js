import readline from 'readline-sync';

const rounds = 3;

export default (specification, generator) => {
  console.log('\nWelcome to Brain Games!');
  console.log(specification);
  const name = readline.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < rounds; i += 1) {
    const step = generator();
    console.log(`Question: ${step.question}`);
    const answer = readline.question('Your answer: ');
    if (answer !== step.rightAnswer) {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${step.rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`\nCongratulations, ${name}!`);
};
