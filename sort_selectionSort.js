// 选择排序，简化
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


// ------------------------
function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    // 记录当前值
    let min = array[i];
    // 去后面寻找最小值，然后做交换
    for (let j = i+1; j < array.length; j++) {
      // 如果当前元素小于min
      if (array[j] < min) {
        // 数据交换
        let c = min
        min = array[j]
        array[j] = c
      }
    }
    // 把找到的最小值还回去
    array[i] = min
  }
}
selectSort([5,4,3,2,1])
