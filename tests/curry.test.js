var expect = require('chai').expect;
var curry = require('../functional-programming/curry');

describe('curry', () => {
    it('returns the curried function', () => {
        const add = (a, b) => a + b;
        expect(curry(add, 1, 2)).to.equal(3);
        expect(curry(add)(1)(2)).to.equal(3);
        expect(curry(add)(1, 2)).to.equal(3);
        expect(curry(add, 1)(2)).to.equal(3);
    })
});
