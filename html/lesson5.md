# 学 JavaScript

## 认识 JavaScript

Brendan Eich Mozzila firefox

java script

java 脚本

### 解释型语言

代码规范标准
javascript 定义版本 相关功能 EMCA 2015 2016 2017
EMCAScript
ES
ES6
生肉 日语（javascript） =》每一句话都过你大脑转译（runtime 运行时） =》 你懂的意思

### 编译型语言

生肉 法语（C） =》字幕组（编译器）=》 熟肉 =》无脑看字幕 =》你懂的意思

1. 解释型语言
2. JS ES 各类标准 ES6+
3. 弱类型

## helloworld

```js
console.log("helloWorld");

window.alert("helloWorld");

function greeting() {
  console.log("helloWorld!!!");
}
```

## 运行时（runtime）

浏览器调试

node.js

vscode 插件

## 基本概念

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

## 基本变量

### string 字符串

英文，中文，泛指绝大部分看到的文字和字符

```js

const EN = "hello world!";
const JP = "こんにちは、世界 ()";
const CN = "辣你去找物管啊!!!";
const FR = "bonjour~~~";
const RU = "/"cyka blyat/" 123123123";
```

### number 数值

js 数字精度问题

### boolean 布尔值

true / false

### array 数组（list）

### object 对象

### null 空

### undefind 未定义

## 运算

### 常见运算符

```JS

+ - * /

++
--

```
