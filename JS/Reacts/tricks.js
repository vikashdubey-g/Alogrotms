const foods = [
  {
    name: "🍔",
    group: 1,
  },
  {
    name: "🍨",
    group: 1,
  },
  {
    name: "🍿",
    group: 2,
  },
  {
    name: "🍵",
    group: 1,
  },
  {
    name: "Vikash",
    group: 2,
  },
];

// group the item which belongs to group 1

const res = foods.filter((item) => item.group === 1).map((item) => item.name);

console.log("res", res);
const isValidDate = (data) => {
  try {
    new Date(date).toISOString();
  } catch (error) {
    return false;
  }
  return true;
};
