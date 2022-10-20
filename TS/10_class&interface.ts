// 类、接口、接口的继承


// 人和狗相同的eatting方法
// class Person{
//   eatting(food: String){
//     console.log('我在吃：' + food);
//   }
// }
// class Dog{
//   eatting(food: String){
//     console.log('我在吃：' + food);
//   }
// }


// 避免冗余，使用接口 void代表啥也不返回
interface Eat{
  eatting(food: String): void;
}
interface Smoking{
  smoking(food: String): void;
}
// 如果 Person 中没有Eat中的eatting方法会报错
class Person implements Eat, Smoking{
  eatting(food: String){
    console.log('在吃：' + food);
  }
  smoking(food: String){
    console.log('在抽：' + food);
  }
}
class Dog implements Eat{
  eatting(food: String){
    console.log('在吃：' + food);
  }
}

// 接口的继承
interface A{
  aa(name: String): void;
}
interface B extends A{      // B继承A
  bb(name: String): void;
}
class C implements B{       // C使用接口B,B中必须有aa，bb属性
  aa(){}
  bb(){}
}