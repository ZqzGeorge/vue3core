const _name = new WeakMap()
class Person {
  //把person的name存储到_name的name属性上
  constructor(name) {
    _name.set(this, name)
  }
  //获取person的name属性时，返回_name的name
  get name() {
    return _name.get(this)
  }
}

const jane = new Person('Jane')
console.log(jane.name) // 'Jane'
