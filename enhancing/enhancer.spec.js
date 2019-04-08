const enhancer = require('./enhancer.js');
const { succeed, fail, repair, get } = enhancer;

describe('enhance module', () => {

  const testRepairItemOne = {
    name: 'orlando',
    enhancement: 10,
    durability: 15,
  };

  const testRepairItemTwo = {
    name: 'gabe',
    enhancement: 20,
    durability: 15,
  };

  // const testRepairItemThree = {
  //   name: 'orlando',
  //   enhancement: 10,
  //   durability: 15,
  // };


  describe('repair fn', () => {
    it('returns an item with durability of 100', () => {
      expect(repair(testRepairItemOne).durability).toBe(20);
    });
  });

  describe('succeed fn', () => {
    it('returns an item with enhancement increased by 1', ()  => {
      expect(succeed(testRepairItemOne).enhancement).toBe(11);
    })
    it('does not increase enhancements above 20', () => {
      expect(succeed(testRepairItemTwo).enhancement).toBe(20);
    })
  })


});
