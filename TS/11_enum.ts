// 枚举
enum Sex {
  man,
  women,
}
Sex.man     // 0
Sex[0]      // man
Sex.women   // 1

// 给枚举项手动赋值（如果是数字枚举项的值会自动递增）
enum Sex1 {
  man = 0,
  women,
}
Sex1.man     // 0
Sex1.women   // 1

// 如果是赋值字符串（必须给所有项赋值，否则会报错）
enum Sex2 {
  man = '男',
  women = '女',
}

// 常量枚举，高性能
const enum Sex3{
  man,
  women,
}