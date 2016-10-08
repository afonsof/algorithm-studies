var utils = require('../utils');

// O (n log n) Most sorts are at least O(N) because
// every element must be looked at, at least once.
// The bubble sort is O(N^2)
// To figure out the number of comparisons we need
// to make with the Quick Sort we first know that
// it is comparing and moving values very
// efficiently without shifting. That means values
// are compared only once. So each comparison will
// reduce the possible final sorted lists in half.
// Comparisons = log n! (Factorial of n)
// Comparisons = log n + log(n-1) + .... + log(1)
// This evaluates to n log n

var count = 0;

function quickSort(array) {
    if (array.length === 0) {
        return array;
    }

    var left = [];
    var right = [];
    var pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        count++;
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}


console.log('O(n log n)');
function qsLog(array) {
    count = 0;
    utils.firstTime(array);
    quickSort(array);
    utils.lastTime(count - 1);
}

qsLog(utils.randomArray(10000));
qsLog(utils.randomArray(20000));
qsLog(utils.randomArray(30000));
qsLog(utils.randomArray(40000));
qsLog(utils.randomArray(50000));
