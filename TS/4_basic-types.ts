// 常见类型
let isDone: boolean = false
let age: number = 18
let firstName: string = 'xuzeyun'
let msg: string = `Hello, ${firstName}`

let u: undefined = undefined
let n: null = null

// any类型
// 如果无法确定是什么类型，如第三方Api或用户输入，可以使用any类型
let notSure: any = 18
notSure = 'xuzeyun'
notSure = true
// any类型值上访问任意属性也是可以
notSure.name
notSure.eatting()
// 应该避免使用any，丧失了类型检测的作用，ts就和js没有区别了