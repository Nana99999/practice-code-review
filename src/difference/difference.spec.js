import { difference } from './difference.js';

describe('README test', () => {
  it('Should exlude values from the second param', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
});
