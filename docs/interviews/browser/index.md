# Browser

## 事件循环 Event Loop

JavaScript 代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)来搞定另外一些代码的执行。整个执行过程，我们称为事件循环过程。一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。任务队列又分为 macro-task（宏任务）与 micro-task（微任务），在最新标准中，它们被分别称为 task 与 jobs。

**宏任务（macro task）**

- `script`
- `setTimeout`
- `setInterval`
- `setImmediate`
- I/O
- UI render

**微任务（micro-task）**

- `process.nextTick`
- `Promise`
- `async/await`
- `MutationObserver` (html5 新特性)

浏览器执行顺序：先执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。

### `async/await` 执行顺序

`async`隐式返回`Promise`作为结果的函数。所以可以理解为`await`后面的函数执行完毕时，会产生一个微任务（`Promise.then()`)

注意这个微任务产生的时机，它是执行完`await`之后，直接跳出`async`函数，执行其他代码(此处就是协程的运作，A 暂停执行，控制权交给 B)。其他代码执行完毕后，再回到`async`函数去执行剩下的代码，然后把`await`后面的代码注册到微任务队列当中。
