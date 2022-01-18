# lesson4 开源库 bootstrap 以及 什么是 javascript

## 什么是开源库

-开放代码库，一般情况下所有人都可参与代码构建和代码讨论（抄来用的但是要注明从哪里抄的）

-大手子程序员为了实现代码共产主义和自我价值实现，花费自身业余时间编写的高效完备的功能代码模块

-邪恶的资本家公司为了节约人力成本，让渡一部分代码权利，诱使有需求的公司外打工人共同使用代码库，以期使代码库变得完善

### 什么是 bootstrap

- 开源库
- 大手子程序员写的好看且符合业界规范的 css
- 大手子程序员写的好看、高效率、完备的符合业界规范的 JavaScript
- 围绕以上两条指定的开源库内规范（栅格系统）
- 大手子程序员写的一万种使用样例+文档

### 如何使用 bootstrap

- 通过 cdn 引入 css 和 js 文件
- 通过下载后在本地引入 css 和 js 文件

### 如何引入 js 文件

```html
<body></body>
<script type="text/javascript" src="js文件地址"></script>
```

### 如何抄 bootstrap 样例

F12 控制台

<<<<<<< HEAD
css html 扫盲完成

=======
>>>>>>> 2af83986a79f3f349bf50999da89a8f66ce0cf3a
## 学 JavaScript

### 认识 JavaScript

1. 解释型语言
2. JS ES 各类标准 ES6+
3. 弱类型

### helloworld

```js
console.log("helloWorld");

window.alert("helloWorld");

function greeting() {
  console.log("helloWorld");
}
```

### 运行时（runtime）

浏览器调试

node.js

vscode 插件

### 基本概念

- 先声明后使用
- 等号右赋左值
- 严禁起不明所以的名字
- 可读性

```js
// 赋值
// 赋值符号 =
var a = 123; //javascript 不建议使用
let b = "qwer"; //ES6规范 变量
const C = "123"; //ES6规范 常量

// 函数 function f(x){return y} 声明 带有输入输出
// 声明 function
// f1 函数名
// () 参数接受（形参）
function f1() {
  // 函数体
  return; //隐式声明 不声明是默认为undefind
}
```

### 基本变量

#### string 字符串

英文，中文，泛指绝大部分看到的文字和字符

```js
const EN = "hello world!";
const JP = "こんにちは、世界 ()";
const CN = "辣你去找物管啊!!!";
const FR = "bonjour~~~";
const RU = "/"cyka blyat/" 123123123";
```

#### number 数值

#### boolean 布尔值

#### array 数组（list）

#### object 对象

#### null 空

#### undefind 未定义
