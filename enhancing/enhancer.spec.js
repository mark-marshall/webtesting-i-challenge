const enhancer = require('./enhancer.js');
const { succeed, fail, repair, get } = enhancer;

describe('enhance module', () => {
  describe('repair fn', () => {
    const testRepairItemOne = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testRepairItemTwo = {
      name: 'orlando',
    };

    it('returns an item with durability of 100', () => {
      expect(repair(testRepairItemOne).durability).toBe(100);
    });
    it('throws if item is not complete', () => {
      expect(() => repair(testRepairItemTwo)).toThrow();
    });
  });

  describe('succeed fn', () => {
    const testSucceedItemOne = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testSucceedItemTwo = {
      name: 'gabe',
      enhancement: 20,
      durability: 15,
    };

    it('returns an item with enhancement increased by 1', () => {
      expect(succeed(testSucceedItemOne).enhancement).toBe(11);
    });
    it('does not increase enhancements above 20', () => {
      expect(succeed(testSucceedItemTwo).enhancement).toBe(20);
    });
  });

  describe('fail fn', () => {
    const testFailItemOne = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testFailItemTwo = {
      name: 'gabe',
      enhancement: 20,
      durability: 15,
    };

    const testFailItemThree = {
      name: 'luke',
      enhancement: 19,
      durability: 80,
    };

    const testFailItemFour = {
      name: 'samar',
      enhancement: 14,
      durability: 4,
    };

    it('durability decreases by 5 when enhacement is less than 15', () => {
      expect(fail(testFailItemOne).durability).toBe(75);
    });
    it('durability decreases by 10 when enhacement is 15<=', () => {
      expect(fail(testFailItemTwo).durability).toBe(5);
    });
    it('enhancement decreases by 1 when enhancement is 16+', () => {
      expect(fail(testFailItemThree).enhancement).toBe(18);
    });
    it('durability does not go below 0', () => {
      expect(fail(testFailItemFour).durability).toBe(0);
    });
  });

  describe('get fn', () => {
    const testGetItemOne = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testGetItemTwo = {
      name: 'mark',
      enhancement: 0,
      durability: 5,
    };

    it('name is preceeded by enhancement level if enchancement is > 0', () => {
      expect(get(testGetItemOne).name).toBe('[+10] orlando');
    });
    it('name is unchanged if enhancement level is 0', () => {
      expect(get(testGetItemTwo).name).toBe('mark');
    });
  });
});
