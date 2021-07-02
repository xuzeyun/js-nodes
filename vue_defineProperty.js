// mvvm 响应式实现的简单模拟
var vm = {}
var data = {
  name: 'xuzeyun',
  age: 28
}
for (let key in data) {
  (function (key) {
    Object.defineProperty(vm, key, {
      get: function () {
        console.log('get', data[key])
        return data[key]
      },
      set: function (newValue) {
        console.log('set', newValue)
        data[key] = newValue
      }
    })
  })(key)
}
