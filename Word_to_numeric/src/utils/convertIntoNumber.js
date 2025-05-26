const singleUnit = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};
let doubleUnit = {
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
let multiplier = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
};

let inputValue = "twenty million ten thousand three hundred four";

const makeNumber = (comboArray) => {
  let Number = 0;
  comboArray.forEach((wordGroup) => {
    wordGroup = wordGroup.reverse();
    let wordGroupNum = 0;
    wordGroup.forEach((word) => {
      if (singleUnit[word] || doubleUnit[word]) {
        singleUnit[word]
          ? (wordGroupNum += singleUnit[word])
          : (wordGroupNum += doubleUnit[word]);
      } else if (multiplier[word]) {
        wordGroupNum *= multiplier[word];
      }
    });
    Number += wordGroupNum;
  });
  return { status: 200, Number };
};

const convertIntoNumber = (inputValue) => {
  let error = "";
  let inputWordsArray = inputValue
    .split(" ")
    .filter((e) => e != "")
    .reverse();

  let groupOfWord = [];
  let groupOfWordArray = [];
  inputWordsArray.forEach((word) => {
    if (singleUnit[word] || doubleUnit[word]) {
      groupOfWord.push(word);
      groupOfWordArray.push(groupOfWord);
      groupOfWord = [];
    } else if (multiplier[word]) {
      groupOfWord.push(word);
    } else {
      error = "There is any invalid word for number.";
    }
  });
  if (error !== "") {
    return { status: 400, error };
  }
  if (error === "") {
    return makeNumber(groupOfWordArray);
  }
};
export { singleUnit, doubleUnit, multiplier };
export default convertIntoNumber;
