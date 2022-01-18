# 第六课 js 运算与逻辑

## 运算

### 常见运算符

```JS

+ - * / %

++
--

```

### 对比

js 内部，(弱类型) 默认转换类型

```js
== //等于 ture false
=== //绝对等
!= //不等
!== //绝对不等

> //大于
< //小于
>= //大于等于
<= //小于等于

&& //逻辑与 先左后右，左右同时为true才为true
|| //逻辑或 先左后右，有一个为ture即为ture，否则为false
!  //逻辑非 后面跟着的值取反。 若为false、null、undefined 0 则为true

function fun1() {
  const und = undefined;
  const nu = null;
  const zero = 0;
  //逻辑运算的时候等效为false
  console.log(!!und);
  console.log(!!nu);
  console.log(!!zero);
}

```

### if

```js
function fun1(i) {
  // 0 1 2 3
  if (i === 0) {
    console.log("i == 0");
  } else if (i == 1) {
    console.log("i == 1");
  } else if (i == 2) {
    console.log("i == 2");
  } else if (i == 3) {
    console.log("i == 3");
  } else if (i == undefined) {
    console.log(i);
    console.log("fun没有传参");
  } else {
    console.log("什么都不等");
  }
  console.log("结尾");
}
```

### 循环

```JS
for (let index = 0; index < 10; index++) {
    console.log(`第${index}次循环`);
    console.log(`重要的话要重复${index + 1}遍`);
}
//列表循环
function fun1(i) {
  const zhangdan = [5, 12, 20, 3000, 5000, 10000, 10000, 10, 3030, 123]; //遍历

  let value = 0;
  for (let index = 0; index < zhangdan.length; index++) {
    value = value + zhangdan[index];
    console.log(`第${index + 1}次账单，花了${zhangdan[index]}，已花${value}`);
  }
  console.log("结果", value);
}


// 作业
// 用for的方法，遍历出1000年到今年的所有闰年 用log打印出来

```
