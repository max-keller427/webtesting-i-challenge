module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement <= 19) {
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1
    };
    return newItem;
  } else {
    return item;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    if (item.durability < 5) {
      const newItem = {
        name: item.name,
        durability: 0,
        enhancement: item.enhancement
      };
      return newItem;
    }
    const newItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };
    return newItem;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    if (item.durability < 10) {
      const newItem = {
        name: item.name,
        durability: 0,
        enhancement: item.enhancement
      };
      return newItem;
    }
    const newItem = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return newItem;
  } else if (item.enhancement > 16) {
    const newItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement - 1
    };
    return newItem;
  }
}

function repair(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function get(item) {
  return { ...item };
}
