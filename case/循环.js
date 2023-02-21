// 循环数组的方式
const arr = [1,2,3,4,5]

// do while
let i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

// while
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// for
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
  if(arr[index] > 3) continue; // continue跳出当前循环 break跳出循环
  console.log('ok');
}

// for of
// 遍历数组时 i 为当前的值  不可遍历普通对象
for (const item of arr) {
  console.log(item);
  if(item > 3) continue; // continue 跳出当前循环 break跳出循环
  console.log('ok');
}

// for in
// 遍历数组时 i 为下标    遍历对象时 i 为属性名 
for (const key in arr) {
  console.log(arr[key]);
  if(arr[key] > 3) continue; // continue跳出当前循环 break跳出循环
  console.log('ok');
}

// forEach() 
// 不会返回执行结果，而是undefined，适合操作原数组
arr.forEach(item => {
  console.log(item);
  // 跳出循环比较繁琐，不建议用该函数跳出循环
});

// map() 
// 返回一个新数组，数组中的元素为原始数组元素处理后的值
let newArr = arr.map(item => {
  console.log(item);
})


// find() 
// 返回通过测试（函数内判断）的数组的第一个元素的值，找到后终止循环
let oneVal = arr.find(item => {
  console.log(item);
  return item > 3;
})

// filter() 
// 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
let newArr3 = arr.filter(item => {
  return item > 3
})

// every
// (循环)检测数组所有元素是否都符合指定条件，只有全部满足才会返回true，反之false
let is1 = arr.every(item => {
  console.log(item);
  return item > 3 // 不满足 返回false
})
// some
// (循环)检测数组中的元素是否满足指定条件，有一个满足就会返回true, 全部不满足false
let is2 = arr.some(item => {
  return item > 3
})


// ========== 小总结 ==========

/*
for forin forof 可以通过 continue 跳出当前循环 break跳出循环
如果想通过for跳出循环，还可以跟函数一起使用，如下：
*/
const fun = () => {
  for (const item of arr) {
    if(item > 3) return; // 跳出循环（return 本身意义的结束函数调用，仅适用于函数中）
    console.log(item);
  }
}

// find       返回的是“值”
// map filter 返回的是“新数组”
// every some 返回的是“布尔值”