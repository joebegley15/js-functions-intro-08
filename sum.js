'use strict';

var sum = function(nums) {
  //
  var total = 0;
  if (nums) {
    for (var i = 0; i < nums.length; i++) {
      total += nums[i]
    }
  }
  return total;
};

var result = sum(10, 6);

console.log('result: ' + result);

