var utils = require('../../utils');
//---------------------------------------------------
// Como exemplo podemos ter o bubble sort
// O(N^2) Time to complete will be proportional to
// the square of the amount of data (Bubble Sort)
// Algorithms with more nested iterations will result
// in O(N^3), O(N^4), etc. performance

// Each pass through the outer loop (0)N requires us
// to go through the entire list again so N multiplies
// against itself or it is squared
// Existem otimizações a serem feitas no bubble sort mas essa é a versão didática

function bubbleSort(array) {
    console.log(`${array.length}^2 = ${Math.pow(array.length, 2)}`);
    utils.firstTime(array);
    let count = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < array.length; j++) {
            count++;
            if (array[j] > array[j + 1]) {
                utils.swap(array, array[j], array[j + 1]);
            }
        }
    }
    utils.lastTime(count);
    return array;
}
console.log('O(n^2)');
bubbleSort(utils.randomArray(1000));
bubbleSort(utils.randomArray(2000));
bubbleSort(utils.randomArray(3000));
bubbleSort(utils.randomArray(4000));
bubbleSort(utils.randomArray(5000));
