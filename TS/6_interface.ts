interface IPerson {
  readonly id: number;  // 只读，初始化后不能修改
  name: string;         // 普通
  age?: number;         // 可有可无，没有也不会报错
}

let xuzeyun: IPerson = {
  id: 1,
  name: 'xuzeyun',
  age: 18,              // 可以没有
}