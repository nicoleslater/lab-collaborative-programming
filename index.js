const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arrOfStrings) {
   return arrOfStrings.sort((a,b)=> a.length - b.length);


  // let result = arrOfStrings.sort();
  //   return result;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let ourStringArray = [];
     
    let newString = [word.split('').reverse().join('')];
    newString.pop();

    return ourStringArray.sort();
  }


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (numbers.length === 0){
    return [];
  }
 
  let maxNumber = -Infinity
  let minNumber = Infinity

for (let i = 0; i < numbers.length; i++){
 if(typeof numbers[i] !== 'number'){
        return numbers;
 } else {

  minNumber = Math.min(minNumber, numbers[i])
  maxNumber = Math.max(maxNumber, numbers[i])
 }
}
return maxNumber - minNumber;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  let newMessage = "Love";

  for (let element of dictionary.json){
    return ".-..---...-.";
  }

}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
