<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# HTML5

- [HTML5](#html5)
- [新增元素](#新增元素)
  - [新增](#新增)
    - [画布](#画布)
    - [多媒体](#多媒体)
    - [表单](#表单)
    - [语义和结构](#语义和结构)
  - [已移除](#已移除)
- [新增方法和事件](#新增方法和事件)
  - [表单元素](#表单元素)
    - [事件](#事件)
      - [oninput](#oninput)
      - [oninvalid](#oninvalid)
  - [网络状态](#网络状态)
    - [事件](#事件-1)
      - [window.ononline](#window-ononline)
      - [window.onoffline](#window-onoffline)
  - [全屏](#全屏)
    - [方法](#方法)
      - [Document 中的方法](#document-中的方法)
      - [Element 中的方法](#element-中的方法)
    - [事件](#事件-2)
      - [Document 上的事件处理程序](#document-上的事件处理程序)
      - [Element 上的事件处理程序](#element-上的事件处理程序)
    - [兼容处理](#兼容处理)
  - [多媒体](#多媒体-1)
    - [方法](#方法-1)
    - [属性](#属性)
    - [事件](#事件-3)
  - [拖拽（draggable）](#拖拽-draggable)
    - [属性](#属性-1)
  - [文件读取（FileReader）](#文件读取-filereader)
    - [方法](#方法-2)
    - [事件](#事件-4)
    - [属性](#属性-2)
  - [地理定位](#地理定位)
    - [获取当前地理信息](#获取当前地理信息)
      - [方法](#方法-3)
      - [返回数据](#返回数据)
- [画布（Canvas）](#画布-canvas)
  - [简介](#简介)
  - [创建画布](#创建画布)
  - [开始](#开始)
  - [属性和方法](#属性和方法)
    - [颜色、样式和阴影](#颜色-样式和阴影)
    - [线条样式](#线条样式)
    - [矩形](#矩形)
    - [路径](#路径)
    - [转换](#转换)
    - [文本](#文本)
    - [图像](#图像)
    - [像素操作](#像素操作)
    - [合成](#合成)
    - [其他](#其他)
- [存储对象](#存储对象)
  - [sessionStorage（会话存储）](#sessionstorage-会话存储)
  - [localStorage（本地存储）](#localstorage-本地存储)
  - [存储对象属性](#存储对象属性)
  - [存储对象方法](#存储对象方法)

# 新增元素

> https://www.runoob.com/html/html5-new-element.html
> IE9 以下不支持

## 新增

### 画布

标签       | 描述
----       | ----
`<canvas>` | 定义图形（例如图表和其他图像）。该标签基于 JavaScript 的绘图 API。

### 多媒体

标签       | 描述
----       | ----
`<audio>`  | 定义音频内容
`<video>`  | 定义视频
`<source>` | 定义 `video` 和 `audio` 元素的多媒体资源
`<embed>`  | 定义嵌入的内容（例如插件）
`<track>`  | 为 `video` 和 `audio` 之类的元素定义外部内容轨道

### 表单

标签         | 描述
----         | ----
`<datalist>` | 定义选项列表，与 `input` 元素配合使用该元素，来定义 `input` 可能的值。
`<keygen>`   | 定义用于表单的密钥对生成器字段。
`<output>`   | 定义不同类型的输出（例如脚本的输出）

### 语义和结构

> HTML5提供了新的元素来创建更好的页面结构

标签           | 描述
----           | ----
`<article>`    | 定义页面独立的内容区域。
`<aside>`      | 定义页面的侧边栏内容。
`<bdi>`        | 允许您设置一段文本，使其脱离其父元素的文本方向设置。
`<command>`    | 定义命令按钮，比如单选按钮、复选框或按钮
`<details>`    | 用于描述文档或文档某个部分的细节
`<dialog>`     | 定义对话框，比如提示框
`<summary>`    | 标签包含 `details` 元素的标题
`<figure>`     | 定义独立的流内容（图像、图表、照片、代码等等）。
`<figcaption>` | 定义 `figure` 元素的标题
`<footer>`     | 定义 `section` 或 `document` 元素的页脚。
`<header>`     | 定义了文档的头部区域
`<mark>`       | 定义带有记号的文本。
`<meter>`      | 定义度量衡。仅用于已知最大和最小值的度量。
`<nav>`        | 定义导航链接的部分。
`<progress>`   | 定义任何类型的任务的进度。
`<ruby>`       | 定义 ruby 注释（中文注音或字符）。
`<rt>`         | 定义字符（中文注音或字符）的解释或发音。
`<rp>`         | 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。
`<section>`    | 定义文档中的节（section、区段）。
`<time>`       | 定义日期或时间。
`<wbr>`        | 定义在文本中的何处适合添加换行符。

## 已移除

> 以下的 `HTML 4.01` 元素在 `HTML5` 中已经被删除

- `<acronym>`
- `<applet>`
- `<basefont>`
- `<big>`
- `<center>`
- `<dir>`
- `<font>`
- `<frame>`
- `<frameset>`
- `<noframes>`
- `<strike>`
- `<tt>`

# 新增方法和事件

## 表单元素

### 事件

#### oninput

- 输入时触发
- 粘贴内容时也能触发

#### oninvalid

- 表单验证不通过触发
- 可设置自定义提示信息

  > `DOM节点.setCustomValidity(提示信息)`

## 网络状态

> 当网络状态发生变化时才会触发

### 事件

#### window.ononline

- 网络连接时触发

#### window.onoffline

- 网络断开时触发

## 全屏

> https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API

### 方法

#### Document 中的方法

- `Document.exitFullscreen()`

  - 用于请求从全屏模式切换到 `窗口模式`。
  - 会返回一个 `Promise`，会在全屏模式完全关闭的时候被置为 `resolved` 状态。

#### Element 中的方法

- `Element.requestFullscreen()`

  - 请求浏览器（user agent）将特定元素（甚至延伸到它的后代元素）置为 `全屏模式`，隐去屏幕上的浏览器所有 UI 元素，以及其它应用。
  - 返回一个 `Promise`，并会在全屏模式被激活的时候变成 `resolved` 状态。

### 事件

> Fullscreen API 定义了两个事件，可用于检测全屏模式的打开和关闭，以及在全屏和窗口模式之间切换过程中发生的错误。
> `Document` 和 `Element` 接口提供了这些事件的事件处理函数。
>
> 注意：这些事件处理函数特性 `不可以作为 HTML 内容属性` 来使用。
> 无法在 HTML 内容中为 `fullscreenchange` 和 `fullscreenerror` 指定事件处理程序，必须通过 JavaScript 代码添加它们。

#### Document 上的事件处理程序

- `Document.onfullscreenchange`

  - 当进入全屏或退出全屏时，事件将被发送到 `Document` 上。
  - 此处理程序仅在整个文档全屏模式更改时有效。

- `Document.onfullscreenerror`

  - 当进入全屏或退出全屏出错时，事件将被发送到 `Document` 上。
  - 此处理程序仅在整个文档的全屏模式更改出错时有效。

#### Element 上的事件处理程序

- `Element.onfullscreenchange`

  - 当全屏事件发生时，事件将被发送到指定的 `Element` 上，表明该元素进入或退出全屏模式。

- `Element.onfullscreenerror`

  - 当指定的 `Element` 改变全屏模式时候出现错误，事件将被发送到该 `Element` 上。

### 兼容处理

> 不同浏览器需要添加不同的前缀
> `moz`、`ms`、`o`、`webkit`

```javascript
// 进入全屏 
function enterFullScreen(elem) {
    if (elem.requestFullScreen) {
        // 正常
        elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
        // Mozilla
        elem.mozRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
        // 微软
        elem.msRequestFullscreen();
    } else if (elem.oRequestFullScreen) {
        // Opera
        elem.oRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
        // Webkit
        elem.webkitRequestFullScreen();
    }
}

// 退出全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

// 判断全屏
function isFullscreen() {
    return document.fullscreenElement || document.mozFullScreenElement ||
           document.msFullscreenElement || document.webkitFullscreenElement || false;
}
```

## 多媒体

> https://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp

### 方法

方法             | 描述
----             | ----
`addTextTrack()` | 向音频 / 视频添加新的文本轨道
`canPlayType()`  | 检测浏览器是否能播放指定的音频 / 视频类型
`load()`         | 重新加载音频 / 视频元素
`play()`         | 开始播放音频 / 视频
`pause()`        | 暂停当前播放的音频 / 视频

### 属性

属性                  | 描述
----                  | ----
`audioTracks`         | 返回表示可用音轨的 AudioTrackList 对象
`autoplay`            | 设置或返回是否在加载完成后随即播放音频 / 视频
`buffered`            | 返回表示音频 / 视频已缓冲部分的 TimeRanges 对象
`controller`          | 返回表示音频 / 视频当前媒体控制器的 MediaController 对象
`controls`            | 设置或返回音频 / 视频是否显示控件（比如播放 / 暂停等）
`crossOrigin`         | 设置或返回音频 / 视频的 CORS 设置
`currentSrc`          | 返回当前音频 / 视频的 URL
`currentTime`         | 设置或返回音频 / 视频中的当前播放位置（以秒计）
`defaultMuted`        | 设置或返回音频 / 视频默认是否静音
`defaultPlaybackRate` | 设置或返回音频 / 视频的默认播放速度
`duration`            | 返回当前音频 / 视频的长度（以秒计）
`ended`               | 返回音频 / 视频的播放是否已结束
`error`               | 返回表示音频 / 视频错误状态的 MediaError 对象
`loop`                | 设置或返回音频 / 视频是否应在结束时重新播放
`mediaGroup`          | 设置或返回音频 / 视频所属的组合（用于连接多个音频 / 视频元素）
`muted`               | 设置或返回音频 / 视频是否静音
`networkState`        | 返回音频 / 视频的当前网络状态
`paused`              | 设置或返回音频 / 视频是否暂停
`playbackRate`        | 设置或返回音频 / 视频播放的速度
`played`              | 返回表示音频 / 视频已播放部分的 TimeRanges 对象
`preload`             | 设置或返回音频 / 视频是否应该在页面加载后进行加载
`readyState`          | 返回音频 / 视频当前的就绪状态
`seekable`            | 返回表示音频 / 视频可寻址部分的 TimeRanges 对象
`seeking`             | 返回用户是否正在音频 / 视频中进行查找
`src`                 | 设置或返回音频 / 视频元素的当前来源
`startDate`           | 返回表示当前时间偏移的 Date 对象
`textTracks`          | 返回表示可用文本轨道的 TextTrackList 对象
`videoTracks`         | 返回表示可用视频轨道的 VideoTrackList 对象
`volume`              | 设置或返回音频 / 视频的音量

### 事件

事件             | 描述
----             | ----
`abort`          | 当音频 / 视频的加载已放弃时
`canplay`        | 当浏览器可以播放音频 / 视频时
`canplaythrough` | 当浏览器可在不因缓冲而停顿的情况下进行播放时
`durationchange` | 当音频 / 视频的时长已更改时
`emptied`        | 当目前的播放列表为空时
`ended`          | 当目前的播放列表已结束时
`error`          | 当在音频 / 视频加载期间发生错误时
`loadeddata`     | 当浏览器已加载音频 / 视频的当前帧时
`loadedmetadata` | 当浏览器已加载音频 / 视频的元数据时
`loadstart`      | 当浏览器开始查找音频 / 视频时
`pause`          | 当音频 / 视频已暂停时
`play`           | 当音频 / 视频已开始或不再暂停时
`playing`        | 当音频 / 视频在已因缓冲而暂停或停止后已就绪时
`progress`       | 当浏览器正在下载音频 / 视频时
`ratechange`     | 当音频 / 视频的播放速度已更改时
`seeked`         | 当用户已移动 / 跳跃到音频 / 视频中的新位置时
`seeking`        | 当用户开始移动 / 跳跃到音频/视频中的新位置时
`stalled`        | 当浏览器尝试获取媒体数据，但数据不可用时
`suspend`        | 当浏览器刻意不获取媒体数据时
`timeupdate`     | 当目前的播放位置已更改时
`volumechange`   | 当音量已更改时
`waiting`        | 当视频由于需要缓冲下一帧而停止

## 拖拽（draggable）

> https://www.runoob.com/html/html5-draganddrop.html
> https://www.runoob.com/tags/att-global-draggable.html

### 属性

> `<element draggable="true|false|auto">`

属性值 | 描述
------ | ----
true   | 规定元素是可拖动的
false  | 规定元素是不可拖动的
auto   | 使用浏览器的默认特性

## 文件读取（FileReader）

> https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader

### 方法

- `FileReader.abort()`

  - 中止读取操作
  - 在返回时，`readyState` 属性为 `DONE`。

- `FileReader.readAsArrayBuffer()`

  - 开始读取指定的 `Blob` 中的内容
  - 一旦完成, `result` 属性中保存的将是被读取文件的 `ArrayBuffer` 数据对象。

- `FileReader.readAsBinaryString()`

  - 开始读取指定的 `Blob` 中的内容
  - 一旦完成，`result` 属性中将包含所读取文件的原始二进制数据。

- `FileReader.readAsDataURL()`

  - 开始读取指定的 `Blob` 中的内容
  - 一旦完成，`result` 属性中将包含一个 `data: URL` 格式的 `Base64` 字符串，以表示所读取文件的内容。

- `FileReader.readAsText()`

  - 开始读取指定的 `Blob` 中的内容
  - 一旦完成，`result` 属性中将包含一个字符串，以表示所读取的文件内容。

### 事件

- `FileReader.onabort`

  - 处理 `abort` 事件
  - 该事件在读取操作被中断时触发

- `FileReader.onerror`

  - 处理 `error` 事件
  - 该事件在读取操作发生错误时触发

- `FileReader.onload`

  - 处理 `load` 事件
  - 该事件在读取操作完成时触发

- `FileReader.onloadstart`

  - 处理 `loadstart` 事件
  - 该事件在读取操作开始时触发

- `FileReader.onloadend`

  - 处理 `loadend` 事件
  - 该事件在读取操作结束时（成功 / 失败）触发

- `FileReader.onprogress`

  - 处理 `progress` 事件
  - 该事件在读取 `Blob` 时触发

### 属性

- `FileReader.error`（只读）

  - 一个 `DOMException`，表示在读取文件时发生的错误。

- `FileReader.readyState`（只读）

  - 表示 `FileReader` 状态的数字，取值如下：

    常量名    | 值  | 描述
    ------    | --  | ----
    `EMPTY`   | `0` | 还没有加载任何数据
    `LOADING` | `1` | 数据正在被加载
    `DONE`    | `2` | 已完成全部的读取请求

- `FileReader.result`（只读）

  - 文件的内容
  - 该属性仅在读取操作完成后才有效
  - 数据的格式取决于使用哪个方法来启动读取操作

## 地理定位

> https://www.runoob.com/html/html5-geolocation.html

### 获取当前地理信息

#### 方法

- `navigator.geolocation.getCurrentPosition(successCallback, errorCallback) `

#### 返回数据

> 若成功，getCurrentPosition() 方法返回一个对象。
> 始终会返回 latitude、longitude 以及 accuracy 属性。
> 如果可用，则会返回其他下面的属性。

属性                    | 描述
----                    | ----
coords.latitude         | 十进制数的纬度
coords.longitude        | 十进制数的经度
coords.accuracy         | 位置精度
coords.altitude         | 海拔，海平面以上以米计
coords.altitudeAccuracy | 位置的海拔精度
coords.heading          | 方向，从正北开始以度计
coords.speed            | 速度，单位：米/秒
timestamp               | 响应的日期 / 时间

# 画布（Canvas）

> https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial
> https://www.runoob.com/html/html5-canvas.html
> https://www.runoob.com/tags/ref-canvas.html
> https://www.runoob.com/w3cnote/html5-canvas-intro.html

## 简介

- HTML5 `<canvas>` 元素用于图形的绘制，通过脚本 (通常是 JavaScript）来完成。
- `<canvas>` 标签只是图形容器，必须使用脚本来绘制图形。
- 可以通过多种方法在画布中绘制路径、矩形、圆、字符、添加图像……
- 画布的默认宽度为 300px，高度为 150px。

## 创建画布

- `<canvas id="ID" width="宽度" height="高度"></canvas>`

## 开始

- 找到 `<canvas>` 元素

  - `var canvasElem = document.getElementById('ID');`

- 创建 `context` 对象

  - `var ctx = canvasElem.getContext('2d');`

## 属性和方法

### 颜色、样式和阴影

属性 | 描述
---- | ----
`fillStyle` | 设置或返回用于填充绘画的颜色、渐变或模式。
`strokeStyle` | 设置或返回用于笔触的颜色、渐变或模式。
`shadowColor` | 设置或返回用于阴影的颜色。
`shadowBlur` | 设置或返回用于阴影的模糊级别。
`shadowOffsetX` | 设置或返回阴影与形状的水平距离。
`shadowOffsetY` | 设置或返回阴影与形状的垂直距离。

方法 | 描述
---- | ----
`createLinearGradient()` | 创建线性渐变（用在画布内容上）。
`createPattern()` | 在指定的方向上重复指定的元素。
`createRadialGradient()` | 创建放射状/环形的渐变（用在画布内容上）。
`addColorStop()` | 规定渐变对象中的颜色和停止位置。

### 线条样式

属性 | 描述
---- | ----
`lineCap` | 设置或返回线条的结束端点样式。
`lineJoin` | 设置或返回两条线相交时，所创建的拐角类型。
`lineWidth` | 设置或返回当前的线条宽度。
`miterLimit` | 设置或返回最大斜接长度。

### 矩形

方法 | 描述
---- | ----
`rect()` | 创建矩形。
`fillRect()` | 绘制"被填充"的矩形。
`strokeRect()` | 绘制矩形（无填充）。
`clearRect()` | 在给定的矩形内清除指定的像素。

### 路径

方法 | 描述
---- | ----
`fill()` | 填充当前绘图（路径）。
`stroke()` | 绘制已定义的路径。
`beginPath()` | 起始一条路径，或重置当前路径。
`moveTo()` | 把路径移动到画布中的指定点，不创建线条。
`closePath()` | 创建从当前点回到起始点的路径。
`lineTo()` | 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
`clip()` | 从原始画布剪切任意形状和尺寸的区域。
`quadraticCurveTo()` | 创建二次贝塞尔曲线。
`bezierCurveTo()` | 创建三次贝塞尔曲线。
`arc()` | 创建弧/曲线（用于创建圆形或部分圆）。
`arcTo()` | 创建两切线之间的弧/曲线。
`isPointInPath()` | 如果指定的点位于当前路径中，则返回 true，否则返回 false。

### 转换

方法 | 描述
---- | ----
`scale()` | 缩放当前绘图至更大或更小。
`rotate()` | 旋转当前绘图。
`translate()` | 重新映射画布上的 (0,0) 位置。
`transform()` | 替换绘图的当前转换矩阵。
`setTransform()` | 将当前转换重置为单位矩阵。然后运行 transform()。

### 文本

属性 | 描述
---- | ----
`font` | 设置或返回文本内容的当前字体属性。
`textAlign` | 设置或返回文本内容的当前对齐方式。
`textBaseline` | 设置或返回在绘制文本时使用的当前文本基线。

方法 | 描述
---- | ----
`fillText()` | 在画布上绘制"被填充的"文本。
`strokeText()` | 在画布上绘制文本（无填充）。
`measureText()` | 返回包含指定文本宽度的对象。

### 图像

方法 | 描述
---- | ----
`drawImage()` | 向画布上绘制图像、画布或视频。

### 像素操作

属性 | 描述
---- | ----
`width` | 返回 ImageData 对象的宽度。
`height` | 返回 ImageData 对象的高度。
`data` | 返回一个对象，其包含指定的 ImageData 对象的图像数据。

方法 | 描述
---- | ----
`createImageData()` | 创建新的、空白的 ImageData 对象。
`getImageData()` | 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。
`putImageData()` | 把图像数据（从指定的 ImageData 对象）放回画布上。

### 合成

属性 | 描述
---- | ----
`globalAlpha` | 设置或返回绘图的当前 alpha 或透明值。
`globalCompositeOperation` | 设置或返回新图像如何绘制到已有的图像上。

### 其他

方法 | 描述
---- | ----
`save()` | 保存当前环境的状态。
`restore()` | 返回之前保存过的路径状态和属性。
`createEvent()` | -
`getContext()` | -
`toDataURL()` | -

# 存储对象

> https://www.runoob.com/jsref/obj-storage.html
> Web 存储 API 提供了 `sessionStorage`（会话存储）和 `localStorage`（本地存储）两个存储对象来对网页的数据进行添加、删除、修改、查询操作。

## sessionStorage（会话存储）

- sessionStorage 用于临时保存同一窗口（或标签页）的数据，在关闭窗口或标签页之后将会删除这些数据。

## localStorage（本地存储）

- localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。

## 存储对象属性

属性     | 描述
----     | ----
`length` | 返回存储对象中包含多少条数据

## 存储对象方法

方法                      | 描述
----                      | ----
`key(n)`                  | 返回存储对象中第 n 个键的名称
`getItem(keyname)`        | 返回指定键的值
`setItem(keyname, value)` | 添加键和值（如果对应的值存在，则更新该键对应的值）
`removeItem(keyname)`     | 移除键（数据）
`clear()`                 | 清除存储对象中所有的键（数据）
