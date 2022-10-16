function heapSort(arr){
  let heapSize = arr.length;
  buildHeap(arr);
}

function buildHeap(arr){
  let heapSize = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }
}

function heapify(arr, heapSize, i){
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  console.log(`
    i:        ${i}
    left:     ${left}
    right:    ${right}
    largest:  ${largest}
  `);
  console.log('left:'+arr[largest]);
  if(left < heapSize && arr[left] > arr[largest]){
    console.log('left:'+arr[left], +arr[largest]);
    largest = left;
  }
  if(right < heapSize && arr[right] > arr[largest]){
    console.log('right:'+arr[right], +arr[largest]);
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