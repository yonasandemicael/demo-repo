const reverseNum = num => parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num);
console.log(reverseNum(-1240));
