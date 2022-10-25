// 类 Class       定义了一切事物的抽象特点
// 对象 Object    类的实例
// OOP三大特性    封装、继承、多态

// ts中的class
// Public         修饰的属性或方法是公共的
// Private        修饰的属性或方法是私有的（外部不可以访问）
// protected      修饰的属性或方法是受保护的（子类可以访问）
// readonly       只能读不能写

class Animal {
  // 只读
  readonly name: string;
  constructor(name){
    this.name = name;
  }
  // 公有
  public eat() {
    return `${this.name} is eating`;
  }
  // 私有
  private run() {
    return `${this.name} is running`;
  }
  // 私有（子类可以访问）
  protected cry(){
    return `${this.name} is crying`;
  }
}