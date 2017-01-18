![Diet Logo](http://i.imgur.com/Giyox4x.jpg)

[![NPM](http://img.shields.io/npm/v/diet.svg?style=flat)](https://www.npmjs.org/package/diet) [![Downloads](http://img.shields.io/npm/dm/diet.svg?style=flat)](https://www.npmjs.org/package/diet) [![Coveralls](http://img.shields.io/coveralls/adamhalasz/diet.svg?style=flat)](https://coveralls.io/r/adamhalasz/diet)


[Diet](http://dietjs.com) is a tiny, fast and modular node.js web framework. Good for making fast & scalable apps and apis.
```javascript
var server = require('diet')

var app = server()
app.listen(8000)
app.get('/', function($){
    $.end('hello world')
})
```

## Features 
- Built for [virtual hosting](http://dietjs.com/tutorials/host#) 
- Request and Reponse combined into the [signal object ($)](http://dietjs.com/tutorials/signal#)
- Simple and Semantic Routing with [app.get](http://dietjs.com/api/server#app.get) and [app.post](http://dietjs.com/api/server#app.post) and other methods.
- [Middleware](http://dietjs.com/tutorials/router#middleware) Support
- [MVC](http://dietjs.com/api/server#app.model) (model-view-controller) Support
- [Header](http://dietjs.com/tutorials/router#header) and [footer](http://dietjs.com/tutorials/router#footer) routes for better global middleware structuring
- Support for ES6 Generator Middlewares/Controllers (new since v0.10)
- Asynchronous [error handling](http://dietjs.com/tutorials/router#error) with [app.error](http://dietjs.com/api/server#app.error) routes
- [404](http://dietjs.com/tutorials/router#missing) routing with [app.missing](http://dietjs.com/api/server#app.missing)
- [Very small](http://dietjs.com/resources/comparison#sloc), just ~550 sloc

## Install
```
npm install diet
```

















<p align="center">
  <img src="https://i.imgur.com/BqsX9NT.png" width="256" height="256" alt="mitt">
  <br>
  <b>Mitt</b>: tiny 200b functional event emitter / pubsub.
  <br>
  <a href="https://www.npmjs.org/package/mitt"><img src="https://img.shields.io/npm/v/mitt.svg?style=flat" alt="npm"></a> <a href="https://travis-ci.org/developit/mitt"><img src="https://travis-ci.org/developit/mitt.svg?branch=master" alt="travis"></a>
</p>






























# markdown-toc [![NPM version](https://img.shields.io/npm/v/markdown-toc.svg?style=flat)](https://www.npmjs.com/package/markdown-toc) [![NPM monthly downloads](https://img.shields.io/npm/dm/markdown-toc.svg?style=flat)](https://npmjs.org/package/markdown-toc)  [![NPM total downloads](https://img.shields.io/npm/dt/markdown-toc.svg?style=flat)](https://npmjs.org/package/markdown-toc) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/markdown-toc.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/markdown-toc)

> Generate a markdown TOC (table of contents) with Remarkable.

## Table of Contents







## Props

| 参数    | 类型    | 说明   |
| ------------- |-------------| -----|
| type | String |必填项,指明菜单的类型,有6种：top,bottom,left,right,middle,middle-around |
| circle | boolean | 菜单按钮是否为圆角，默认为方形按钮 |
| mask | String | 遮罩层，有两种："white"和"black" |
| animate | String | 子菜单动画,可以引入外部css动画库，比如Animate.css |
| btn | boolean | 开关按钮,填这属性，则有默认开关按钮，不填则没有默认,需要在slot中自行定义开关按钮 |
| colors | Array | 按钮和菜单的背景颜色 |










## Slot

| name    | 说明   |
| -------------| -----|
| item_btn  | 自定义开关按钮 |
| item_1 | 第一个菜单的内容 |
| item_2 | 第二个菜单的内容 |
| item_3 | 第三个菜单的内容 |
| item_4 | 第四个菜单的内容 |














## freecodecamp中文社区发展历程
| 时间            | done          | 
| :------------- | :------------- |
| 2016.3.22    | 基于freecodecamp代码贡献文档和优才公开课视频在本机搭建freecodecamp项目 |
| 2016.3.28    | 基于花生壳动态域名解析服务在极路由搭建临时网站：freecodecamp.jios.org:3000 |
| 2016.4.1     | 基于邹治免费提供的域名(freecodecamp.cn)和美国扳道工VPS上线freecodecamp中文社区 |
| 2016.4.2     | 基于let's encryto给freecodecamp中文社区添加https。 |
| 2016.4.5     | 基于优才公开课视频给freecodecamp中文社区添加nginx。 |
| 2016.4.6     | 和freecodecamp创始人quincy沟通翻译规范、提交流程。 |
| 2016.4.7     | 搜索freecodecamp issue中有关中文的翻译和提交，才发现2015.10月份就已经有人做中文翻译的事情了。 |
| 2016.4.10    | 不再纠结于英文社区翻译规范和提交流程，独立思考、独立发展。 |
| 2016.4.11    | 正式开始翻译网站首页：learning by doing。 |
| 2016.4.13    | 正式开始翻译课程第一部分:getting started。 |
| 2016.4.16    | 写了第一版翻译规范和参与流程。 |
| 2016.4.17    | 开始翻译课程第二部分：html5 + css3。 |
| 2016.4.24    | 参加猿生态在北京车库咖啡举办的第一次freecodecamp线下活动，结识了晋剑、jason、海良等小伙伴。 |
| 2016.4.25    | 通过[freecodecamp中文聊天室](https://gitter.com/freecodecamp/chinese)招募到第一位参与翻译的小伙伴[tegrat](https://github.com/tegrat)。 |
| 2016.4.28    | 胡可同学加入翻译志愿组，贡献翻译工具。 |
| 2016.4.29    | 受胡可同学的感染，我写了simleJson.js来轻松干掉json文件的冗余部分。 |
| 2016.5.8     | 受晋剑同学的邀请，我来到苏州，加入猿生态，负责freecodecamp中文社区的翻译和开发。 |
| 2016.6.5     | 启动了苏州首届全民编程挑战赛 |














Quick install

Bulma is in early but active development! Try it out now:

NPM

npm install bulma
Bower

bower install bulma
CDN

https://cdnjs.com/libraries/bulma

Feel free to raise an issue or submit a pull request.











Browser Support

Bulma uses autoprefixer to make (most) Flexbox features compatible with earlier browser versions. According to Can I use, Bulma is compatible with:

Chrome
Edge
Firefox
Internet Explorer (10+)
Opera
Safari












# Table of Contents
1. [Example](#example)
2. [Example2](#example2)
3. [Third Example](#third-example)

## Example
## Example2
## Third Example




```html
var toc = require('markdown-toc');

toc('# One\n\n# Two').content;
// Results in:
// - [One](#one)
// - [Two](#two)
```








Copyright and license

Code copyright 2017 Jeremy Thomas. Code released under the MIT license.