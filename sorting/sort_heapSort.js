function heapSort(arr){
  let heapSize = arr.length;
  buildHeap(arr);
  // heapify(arr, heapSize, 0)
  console.log('=========================================================');
  while (heapSize > 1) {
    heapSize--
    [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]];  // 把排列好的第一个最大元素放在最后
    heapify(arr, heapSize, 0)// 堆排序
  }
}

// 构造一个父大于子的堆结构
function buildHeap(arr){
  console.log(arr.length, 'arr.length');
  let heapSize = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }
}

// 堆排序
function heapify(arr, heapSize, i){
  console.log('-----------------------------------');
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  console.log(`i:${i} left:${left} right:${right} largest:${largest}`);
  if(left < heapSize && arr[left] > arr[largest]){
    console.log('left:'+arr[left], +arr[largest]);
    console.log('left' + left+ '=>'+largest);
    largest = left;
  }
  if(right < heapSize && arr[right] > arr[largest]){
    console.log('right:'+arr[right], +arr[largest]);
    console.log('right' + right+ '=>'+largest);
    largest = right;
  }
  if(largest !== i){
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    console.log(arr);
    heapify(arr, heapSize, largest);
  }
}

let arr = [3,5,1,6,4,7,2];
heapSort(arr);


