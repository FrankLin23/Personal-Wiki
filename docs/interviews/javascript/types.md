# JavaScript 数据类型与类型检测

## 数据类型

JS 中的数据类型分为基本数据类型和引用数据类型

- 基本数据类型：
  - `Number`
  - `String`
  - `Boolean`
  - `Null`
  - `Undefined`
  - `Symbol`
  - `BigInt`
- 引用数据类型
  - `Object`
    - `Function`
    - `Array`
    - `Date`
    - `Math`
    - `RegExp`

基本数据类型储存在栈内存，引用数据类型储存在堆内存中。

## 类型检测

- `typeof` 对于原始类型除了 `null` 都可以显示正确的类型。
  `typeof` 对于对象来说，除了函数都会显示 `object`
  ```js
  typeof null; //object
  typeof function () {}; // function
  ```
- `instanceof` 判断对象的类型 内部机制是通过判断对象的原型链是不是能找到类型的 `prototype`。无法检测基本数据类型。
  手写 `instanceof`
  ```js
  function myInstanceof(left, right) {
    let prototype = right.prototype;
    left = left.__proto__;
    while (true) {
      if (left === null) return false;
      if (prototype === left) return true;
      left = left.__proto__;
    }
  }
  ```

## 数据类型转换
