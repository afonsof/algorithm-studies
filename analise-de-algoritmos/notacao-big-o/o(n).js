var utils = require('../../utils');
//---------------------------------------------------
// 0(N) An algorithm thats time to complete will
// grow in direct proportion to the amount of data
// The linear search is an example of this

// To find all values that match what we
// are searching for we will have to look in
// exactly each item in the array

// If we just wanted to find one match the Big O
// is the same because it describes the worst
// case scenario in which the whole array must
// be searched

function linearSearch(item, array) {
    utils.firstTime(array);
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
        if (item == array[i]) {
            utils.lastTime(count);
            return i;
        }
    }
    utils.lastTime(count);
    return -1
}

console.log('O(n)');
linearSearch(-1, utils.randomArray(1000000));
linearSearch(-1, utils.randomArray(2000000));
linearSearch(-1, utils.randomArray(3000000));
linearSearch(-1, utils.randomArray(4000000));
linearSearch(-1, utils.randomArray(5000000));
