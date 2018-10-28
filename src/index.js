import readline from 'readline-sync';

const rounds = 3;

export default (specification, stepGenerator) => {
  console.log('\nWelcome to Brain Games!');
  console.log(specification);
  const name = readline.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < rounds; i += 1) {
    const { question, rightAnswer } = stepGenerator();
    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`\nCongratulations, ${name}!`);
};
