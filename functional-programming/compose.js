const compose = function (...fns) {
    return fns.reduce(function (f, g) {
        return function (...args) {
            return f(g(...args));
        }
    });
};

module.exports = compose;
