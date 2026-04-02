# JavaScript 代码片段库 - 开发工具

## 项目概述

这是一个包含各种JavaScript代码片段的项目，主要实现了设计模式、数据处理、函数工具、算法等多种功能。项目结构清晰，每个功能独立成一个文件，便于学习和参考。

## 已配置工具

### 测试工具 (Jest)
- **功能**：运行单元测试，确保代码功能的正确性
- **配置文件**：项目根目录的 `package.json`
- **使用场景**：
  - 验证代码功能是否符合预期
  - 确保代码修改不会破坏现有功能
  - 提高代码的可靠性和可维护性
- **使用方法**：
  ```bash
  # 运行所有测试
  npm test
  
  # 运行特定测试文件
  npm test __tests__/DeepClone.test.js
  ```

### 代码风格检查工具 (ESLint)
- **功能**：检查代码风格，确保代码风格的一致性
- **配置文件**：项目根目录的 `.eslintrc.js`
- **使用场景**：
  - 确保代码符合项目的代码风格规范
  - 检测代码中的潜在问题和错误
  - 提高代码的可读性和可维护性
- **使用方法**：
  ```bash
  # 检查所有文件
  npm run lint
  
  # 检查特定文件
  npm run lint 03.DeepClone.js
  ```

### 文档生成工具 (JSDoc)
- **功能**：从代码注释生成API文档
- **配置文件**：项目根目录的 `package.json`
- **使用场景**：
  - 生成代码的API文档，提高代码的可理解性
  - 为其他开发者提供使用指南
  - 确保文档与代码保持同步
- **使用方法**：
  ```bash
  # 生成文档
  npm run docs
  ```

## 开发工作流

1. **编写代码**：开发者编写或修改代码片段
2. **检查代码风格**：运行 `npm run lint` 检查代码风格
3. **编写测试**：为新功能或修改的代码编写测试用例
4. **运行测试**：运行 `npm test` 验证代码功能
5. **优化代码**：根据测试结果和代码风格检查结果优化代码
6. **生成文档**：运行 `npm run docs` 生成API文档
7. **提交代码**：提交代码并推送

## 工具协作流程

1. **代码修改** → **ESLint检查** → **Jest测试** → **JSDoc文档生成** → **代码提交**
2. **新功能开发** → **编写测试** → **实现功能** → **通过测试** → **生成文档** → **代码提交**
3. **bug修复** → **编写测试用例** → **修复代码** → **通过测试** → **代码提交**

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
├── .eslintrc.js          # ESLint 配置文件
├── .gitignore            # Git 忽略文件
├── AGENTS.md             # 开发工具说明文档
├── LICENSE               # 许可证文件
├── README.md             # 项目说明文档
├── package-lock.json     # 依赖锁定文件
├── package.json          # 项目配置文件
└── .trae/rules/          # 项目规则目录
    └── javascript-style-guide.md  # JavaScript 代码风格指南
```
