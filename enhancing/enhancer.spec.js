const enhancer = require('./enhancer.js');
const { succeed, fail, repair, get } = enhancer;

describe('enhance module', () => {
  describe('repair', () => {
    it('returns an item with durability of 100', () => {
      const testRepairItem = {
        name: 'orlando',
        enchancement: 20,
        durability: 15,
      };
      expect(repair(testRepairItem).durability).toEqual(20);
    });
  });
});
