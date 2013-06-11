var expect = chai.expect;

describe('filter', function () {
    beforeEach(module('myApp'));

    describe('reverse', function () {
        it('should reverse a string', inject(function (reverseFilter) {
            expect(reverseFilter('ABCD')).to.equal('DCBA');
            expect(reverseFilter('jonh')).to.equal('hnoj');
        }));
    })
});