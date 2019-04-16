"use strict"

function compareArrays(arr1, arr2) { //вспомогательная функция которая сравнивает значения двух массивов
    if (arr1.length === arr2.length && equal(arr1) == equal(arr2)) {
        return true;
    } else {
        return false;
    }
}

function equal(arr) {
    return arr.join('');
}

function memoize(fn, limit) {
    const results = [{args: '', result: ''}]
    
    if (results.find()) {

    }
}

const fn = function() {
  let arg = Array.from(arguments).join(', ');
  let res;
  for (var i = 0; i < arguments.length; i++) {
    res = res + arguments[i];
  }
  return results.args.push(arg), results.result.push(res); 
}

const mFn = memoize(fn, 2);
mFn(1,1);
