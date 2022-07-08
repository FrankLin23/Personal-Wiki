# HTML Basic

HTML(Hypertext Markup Lanuage)超文本标记语言
不是一种编程语言，而是一种标记语言，它通过标记标签来描述网页

- 语法：

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>我是第一个标题</h1>
    <p>我是第一个段落。</p>
  </body>
</html>
```

## HTML 元素

HTML 文档由 HTML 元素定义
元素语法：

- 以开始标签起始
- 以结束标签终止
- **元素的内容**是开始标签与结束标签之间的内容
- 某些 HTML 元素具有**空内容**
- 空元素**在开始标签中进行关闭**

## HTML 属性

常用的属性

| **属性** | **描述**             |
| -------- | -------------------- |
| class    | 一个或者多个类名     |
| id       | 唯一 id              |
| style    | 行内样式             |
| title    | 描述了元素的额外信息 |

## HTML 标题

```html
<h1>Heading1</h1>
<h2>Heading2</h2>
<h3>Heading3</h3>
<h4>Heading4</h4>
<h5>Heading5</h5>
<h6>Heading6</h6>

<!--水平线>
<hr>
```

## HTML 段落

```html
<p>sadas</p>

<p>这个<br />段落<br />演示了分行的效果</p>
```

## HTML 文本格式化

```html
加粗
<strong></strong>

斜体
<em></em>

放大
<big></big>

缩小
<small></small>

上标
<sup></sup>

下标
<sub></sub>

插入
<ins></ins>

删除
<del></del>
```

## HTML 链接

超链接 使用`<a>`标签

## HTML 头部

head 元素包含了所有头部标签的元素。

```html
<head>
  <title>文档标题</title>
  <!--base描述基本的链接地址-->
  <base href="#" target="_blank" />
  <!--link定义文档与外部资源的关系-->
  <link rel="stylesheet" type="text/css" href="style.css" />
  <!--style包含样式文件-->
  <style type="text/css">
    body {
      background: #fff;
    }
  </style>
  <!--meta标签描述了一些基本的元数据-->
  <meta />
  <!--定义了客户端的脚本文件-->
  <script></script>
</head>
```

**HTML <meta> 元素**
meta 标签描述了一些基本的元数据。

`<meta>`标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。
`<meta>`元素通常用于指定网页的描述，关键词，文件的最后修改时间、作者和其他元数据。
元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 Web 服务。
`<meta>` 一般放置于 `<head>` 区域

## HTML 图像

`<img>`插入图像

```html
<img src="url" alt="image" />
```

- src 图像的地址
- alt 图像无法载入时的替代文字

## HTML 表格

```html
<table border="1">
  <caption>
    Title
  </caption>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>row1 cell1</td>
    <td>row1 cell2</td>
  </tr>
  <tr>
    <td>row2 cell1</td>
    <td>row2 cell2</td>
  </tr>
</table>
```

- table 定义一个表格
- tr 表格的行
- td 表格的数据
- th 表头
- caption 表格标题

table border 可以设置表格的边框属性

## HTML 列表

```html
<!--无序列表-->
<ul>
  <li>Coffee</li>
  <li>Milk</li>
</ul>
<!--有序列表-->
<ol>
  <li>Coffee</li>
  <li>Milk</li>
</ol>
<!--自定义列表-->
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

## HTML 区块

大部分 HTML 元素分为块级元素或者内联元素。
块级元素通常在显示中以新行来开始（和结束）。
内联元素在显示时通常不会以新行开始。

- div 是块级元素，它可用于组合其他 HTML 元素的容器。`<div>`元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。
- HTML`<span>`元素是内联元素，可用作文本的容器`<span>`元素也没有特定的含义。

## HTML 表单

HTML 表单用于收集用户的输入信息。
HTML 表单表示文档中的一个区域，此区域包含交互控件，将用户收集到的信息发送到 Web 服务器。

```html
<form action="">
  First name: <input type="text" name="firstname" /><br />
  Last name: <input type="text" name="lastname" /> Password:
  <input type="password" name="pwd" />
  <input type="radio" name="sex" value="male" />男<br />
  <input type="radio" name="sex" value="female" />女
  <input type="checkbox" name="vehicle" value="Bike" />我喜欢自行车<br />
  <input type="checkbox" name="vehicle" value="Car" />我喜欢小汽车
  <input type="submit" value="Submit" />
</form>
```

表单是一个包含表单元素的区域。
表单元素是允许用户在表单中输入内容，比如：文本域（textarea）、下拉列表（select）、单选框（radio-buttons）、复选框（checkbox） 等等。

## HTML 框架

通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。
iframe

```html
<iframe src="URL"></iframe>
```

## HTML 脚本

```html
<script>
  document.write("Hello World!");
</script>
```

`<script>`表示客户端脚本，比如 JavaScript。
`<noscript>` 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时.

```html
<script>
  document.write("Hello World!");
</script>
<noscript>抱歉，你的浏览器不支持 JavaScript!</noscript>
```

## HTML 字符实体

HTML 中的预留字符必须被替换为字符实体。
一些在键盘上找不到的字符也可以使用字符实体来替换。
