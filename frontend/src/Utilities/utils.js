const thousandsSeparator = (value) =>
  String(value)
    .split("")
    .reverse()
    .map((num, i) => (i === 0 ? num : (i + 1) % 3 === 0 ? "," + num : num))
    .reverse()
    .join("");

const commaSeparateItems = (value) =>
  value?.map((cur, i) => (value.length === i + 1 ? cur.name : cur.name + ","));

export { thousandsSeparator, commaSeparateItems };
