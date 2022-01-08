# 作用域与 css 基础

## 作用域

通常代码的定义范围，在 html 中在元素标签中的属性定义作用范围为其本身与其子元素

```html
<div style="font-color:#77ccff">
  <!-- <div style="font-color:#77ccff">的属性定义范围开始 -->

  <p>该元素作为外部div的子元素，接受父元素的属性定义 font-color</p>
  <p style="font-color:#232323">
    <!-- <p style="font-color:#232323">的属性定义范围开始 -->
    该元素作为外部div的子元素.接受父元素的属性定义 font-color
    <b>但定义被子元素本身的属性定义覆盖 </b>
    <!-- <p style="font-color:#232323">的属性定义范围结束 -->
  </p>

  <!-- <div style="font-color:#77ccff">的属性定义范围结束 -->
</div>

<p style="font-color:#232323">
  父元素
  <span style="font-color:#77ccff"> 子元素span </span>
</p>
```

## 学 css

### 认识 css

层叠样式表，简称**样式** 或 **css**

```css
/* css定义 */
p {
  /* css属性 */
  /* css属性可直接用于标签的style属性定义中 */
  color: red;
}
```

### 选择器

```css# 作用域与 css 基础

## 作用域

通常代码的定义范围，在 html 中在元素标签中的属性定义作用范围为其本身与其子元素

```html
<div style="font-color:#77ccff">
  <!-- <div style="font-color:#77ccff">的属性定义范围开始 -->

  <p>该元素作为外部div的子元素，接受父元素的属性定义 font-color</p>
  <p style="font-color:#232323">
    <!-- <p style="font-color:#232323">的属性定义范围开始 -->
    该元素作为外部div的子元素.接受父元素的属性定义 font-color
    <b>但定义被子元素本身的属性定义覆盖 </b>
    <!-- <p style="font-color:#232323">的属性定义范围结束 -->
  </p>

  <!-- <div style="font-color:#77ccff">的属性定义范围结束 -->
</div>

<p style="font-color:#232323">
  父元素
  <span style="font-color:#77ccff"> 子元素span </span>
</p>
```

## 学 css

### 认识 css

层叠样式表，简称**样式** 或 **css**

```css
/* css定义 */
p {
  /* css属性 */
  /* css属性可直接用于标签的style属性定义中 */
  color: red;
}
```

### 选择器

```css
/* 基础常用选择器 */

/* 标签选择器 */
p {
  color: red;
}

/* id选择器 */
#id {
  color: blue;
}

/* 类（class）选择器 */
.class {
  color: green;
}
```

### 属性

```css
.common {
  /* 文字颜色 */
  color: #77ffcc;
  /* 文字属性 */
  font-size: 20px;
  /* 文字粗细（可代替<b>） */
  font-weight: bold|bolder|200|300|400|500;

  /* 不渲染（不显示不占位） */
  display: none;

  /* 手动定义该标签为块还是行内 */
  display: block;
  display: inline;

  /* 进阶：flex布局 */
  display: flex;

  height: 100px;
  width: 100px;

  /* 内容过多时的处理 父元素必须具有指定高度*/
  overflow: hidden|scroll|auto;

  background-color: #77ccff;
  /* 边框 */
  border: 5px solid red;

  /* 外边距  层的边框以外留的空白 [上 右 下 左],[上下 左右],[上下左右]*/
  margin: 5px 5px 5px 5px;
  /* 内边距  层的边框到层的内容之间的空白 */
  padding: 5px 5px 5px 5px;

  /* 块元素内部行内元素水平的排列 */
  text-align: center|left|right|baseline;
  /* 行内元素的垂直对齐方式 */
  vertical-align: text-top|top|bottom|baseline;
  /* 块元素内部的块元素的对齐方向 */
  float: left | right;
  position: fixed|absolute|sticky;
}
```

### 用法

选择器优先级：!important > 内联样式(style="") > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器

https://www.runoob.com/w3cnote/css-style-priority.html

```html
<html>
  <div>
    无选择器作用
    <p>
      标签选择器作用
      <span id="id"> id选择器作用 </span><br />
      <span class="class">class选择器作用</span>
    </p>
  </div>
  <style>
    /* 标签选择器 */
    p {
      color: red;
    }

    /* id选择器 */
    #id {
      color: blue;
    }

    /* 类（class）选择器 */
    .class {
      color: green;
    }
  </style>
</html>
```

### 伪类

### flex

/* 基础常用选择器 */

/* 标签选择器 */
p {
  color: red;
}

/* id选择器 */
#id {
  color: blue;
}

/* 类（class）选择器 */
.class {
  color: green;
}
```

### 属性

```css
.common {
  /* 文字颜色 */
  color: #77ffcc;
  /* 文字属性 */
  font-size: 20px;
  /* 文字粗细（可代替<b>） */
  font-weight: bold|bolder|200|300|400|500;

  /* 不渲染（不显示不占位） */
  display: none;

  /* 渲染（不显示但是占位） */
  display: hidden;

  /* 手动定义该标签为块还是行内 */
  display: block;
  display: inline;
  /* 进阶：flex布局 */
  display: flex;

  /* 块元素专属 */
  height: 100px;
  width: 100px;

  /* 内容过多时的处理 父元素必须具有指定高度*/
  overflow: hidden|scroll|auto;

  background-color: #77ccff;
  /* 边框 */
  border: 5px solid red;

  /* 外边距  层的边框以外留的空白 [上 右 下 左],[上下 左右],[上下左右]*/
  margin: 5px 5px 5px 5px;
  /* 内边距  层的边框到层的内容之间的空白 */
  padding: 5px 5px 5px 5px;

  /* 块元素内部行内元素水平的排列 */
  text-align: center|left|right|baseline;
  /* 行内元素的垂直对齐方式 */
  vertical-align: text-top|top|bottom|baseline;
  /* 块元素内部的块元素的对齐方向 */
  float: left | right | top | bottom;
}
```

### 用法

选择器优先级：!important 定义 > style 定义> id > class > 标签

```html
<html>
  <div>
    无选择器作用
    <p>
      标签选择器作用
      <span id="id"> id选择器作用 </span><br />
      <span class="class">class选择器作用</span>
    </p>
  </div>
  <style>
    /* 标签选择器 */
    p {
      color: red;
    }

    /* id选择器 */
    #id {
      color: blue;
    }

    /* 类（class）选择器 */
    .class {
      color: green;
    }
  </style>
</html>
```

### 伪类

### flex
