export const difference = (array = [], values = []) => {
  const result = [];
  for (const item of array) {
    if (!values.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(difference([2, 1], [2, 3]));
