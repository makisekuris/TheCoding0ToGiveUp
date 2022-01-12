# 第三课：css 伪类、导入外部 css 进入 html 以及其他进阶

## 伪类

### 认识伪类 Pseudo-classes

用于标记选择器的一些特殊触发规则（e.g:范围的鼠标移入移出、选择状态）

```css
.area1 {
  background-color: black;
  color: red;
}
/* 选择器:伪类属性  */
/* 下面定义指当area1的class定义的元素，在鼠标指针进入到该元素范围时，背景色和字体颜色的属性按照伪类定义的属性对area1定义的元素进行覆盖 */
.area1:hover {
  background-color: green;
  color: blue;
}
/* 元素点击时的激活样式 */
.area:active {
  background-color: yellow;
}
```

### e.g

```html

```

## 引入外部 css

## 响应式 自适应

### 响应式

页面元素根据窗口宽度锚点的变化进行变化

### 自适应

页面元素根据窗口变化对应实时进行变化

### flex

标准教程
https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

### 关于 bootstrap

#### 库 组件库

https://v3.bootcss.com/
