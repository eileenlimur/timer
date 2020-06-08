const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "how many seconds do you want us to BEEP in? (TYPE 'b' to BEEP NOW!)\n"
});

rl.prompt();

rl.on('line', (line) => {
  if (typeof Number(line.trim()) === "number" && line > 0) {
    console.log("beep in", line, "second(s)");
    setTimeout(() => {
    console.log('BEEP');
    }, line * 1000);
  } else if (line.trim() === "b") {
    console.log('BEEP');
  } else {
    console.log('That\'s not a valid number!');
    rl.prompt();
  }
}).on('close', () => {
  console.log('Thanks for using me, ciao!');
  process.exit(0);
});



// rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
//   console.log("Here's the profile we generated for you!Hello, my name is " + answer + ". What I love doing more than anything is " + answer2 + ". My favorite music to listen to is " + answer3 + ". My favorite music to listen to is " + answer3 + ". When " + answer4 + "time comes around is when I am most supremely overjoyed. When I get to have " + answer5 + " during " + answer4 + " is when I am most most supremely overjoyed. When feeling athletic I enjoy some " + answer6 + ". My superpower is " + answer7 + ".");
//   rl.close();
// });

// for (let i = 0; i < args.length; i++) {
//   if (args[i] >= 0) {
//     setTimeout(() => {
//       process.stdout.write('BEEP\n')
//     }, args[i] * 1000)
//   }
// };