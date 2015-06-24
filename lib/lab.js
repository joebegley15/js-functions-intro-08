'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

// 1. Write a function that splits a string into an array of normalized words,
//    (lowercase without punctuation).
var getNormalizedWords = function(words) {
 var wordArray = [];
 wordArray = words.toLowerCase().split(/\s+/);
 var normalizedWords = [];
 for (var i = 0; i < wordArray.length; i++) {
   normalizedWords[i] = wordArray[i].replace(/[^\w']+/, '');
 }
 return normalizedWords;
};

var changedWords = getNormalizedWords(paragraph);
console.log(changedWords);

// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.
var getUniqueWords = function (text) {
 var lastFunc = getNormalizedWords(paragraph);

 var uniqueWordsAsKeys = {};
 for (var i = 0; i < lastFunc.length; i++) {
   var key = lastFunc[i];
     if (uniqueWordsAsKeys[key] === undefined) {
       uniqueWordsAsKeys[key] = true;
     } else {
         uniqueWordsAsKeys[key] = false;
     }
 }

var uniqueWords = [];

for (var key in uniqueWordsAsKeys) {
 uniqueWords.push(key);
} return uniqueWords;

};

var newUnique = getUniqueWords(paragraph);
console.log(newUnique);

// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.
var wordCount = function(strings) {
 var stringSplit = [];
 stringSplit = strings.split(/\s+/);
 return stringSplit.length;
};

console.log("The word count for this string is" + " " + wordCount(paragraph));




module.exports = {
  getNormalizedWords: getNormalizedWords,
  getUniqueWords: getUniqueWords,
  wordCount: wordCount
};
