function quickSort(list) {
  if (list.length < 2) return list;
  let leftLIst = [];
  let rightLIst = [];
  let pivot = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] <= pivot) {
      leftLIst.push(list[i]);
    } else {
      rightLIst.push(list[i]);
    }
  }
  return quickSort(leftLIst).concat([pivot], quickSort(rightLIst));
}

console.log(quickSort([50, 10, 2, 8, 4, 6, 3, 12]));
