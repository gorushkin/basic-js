module.exports = function countCats(matrix) {
  return matrix.reduce((acc, i) => {
    if (Array.isArray(i)) return acc + countCats(i);
    return (i === '^^') ? acc + 1: acc;
  }, 0)
};
