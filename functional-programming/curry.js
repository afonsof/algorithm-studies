const curry = (fn, ...args) => {
    if (args.length === fn.length) {
        return fn(...args)
    }
    return curry.bind(this, fn, ...args)
};

module.exports = curry;
