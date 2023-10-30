function mergeSort(list) {
  if (list.length < 2) return list;
  let p = Math.floor(list.length / 2);
  let leftList = list.slice(0, p);
  let rightList = list.slice(p);

  return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(leftList, rightList) {
  let sortedList = [];
  let l = 0;
  let r = 0;
  while (l < leftList.length && r < rightList.length) {
    if (leftList[l] < rightList[r]) {
      sortedList.push(leftList[l]);
      l += 1;
    } else if (leftList[l] > rightList[r]) {
      sortedList.push(rightList[r]);
      r += 1;
    }
  }
  return sortedList.concat(leftList.slice(l), rightList.slice(r));
}


console.log(mergeSort([25, 10, 65, 2, 14, 45, 8]));
