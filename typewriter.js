const sentence = "hello there from lighthouse labs";
index = 0;
const loop = () => {
  // while our spot in the string is less than the length, keep going
  if (index < sentence.length) {
    // prints the current char to console
    process.stdout.write(sentence[index]);
    // next letter
    index++;
    // our delay for each letter
    setTimeout(loop,50)
  }
  else {
    // if we are done with the string, end, and
    // put the next terminal cursor on a new line
    console.log();
  }
};

loop();
