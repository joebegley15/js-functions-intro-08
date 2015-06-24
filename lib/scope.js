'use strict';

var globalScope = 3;

var outer = function() {
  var functionScope = 7;
  var otherFunctionScope = 12 + functionScope;
  var inner = function () {
    var innerFunctionScope = 12;
    return innerFunctionScope + outerFunctionScope;
  };
var functionScope = 7;
  return otherFunctionScope;
};

console.log('outer returns ' + outer());
