module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.enhancement !== 20
  ? item.enhancement++
  : item.enhancement
  return { ...item };
}

function fail(item) {
  item.enhancement < 15 && item.durability > 4
  ? item.durability = item.durability -5
  : item.enhancement < 15
  ? item.durability = 0
  : item.durability
  
  item.enhancement >= 15
  ? item.durability = item.durability -10
  : item.durability

  item.enhancement > 15
  ? item.enhancement = item.enhancement -1
  : item.enhancement

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
