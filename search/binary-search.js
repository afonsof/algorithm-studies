module.exports = {
    iterative: function (target, array) {
        let min = 0;
        let max = array.length - 1;
        let middle;
        let current;

        while (min <= max) {
            middle = Math.floor((min + max) / 2);
            current = array[middle];
            if (current < target)
                min = middle + 1;
            else if (current > target)
                max = middle - 1;
            else {
                return middle;
            }
        }
        return -1;
    },
    recursive: function (target, array, min, max) {
        min = min === undefined ? 0 : min;
        max = max === undefined ? array.length - 1 : max;

        if (max < min)  return -1;

        let middle = Math.floor((min + max) / 2);
        let current = array[middle];

        if (target < current) {
            return this.recursive(target, array, min, middle - 1);
        }

        if (target > current) {
            return this.recursive(target, array, middle + 1, max);
        }
        return middle;
    },
    functional: function (target, array) {
        let middle = Math.floor((array.length - 1) / 2);
        let current = array[middle];

        if (array.length == 1 && array[0] != target) return -1;

        if (target < current) {
            return this.recursive(target, array.slice(0, middle));
        }
        if (target > current) {
            var shift = middle + 1;
            var ret = this.recursive(target, array.slice(shift));
            return ret > -1 ? shift + ret : ret;
        }
        return middle;
    }
};
