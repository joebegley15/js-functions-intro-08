'use strict;'

var defaultValue = 'a string that isn\' "default"'

var oneOrTwo = function(first, second) {
var defaultValue = ' default';
 var result;
 if (second) {
   result = first + second;
 } else {
   result = first + " default";
 }
 return result;
};

var twoOrOne = oneOrTwo;
oneOrTwo = 1;

var result;

result = twoOrOne("one", " not default");

console.log(result);


