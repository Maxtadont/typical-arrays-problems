const { expect } = require("chai");

exports.min = function min (array) {  
  if (!array || array.length === 0) 
    return 0;

  let fmin = array[0];
  for (let el of array)
    if (fmin > el)
      fmin = el;
  return fmin;
}

exports.max = function max (array) {
  if (!array || array.length === 0) 
    return 0;
    
  let fmax = array[0];
  for (let el of array)
    if (fmax < el)
      fmax = el;
  return fmax;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) 
    return 0;
  
    let favg = 0;
    for (let el of array)
      favg += el;
    return favg/array.length;
}
