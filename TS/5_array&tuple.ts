// 数组
let arr: number[] = [1, 2, 3]   // 只能是数字


// 元组 tuple
let tup: [number, string] = [18, 'xuzeyun'] // 必须按类型声明的顺序赋值
// 可以使用array方法扩展数组，但是类型必须符合number, string其一
tup.push(1)
tup.push('liuyaxing')

// 注意：类数组不等于数组，类数组缺少数组上的一些方法，但ts可以帮助区分和妥善处理