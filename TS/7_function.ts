// z?: number 可选参数，可选参数后面不能有确定参数
const add = (x: number, y: number, z?: number): number => {
  if(typeof z === 'number'){
    return x + y + z;
  } else {
    return x + y;
  }
}

// 函数类型的接口
interface ISum {
  (x: number, y: number, z?: number): number
}

let add2: ISum = add;

// ts会在没有类型指定的情况下，推测出一个类型，叫类型推论

// 联合类型 union types, 一个变量可以使用多种类型
let numberOrString: number | string;
numberOrString = 'abc';
numberOrString = 123;

// 类型断言
function getLength(input: string | number): number{
  const str = input as string;
  if(str.length){
    // 如果参数是string类型
    return str.length;
  } else {
    // 如果参数是number类型
    const number = input as number;
    return number.toString().length;
  }
}