
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = []
  if (matrix === undefined) {
    return result
  }
  matrix.map((item, index) => {
    if (index % 2 !== 0) {
      item.reverse()
      item.map((num) => result.push(num))
    } else {
      item.map((num) => result.push(num))
    }

  });
  return result;
}
