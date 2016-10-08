module.exports = {
    iterative: function (target, array) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            count++;
            if (target === array[i]) {
                return i;
            }
        }
        return -1;
    },

    recursive: function (target, array, min) {
        if (!min) min = 0;
        if (min == array.length) return -1;
        if (array[min] === target) return min;
        return this.recursive(target, array, min + 1);
    },

    functional: function (target, array) {
        if (array.length === 0) return -1;
        if (array[0] === target) return 0;
        let ret = this.recursive(target, array.slice(1));
        return ret == -1 ? ret : 1 + ret;
    }
};
