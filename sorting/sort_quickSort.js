// 快速排序 - 简写
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







// 快速排序 - 写法一
var quickSort = function (array, left, right) {
  // 如果数组长度为1，则不需要排列
  if (array.length <= 1) {
    return array
  }
  // left数组第一个元素下标，right数组最后一个元素下标
  let i = left,
      j = right;
      pivot = array[Math.floor((left + right) / 2)]; // 取中间项作为主元pivot
  // 如果没有交叉
  while (i <= j) {
    // 直到找到一个元素比 主元 大
    while (array[i] < pivot) {
      i++;
    }
    // 直到找到一个元素比 主元 小
    while (array[j] > pivot) {
      j--;
    }
    // 找到对应的两个元素，并且左指针索引没有右指针大的话，交换数据
    if (i <= j) {
      // es6写法
      [array[i], array[j]] = [array[j], array[i]]
      // let temp = array[i];
      // array[i] = array[j];
      // array[j] = temp;
      i++;
      j--;
    }
  }
  // 较小值的数组
  if (left < i - 1) {
    quickSort(array, left, i - 1);
  }
  // 较大值的数组
  if (i < right) {
    quickSort(array, i, right);
  }
}
var a = [1,3,5,7,9,2,4,6,8,10]
quickSort(a, 0, a.length - 1)

// 快速排序 - 写法二
function quickSort(arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

  //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        } else{
            right.push(arr[i]);
            }
       }
  //递归
  return quickSort(left).concat([pivot],quickSort(right));
}
var a = [1,3,5,7,9,2,4,6,8,10]
quickSort(a, 0, a.length - 1)
