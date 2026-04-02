# JavaScript 代码片段库 - Agents

## 项目概述

这是一个包含各种JavaScript代码片段的项目，主要实现了设计模式、数据处理、函数工具、算法等多种功能。项目结构清晰，每个功能独立成一个文件，便于学习和参考。

## 可用的代码片段

### 设计模式
- **Observer** (01.Observer.js)：观察者模式实现，支持添加、移除观察者和通知观察者。
- **PubSub** (02.PubSub.js)：发布-订阅模式实现，支持消息的发布、订阅和通知。

### 数据处理
- **DeepClone** (03.DeepClone.js)：深拷贝实现，支持循环引用、Date、RegExp、Map、Set等类型。
- **BigNumberSum** (12.BigNumberSum.js)：大数字相加实现，支持超出Number范围的数字相加。

### 函数工具
- **Debounce** (07.Debounce.js)：防抖函数实现，支持immediate选项，返回Promise。
- **Compose** (13.Compose.js)：函数组合实现，从右向左执行原函数。
- **Curry** (20.Curry.js)：柯里化函数实现，基于函数参数长度。

### 算法
- **Fibonacci** (06.Fibonacci.js)：斐波那契数列实现，使用数组存值减少计算。
- **InsertionSort** (08.InsertionSort.js)：插入排序实现。

### 数组操作
- **Flat** (14.Flat.js)：数组扁平化实现，支持指定深度的扁平化。
- **Map** (15.Map.js)：用reduce实现map方法。

### 其他功能
- **Template** (09.Template.js)：简易模板引擎实现，支持{{}}和{}两种语法。
- **Concurrency** (10.Concurrency.js)：并发控制实现，限制异步请求的并发数。
- **Event** (11.Event.js)：事件系统实现，支持on、off、once、trigger方法。

### 原生方法实现
- **New** (16.New.js)：new操作符实现。
- **Call** (17.Call.js)：call方法实现。
- **Apply** (18.Apply.js)：apply方法实现。
- **Bind** (19.Bind.js)：bind方法实现，支持部分参数绑定。
- **Promise** (21.Promise.js)：Promise实现，支持链式调用和异步操作。
- **InstanceOf** (22.InstanceOf.js)：instanceof操作符实现。

### ES6特性
- **Proxy** (04.Proxy.js)：Proxy使用示例，展示receiver参数和this指向问题。
- **Reflect** (05.Reflect.js)：Reflect API使用示例，展示receiver参数的作用。

## 使用方法

直接在浏览器控制台或Node.js环境中运行相应的文件即可查看示例效果。

例如，在Node.js环境中运行：

```bash
node 01.Observer.js
```

## 项目结构

```
├── 01.Observer.js        # 观察者模式实现
├── 02.PubSub.js          # 发布-订阅模式实现
├── 03.DeepClone.js       # 深拷贝实现
├── 04.Proxy.js           # Proxy 使用示例
├── 05.Reflect.js         # Reflect API 使用示例
├── 06.Fibonacci.js       # 斐波那契数列实现
├── 07.Debounce.js        # 防抖函数实现
├── 08.InsertionSort.js   # 插入排序实现
├── 09.Template.js        # 简易模板引擎实现
├── 10.Concurrency.js     # 并发控制实现
├── 11.Event.js           # 事件系统实现
├── 12.BigNumberSum.js    # 大数字相加实现
├── 13.Compose.js         # 函数组合实现
├── 14.Flat.js            # 数组扁平化实现
├── 15.Map.js             # 用 reduce 实现 map
├── 16.New.js             # new 操作符实现
├── 17.Call.js            # call 方法实现
├── 18.Apply.js           # apply 方法实现
├── 19.Bind.js            # bind 方法实现
├── 20.Curry.js           # 柯里化函数实现
├── 21.Promise.js         # Promise 实现
├── 22.InstanceOf.js      # instanceof 操作符实现
├── LICENSE               # 许可证文件
├── README.md             # 项目说明文档
└── agents.md             # 代码片段代理说明文档
```

## 改进建议

1. **01.Observer.js**：修改removeObserver方法，使用对象引用或唯一ID查找观察者，避免同名观察者被错误移除。
2. **02.PubSub.js**：修改notify方法，传递最新的消息而不是所有消息，或者根据业务需求调整逻辑。
3. **03.DeepClone.js**：取消对Symbol属性处理的注释，完善深拷贝功能。
4. **10.Concurrency.js**：优化并发控制逻辑，处理可能的边界情况，如空数组、负数并发数等。
5. **14.Flat.js**：考虑使用更简洁的实现方式，如使用reduce和concat的组合。

## 许可证

MIT License
