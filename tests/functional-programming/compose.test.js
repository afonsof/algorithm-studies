var expect = require('chai').expect;
var compose = require('../../functional-programming/compose');

describe('compose', () => {
    it('composes functions', () => {
        const toUpperCase = x => x.toUpperCase();
        const bold = x => `<b>${x}</b>`;
        const italic = x => `<i>${x}</i>`;

        expect(compose(bold, toUpperCase)('test')).to.equal('<b>TEST</b>');
        expect(compose(italic, bold, toUpperCase)('test')).to.equal('<i><b>TEST</b></i>');
        expect(compose(italic, bold,italic, bold, toUpperCase)('test')).to.equal('<i><b><i><b>TEST</b></i></b></i>');
    })
});
