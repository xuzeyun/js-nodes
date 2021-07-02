// 单例模式是创建型的设计模式，它主要考虑的是创建对象的方式
// 当需要创建 一种类型 或者是 一个类 的唯一对象时，就可以使用该模式
// 一个类只能创建一个实例，即便再次创建，也只会返回原来的实例

// js中最基本的单例模式实现：使用文本对象标识法
var a = {}

var my_log = new Logger();
my_log.log('some event')

// 100……

var other_log = new Logger()

other_log.log('some new event')
console.log(my_log === other_log)
// 尽管使用了new，但所创建的对象实例却始终只有一个

function Logger () {
  if (typeof golbal_log === "undefined") {
    golbal_log = this
  }
  return golbal_log
}
// 使用这个构造器，可达到预期效果
var a = new Logger()
var b = new Logger()
console.log(a === b) // true
