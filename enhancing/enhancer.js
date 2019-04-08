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
  return { ...item };
}

function repair(item) {
  item.durability = 20;
  return { ...item };
}

function get(item) {
  return { ...item };
}
