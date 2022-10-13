// 插入排序
let arr = [3,5,1,4,2,6];
function insertSort(arr){
  let len = arr.length, j, temp;
  for (let i = 1; i < arr.length; i++) {
    // 存储当前循环的下标j和值temp（j会动态变化）
    j = i;
    temp = arr[i];
    // 拿提取的temp向前依次比较，如果temp小于上一个值，就把这个值向后移动一位。
    // 然后继续j--向前比较。
    // 直到第一位
    while(j>0 && temp < arr[j-1]){
      arr[j] = arr[j-1]
      j--;
    }
    // 找到合适位置后将temp插入
    arr[j] = temp;
  }
}

insertSort(arr);