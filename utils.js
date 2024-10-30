
// This function generates a random number from 1 -100
const getRandomInt = () => (
  Math.floor(Math.random() * 100) + 1
)


// This function takes in a hex string and returns true if its a "dark" color and false if its not.
const is_dark = (hexNum) => {
  const rgb = hexNum
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((c) => parseInt(c, 16));
  
  console.log( rgb);
  const average =  rgb.reduce((a, b) => a + b, 0) /  rgb.length;

  return true ? average < 119 : false;
};


