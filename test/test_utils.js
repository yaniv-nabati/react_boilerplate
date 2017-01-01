import {expect} from 'chai'

import {testFunction} from '../utils'

describe('TEST 1', () => {
	it('Should return same array', (done) => {
		const arr = [1, 2, 3];
		const result = testFunction(arr);

		expect(result).to.have.length(3);

		done();
	});
});