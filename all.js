// 冒泡排序
function bubbleSort (arr) {
  var arrLength = arr.length;
  if (arrLength <= 1) { return arr }
  for (var i = 0; i < arrLength; i++){
    for (var j = 0; j < arrLength - 1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr
}
bubbleSort([5,4,3,2,1])

// 选择排序
function selectionSort(arr) {
  let arrLength = arr.length;
  if (arrLength <= 1) { return arr }
  for (let i = 0; i < arrLength; i++) {
    let min = arr[i];
    for (let j = i+1; j < arrLength; j++) {
      if (arr[j] < min) { [min, arr[j]] = [arr[j], min] }
    }
    arr[i] = min
  }
  return arr
}
selectionSort([5,4,3,2,1])

// 快速排序
var quickSort = function (arr, left, right) {
  if (arr.length <= 1) { return arr }
  let i = left,
      j = right;
      pivot = arr[Math.floor((left + right) / 2)];
  while (i <= j) {
    while (arr[i] < pivot) { i++ }
    while (arr[j] > pivot) { j-- }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++; j--;
    }
  }
  if (left < i - 1) { quickSort(arr, left, i - 1); }
  if (i < right) { quickSort(arr, i, right); }
  return arr;
}
var a = [1,3,5,7,9,2,4,6,8,10]
quickSort(a, 0, a.length - 1)
