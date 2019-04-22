"use strict"

function compareArrays(arr1, arr2) { //вспомогательная функция которая сравнивает значения двух массивов
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]); 
}




function memoize(fn, limit) {
    const results = []; //массив памяти

    return function() {  
    const args = Array.from(arguments);
    let result;

    const search = results.find(someNumbers => compareArrays(someNumbers.args, args));
    if(search) {
      result = search.result;
    } else {
      result = fn(args);
      results.push(result);
      results.push(args);
    }
    if (results.length >= limit) {
     results.shift();
    }
  }
}

const fn = (a, b, ...rest) => rest.map(function(element) {return a + b + element}); 

const mFn = memoize(fn, 10);