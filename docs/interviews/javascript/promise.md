# Promise

`Promise` 是一种处理异步代码的方式。可以避免陷入回调地狱。
ES5 引入了`Promise` , ES5 引入了 2017 开始具有`await`和`async`

`Promise`对象代表一个异步操作，有三种状态：`pending`、`fulfilled`和`rejected`。

当`Promise`被调用后，它会以**处理中状态** (pending) 开始。 这意味着调用的函数会继续执行，而`Promise`仍处于处理中直到解决为止，从而为调用的函数提供所请求的任何数据。
被创建的`Promise`最终会以**被解决状态** (fulfilled) 或 **被拒绝状态** (rejected) 结束，并在完成时调用相应的回调函数（传给 then 和 catch）。

**手写`Promise`**

```js
class MyPromise {
  const PENDING = 'pending';
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  constructor(func) {
    this.currentState = PENDING;
    this.value = null;
    try {
        func(this.resolve.bind(this), this.reject.bind(this));
    }
    catch(e) {
        this.reject(e);
    };
  }
  resolve(value) {
    if (this.currentState === PENDING) {
        this.currentState = FULFILLED;
        this.value = value;
    }
  }
  reject(reason) {
    if (this.currentState === PENDING) {
        this.currentState = REJECTED;
        this.value = reason;
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' onFulfilled ? : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason;
    }
    if (this.currentState === FULFILLED) {
        setTimeout(() => {
            onFulfilled(this.value);
        })

    }
    if (this.currentState === REJECTED) {
        setTimeout(() => {
            onRejected(this.value);
        })
    }
  }
}

let p1 = new MyPromise((resolve, reject) => {
    resolve("SSSs");
})
```
