/* 
归并排序:
1.将原始数组切分成较小数组，直到每个数组只有一个位置；
2.将小数组归并成较大数组；
3.直到最后只有一个排序完毕的大数组；
*/

// 将数组拆分为长度为1的小数组
function mergeSort(arr, flag){
  console.log(arr, flag);
  let length = arr.length;
  if(length === 1) return arr;
  // 向下取整
  let mid = Math.floor(length / 2),         // 找到数组的中间位置
    left = arr.slice(0, mid),             // 将数组分成两个小数组
    right = arr.slice(mid, length);
  return merge(mergeSort(left, 'left'), mergeSort(right, 'right'));  // 调用merge函数
}

// 将小数组合并、排序为大数组
function merge(left, right){
  let result = [], iL = 0, iR = 0;
  // left right 两数组依次对比，将小的先放入result数组。
  while (iL < left.length && iR < right.length) {
    if(left[iL] < right[iR]){
      result.push(left[iL++])
    }else{
      result.push(right[iR++])
    }
  }
  // 将比对剩余的添加入新数组
  while (iL < left.length) {
    result.push(left[iL++])
  }
  while (iR < right.length) {
    result.push(right[iR++])
  }
  return result;
}

mergeSort([3,5,1,4,2,6]);
