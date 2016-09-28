module.exports = {

    start: 0,
    rArray: [],

    firstTime: function (array) {
        if (array && array.length) {
            console.log("   number of items:", array.length)
        }
        this.start = new Date().getTime();
    },

    lastTime: function (iterationCount) {
        let last = new Date().getTime();
        if (iterationCount) {
            console.log("   iterations: ", iterationCount);
        }
        console.log("   duration: ", (last - this.start));
        console.log("------");
    },

    randomArray: function (size) {
        var array = [];
        for (var i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 1000));
        }
        return array;
    },

    swap: function (array, indexA, indexB) {
        var temp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = temp;
    },
    factorial: function (n) {
        return (n < 2) ? 1 : this.factorial(n - 1) * n;
    }
};
