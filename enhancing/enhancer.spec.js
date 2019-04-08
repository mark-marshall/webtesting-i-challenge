const enhancer = require('./enhancer.js');
const { succeed, fail, repair, get } = enhancer;

describe('enhance module', () => {
  describe('repair fn', () => {
    const testRepairItemOne = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    it('returns an item with durability of 100', () => {
      expect(repair(testRepairItemOne).durability).toBe(100);
    });
  });

  describe('succeed fn', () => {
    const testRepairItemTwo = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testRepairItemThree = {
      name: 'gabe',
      enhancement: 20,
      durability: 15,
    };

    it('returns an item with enhancement increased by 1', () => {
      expect(succeed(testRepairItemTwo).enhancement).toBe(11);
    });
    it('does not increase enhancements above 20', () => {
      expect(succeed(testRepairItemThree).enhancement).toBe(20);
    });
  });

  describe('fail fn', () => {
    const testRepairItemFour = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testRepairItemFive = {
      name: 'gabe',
      enhancement: 20,
      durability: 15,
    };

    const testRepairItemSix = {
      name: 'luke',
      enhancement: 19,
      durability: 80,
    };

    const testRepairItemSeven = {
      name: 'samar',
      enhancement: 14,
      durability: 4,
    };

    it('durability decreases by 5 when enhacement is less than 15', () => {
      expect(fail(testRepairItemFour).durability).toBe(75);
    });
    it('durability decreases by 10 when enhacement is 15<=', () => {
      expect(fail(testRepairItemFive).durability).toBe(5);
    });
    it('enhancement decreases by 1 when enhancement is 16+', () => {
      expect(fail(testRepairItemSix).enhancement).toBe(18);
    });
    it('durability does not go below 0', () => {
      expect(fail(testRepairItemSeven).durability).toBe(0);
    });
  });

  describe('get fn', () => {
    const testRepairItemEight = {
      name: 'orlando',
      enhancement: 10,
      durability: 80,
    };

    const testRepairItemNine = {
      name: 'mark',
      enhancement: 0,
      durability: 5,
    };

    it('name is preceeded by enhancement level if enchancement is > 0', () => {
      expect(get(testRepairItemEight).name).toBe('[+10] orlando');
    });
    it('name is unchanged if enhancement level is 0', () => {
      expect(get(testRepairItemNine).name).toBe('mark');
    });
  });
});
