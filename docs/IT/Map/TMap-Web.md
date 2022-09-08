#  腾讯地图 JS API  

## 一、Marker轨迹回放-全局模式

### 1.  MultiMarker Style

#### MultiMarker

  表示地图上的多个标注点，可自定义标注的图标。

| 构造函数                                                     |
| :----------------------------------------------------------- |
| TMap.MultiMarker(options:[MultiMarkerOptions](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#2)) |

| 方法                                                         | 返回值                                                       | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| setMap(map:[Map](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/map#1)) | this                                                         | 设置地图对象，如果map为null意味着将多个标注点同时从地图中移除。 |
| setGeometries(geometries: [PointGeometry[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#6)) | this                                                         | 更新标注点数据，如果参数为null或undefined不会做任何处理。    |
| setStyles(styles:[MultiMarkerStyleHash](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#3)) | this                                                         | 设置MultiMarker图层相关样式信息，如果参数为null或undefined不会做任何处理。 |
| setVisible(visible: Boolean)                                 | this                                                         | 设置图层是否可见。                                           |
| getMap()                                                     | [Map](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/map#1)   | 获取地图对象，若为空返回null。                               |
| getGeometries()                                              | [PointGeometry[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#6) | 获取点数据。                                                 |
| getStyles()                                                  | [MultiMarkerStyleHash](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#3) | 获取图层相关样式信息。                                       |
| getVisible()                                                 | visible                                                      | 获取可见状态。                                               |
| getGeometryById(id:String)                                   | [PointGeometry](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#6) | 根据点数据id来获取点数据。                                   |
| updateGeometries(geometry:[PointGeometry[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#6)) | this                                                         | 更新标注点数据，如果geometry的id存在于多点标注的集合中，会更新对id的数据，如果之前不存在于集合中，会作为新的点标注添加到集合中；如果参数为null或undefined不会做任何处理。 |
| add(geometries: PointGeometry [PointGeometry[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#6)) | this                                                         | 向图层中添加标注点，如果geometry的id已经存在集合中，则该geometry不会被重复添加，如果geometry没有id或者id不存在于集合中会被添加到集合，没有id的geometry会被赋予一个唯一id；如果要添加到集合中的标注存在重复id，这些标注点会被重新分配id；如果参数为null或undefined不会做任何处理。 |
| remove(ids: String[])                                        | this                                                         | 移除指定id的标注点，如果参数为null或undefined不会做任何处理。 |
| moveAlong(param: [MoveAlongParamSet](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#7), options:Object) | this                                                         | 指定id的标注点，沿着指定路径移动;每次新调用moveAlong时，尚未完成的动画会被取消，并触发move_stopped事件;options中如果设置autoRotation为true，对于faceTo为’map’的点标记，会根据路径方向自动改变点标记图片的旋转角度。 |
| stopMove()                                                   | this                                                         | 停止移动，尚未完成的动画会被取消，并触发move_stopped事件；已经完成的动画不会触发move_stopped事件。 |
| pauseMove()                                                  | this                                                         | 暂停点标记的动画效果，并触发move_paused事件;未在移动状态不会触发move_paused事件。 |
| resumeMove()                                                 | this                                                         | 重新开始点标记的动画效果，并触发move_resumed事件;未在暂停状态不会触发move_resumed事件。 |
| on(eventName:String, listener:Function)                      | this                                                         | 添加listener到eventName事件的监听器数组中。                  |
| off(eventName:String, listener:Function)                     | this                                                         | 从eventName事件的监听器数组中移除指定的listener。            |
| destroy()                                                    |                                                              | 销毁图层对象                                                 |

| 事件名       | 参数                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| click        | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 点击事件。                                                   |
| dblclick     | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 双击事件。                                                   |
| mousedown    | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 鼠标在地图区域中左键按下时触发，只在桌面浏览器中触发。       |
| mouseup      | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 鼠标在地图区域中左键按下又弹起时触发，只在桌面浏览器中触发。 |
| mousemove    | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 鼠标在地图上移动时触发，只在桌面浏览器中触发。               |
| hover        | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 鼠标在图层上悬停对象改变时触发，事件对象中的geometry属性会指向交互位置所在图形的LabelGeometry，无图形时事件对象为null,只在桌面浏览器中触发。 |
| touchstart   | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 在地图区域触摸开始时触发，只在移动浏览器中触发。             |
| touchmove    | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 在地图区域触摸移动时触发，只在移动浏览器中触发。             |
| touchend     | [GeometryOverlayEvent](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Event#3) | 在地图区域触摸结束时触发，只在移动浏览器中触发。             |
| moving       | Object                                                       | 点标记在执行moveAlong动画时触发事件，事件参数为一个key-value形式对象, key代表MultiMarker点数据集合中的PointGeometry的id，value是一个 [MarkerMovingEventItem](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#9) 对象。 |
| move_ended   | none                                                         | 点标记执行moveAlong动画结束时触发事件。                      |
| move_stopped | none                                                         | 点标记执行moveAlong动画被停止时触发事件。                    |
| move_paused  | none                                                         | 点标记执行moveAlong动画被暂停时触发事件。                    |
| move_resumed | none                                                         | 点标记执行moveAlong动画由暂停到恢复时触发事件。              |

**示例：**
  本示例中，介绍如何设置标注的属性

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>设置marker属性</title>
    <style type="text/css">
    html,
    body {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }
    #container {
        width: 100%;
        height: 100%;
    }
    </style>
    <script charset="utf-8" src="https://wemapvis.map.qq.com/api/gljs/v2?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"></script>
</head>
 
<body onLoad="initMap()">
    <script>
    //初始化地图
    var map = new TMap.Map("container", {
        center: center
    });
    //初始化marker
    var marker = new TMap.MultiMarker({
        id: "marker-layer", //图层id
        map: map,
        styles: { //点标注的相关样式
            "marker": new TMap.MarkerStyle({
                "width": 25,
                "height": 35,
                "anchor": { x: 16, y: 32 },
                "src": "img/marker.png"
            })
        },
        geometries: [{ //点标注数据数组
            "id": "demo",
            "styleId": "marker",
            "position": new TMap.LatLng(39.984104, 116.307503),
            "properties": {
                "title": "marker"
            }
        }]
    });
 
</body>
</html>
```

[新窗口打开](https://lbs.qq.com/webDemoCenter/glAPI/glMarker/sampleMarker)  [在线试一试](https://lbs.qq.com/webDemoCenter/glAPI/glMarker/sampleMarker)





#### MultiMarkerOptions

------

  MultiMarker的配置参数。

| 属性名称        | 类型                                                         | 说明                                                    |
| :-------------- | :----------------------------------------------------------- | :------------------------------------------------------ |
| id              | String                                                       | 图层id，若没有会自动分配一个。                          |
| map             | [Map](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/map#1)   | 显示Marker图层的底图。                                  |
| styles          | MultiMarkerStyleHash                                         | 点标注的相关样式。                                      |
| geometries      | [PointGeometry[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#6) | 点标注数据数组。                                        |
| enableCollision | Boolean                                                      | 是否开启图层内部的点标注碰撞，默认为false，不开启碰撞。 |
| enableBubble    | Boolean                                                      | 是否将图层的鼠标事件冒泡到地图上，默认值为true。        |





#### MultiMarkerStyleHash

------

  一个key-value形式对象, 表示Marker图层的相关样式信息，key使用字符串，value是 [MarkerStyle](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#4) 对象。





#### MarkerStyle

------

  应用于Marker图层的样式类型。

| 构造函数                                                     |
| :----------------------------------------------------------- |
| TMap.MarkerStyle(options:[MarkerStyleOptions](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#5)) |





#### MarkerStyleOptions

------

  MarkerStyle配置参数。

| 属性名称    | 类型    | 说明                                                         |
| :---------- | :------ | :----------------------------------------------------------- |
| width       | Number  | 必需，标注点图片的宽度，默认为34                             |
| height      | Number  | 必需，标注点图片的高度，默认为50                             |
| anchor      | Object  | 标注点图片的锚点位置，对象字面量{x:Number, y:Number}形式，在地图各种操作中，锚点的位置与标注位置点是永远对应的；若没有锚点默认为{ x: width/2, y: height }；锚点以图片左上角点为原点 |
| src         | String  | 标注点图片url或base64地址，若为url地址图片一定要在服务器端配置允许跨域 |
| faceTo      | String  | 标注点图片的朝向，可取`map`（贴地）或`screen`（直立），默认为`screen`。 |
| rotate      | Number  | 标注点图片的旋转角度，单位为度，非负数；以锚点为旋转原点，逆时针为正。 |
| opacity     | Number  | 标注点图片的透明度，取值0-1。                                |
| color       | String  | 标注点文本颜色属性，支持`rgb()`，`rgba()`，`#RRGGBB`等形式，默认为`rgba(0,0,0,1)` |
| strokeColor | String  | 标注点文本描边颜色属性，支持`rgb()`，`rgba()`，`#RRGGBB`等形式，默认为`rgba(0,0,0,0)` |
| strokeWidth | Number  | 标注点文本描边宽度，默认为1                                  |
| size        | Number  | 标注点文本文字大小属性，默认为14                             |
| direction   | String  | 标注点文本文字相对于标注点图片的方位，可选位于标注点图片的`center`，`top`，`bottom`，`left`，`right`方位，默认位于图片的中心`center` |
| offset      | Object: | 标注点文本文字基于direction方位的偏移属性，单位为像素，以文本文字中心为原点，x轴向右为正向左为负，y轴向下为正向上为负，默认为`{x:0, y:0}` |





#### PointGeometry

------

  点图形数据。

| 属性名称   | 类型                                                         | 说明                                                         |
| :--------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| id         | String                                                       | 点图形数据的标志信息，不可重复，若id重复后面的id会被重新分配一个新id，若没有会随机生成一个。 |
| styleId    | String                                                       | 对应MultiMarkerStyleHash中的样式id。                         |
| position   | [LatLng](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Class#1) | 标注点位置。                                                 |
| rank       | Number                                                       | 当开启碰撞时，值越大碰撞优先级越高。关闭碰撞时，表示标注点的图层内绘制顺序。 |
| properties | Object                                                       | 标注点的属性数据。                                           |
| content    | String                                                       | 标注点文本，默认为undefined，即无标注点文本绘制效果。        |





#### MoveAlongParamSet

------

  MultiMarker的moveAlong方法的参数对象。一个key-value形式对象, keyMultiMarker点数据集合中的PointGeometry的id，value是 [MoveAlongParam](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/marker#8) 对象。





#### MoveAlongParam

| 属性名称 | 类型                                                         | 说明                                                         |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| path     | [LatLng[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Class#1) | 移动路径的坐标串                                             |
| duration | Number                                                       | 完成移动所需的时间，单位：毫秒 （同时指定duration和speed，duration优先级高） |
| speed    | Number                                                       | speed为指定速度，正整数，单位：千米/小时                     |





#### MarkerMovingEventItem

------

  点标记沿线移动时返回的信息。

| 属性名称      | 类型                                                         | 说明                                                         |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| passedLatLngs | [LatLng[\]](https://wemap.qq.com/Vis/JavascriptAPI/APIDoc/Class#1) | marker所走过的路径坐标串                                     |
| angle         | Number                                                       | 自动旋转情况下，当前点的旋转角度(只对faceTo为’Map’的点标记有效) |

## 2.  MarkerStyle 

#### MarkerStyle

------

  `MarkerStyle`表示应用于Marker图层的样式类型。

**构造函数**

| 构造函数                                                     |
| :----------------------------------------------------------- |
| new TMap.MarkerStyle([MarkerStyleOptions](https://lbs.qq.com/Vis/JUEAPI/APIDoc/marker#4)) |





#### MarkerStyleOptions 对象规范

------

[MarkerStyle](https://lbs.qq.com/Vis/JUEAPI/APIDoc/marker#3) 配置参数。

| 属性名称 |  类型  |                             说明                             |
| :------: | :----: | :----------------------------------------------------------: |
|  width   | Number |               必需，标注点图片的宽度，默认为34               |
|  height  | Number |               必需，标注点图片的高度，默认为50               |
|  anchor  | Point  | 标注点图片的锚点位置，在地图各种操作中，锚点的位置与标注位置点是永远对应的；若没有锚点默认为{ x: width/2, y: height }，锚点以图片左上角点为原点 |
|   src    | String | 标注点图片url或base64地址，若为url地址图片一定要在服务器端配置允许跨域 |