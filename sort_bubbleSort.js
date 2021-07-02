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


// ------------------------
// 外循环决定需要多少轮排序
// 内循环进行当前项 和 下一项 的比较
this.bubbleSort = function () {
  var length = array.length;              //获取数组的一个长度
  for (var i=0; i<length; i++){
    // (var j = 0; j < length-1-i; j++)    改成这样可以减少不必要的比较，因为第二轮 4和5 已经是正确的排序了，没必要再次比较
    for (var j = 0; j < length-1; j++) {  //为什么这里length-1呢，因为5个数字，只需要比较4次，就可以排列完成✅
      // 从小到大排序
      if(array[j] > array[j+1]) {
        // es6 写法
        [array[j], array[j+1]] = [array[j+1], array[j]]
        // swap(array, j, j+1)
      }
    }
  }
}

var swap = function (array, index1, index2) {
  // 把前者的值存起来，再把后者的值放在前者的位置，再把存的值放在后者的位置
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
}

var array = [5,4,3,2,1]
bubbleSort()
