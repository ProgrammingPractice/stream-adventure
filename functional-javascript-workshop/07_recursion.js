function reduce(arr, fn, initial) {
  // CHEATING
  // return arr.reduce(fn, initial);

  // ITERATIVE APPROACH
  // var result = initial;
  // arr.map(function (element, inx) {
  //   result = fn(result, element, inx, arr)
  // });
  // return result;

  // RECURSIVE APPROACH
  function recursive_reduce(arr, fn, initial, orig_arr, inx) {
    if (arr.length === 0) return initial;
    var partial_result = recursive_reduce(arr.slice(0, arr.length-1), fn, initial, orig_arr, inx-1);
    return fn(partial_result, arr[arr.length-1], inx, arr);
  }

  return recursive_reduce(arr, fn, initial, arr, arr.length-1 );
}

module.exports = reduce



// Recursion is a fundamental programming concept which can lead to elegant and efficient solutions to algorithmic problems. In fact, recursion is so powerful, all iterating behaviour can be defined using recursive functions. You will find recursion indispensable when iterating over nested data structures.

// A recursive function is a function which calls itself. For example, this recursive function will take an array of words, and return an array of those words, uppercased.

//     function toUpperArray(items) {
//        if (!items.length) return []             // end condition
//        var head = items[0]                      // item to operate on
//        head = head.toUpperCase()                // perform action
//        var tail = items.slice(1)                // next
//        return [head].concat(toUpperArray(tail)) // recursive step
//     }

//     toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']

// The point of this exercise is to familiarise yourself with recursion by implementing a familiar interface using a recursive function.

// # Task

// Implement Array#reduce using recursion.

// To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.

// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

// ## Arguments

//   * arr: An Array to reduce over
//   * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
//   * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

// ## Example

//     // Your reduce function should behave the same as a
//     // regular Array#reduce, but it will take the array
//     // to operate on as the first argument:

//     reduce([1,2,3], function(prev, curr, index, arr) {
//       return prev + curr
//     }, 0)
//     // => 6

// ## Conditions

//   * Do not use any for/while loops.
//   * Do not use any Array methods like Array#map or Array#reduce.

// ## Resources

//   * https://en.wikipedia.org/wiki/Recursion
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ## Boilerplate

//     function reduce(arr, fn, initial) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = reduce


//  » To print these instructions again, run: functional-javascript print
//  » To execute your program in a test environment, run: functional-javascript run program.js
//  » To verify your program, run: functional-javascript verify program.js
//  » For help run: functional-javascript help