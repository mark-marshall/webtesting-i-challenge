module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.enhancement !== 20 ? item.enhancement++ : item.enhancement;
  return { ...item };
}

function fail(item) {
  item.enhancement < 15 && item.durability > 4
    ? (item.durability = item.durability - 5)
    : item.enhancement < 15
    ? (item.durability = 0)
    : item.durability;

  item.enhancement >= 15
    ? (item.durability = item.durability - 10)
    : item.durability;

  item.enhancement > 15
    ? (item.enhancement = item.enhancement - 1)
    : item.enhancement;

  return { ...item };
}

function repair(item) {
  if (!item.name || !item.enhancement || !item.durability) {
    throw new Error('item must contain a name, enhancement, and durability');
  } else {
    item.durability = 100;
  }
  return { ...item };
}

function get(item) {
  item.enhancement > 0
    ? (item.name = `[+${item.enhancement}] ${item.name}`)
    : item.name;
  return { ...item };
}
