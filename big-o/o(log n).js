var utils = require('../utils');

//---------------------------------------------------
// O (log N) Occurs when the data being used is decreased
// by roughly 50% each time through the algorithm. The
// Binary search is a perfect example of this.

// Pretty fast because the log N increases at a dramatically
// slower rate as N increases

// O (log N) algorithms are very efficient because increasing
// the amount of data has little effect at some point early
// on because the amount of data is halved on each run through

function binarySearch(item, array) {
    console.log(`log ${array.length} = ${Math.log2(array.length)}`);
    utils.firstTime(array);
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentItem;

    let count = 0;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor(minIndex + maxIndex);
        currentItem = array[currentIndex];
        if (currentItem < item)
            minIndex = currentIndex + 1;
        else if (currentItem > item)
            maxIndex = currentIndex - 1;
        else {
            utils.lastTime(count);
            return currentIndex;
        }
        count++;
    }
    utils.lastTime(count);
    return -1;
}

console.log('O(log n)');
binarySearch(-1, utils.randomArray(1000));
binarySearch(-1, utils.randomArray(2000));
binarySearch(-1, utils.randomArray(3000));
binarySearch(-1, utils.randomArray(4000));
binarySearch(-1, utils.randomArray(5000));
