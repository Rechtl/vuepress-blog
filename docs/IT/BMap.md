# 百度地图 BMap

----

## 一、坐标转换[[官方文档](https://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition)]

### 1.  接口功能介绍


```http
https://api.map.baidu.com/geoconv/v1/?coords=114.21892734521,29.575429778924&from=1&to=5&ak=你的密钥 //GET请求
```

### 2.  请求参数

| 参数名称 |<center>含义</center> | 类型 | 举例 | 默认值 | 是否必须 |
| :------: | :----- | :----: | :----: | :----: | :------: |
|  coords  |      需转换的源坐标，多组坐标以“；”分隔 （经度，纬度）       | string | 114,29 |   无   |    是    |
|    ak    | 开发者密钥,[申请AK](http://lbsyun.baidu.com/apiconsole/key/create) | string |        |   无   |    是    |
|   from   | 源坐标类型：<br>    1：GPS标准坐标（wgs84）；<br>	2：搜狗地图坐标；<br>	3：火星坐标（gcj02），即高德地图、腾讯地图和MapABC等地图使用的坐标；<br>	4：3中列举的地图坐标对应的墨卡托平面坐标;<br>	5：百度地图采用的经纬度坐标（bd09ll）；<br>	6：百度地图采用的墨卡托平面坐标（bd09mc）;<br>	7：图吧地图坐标；<br>	8：51地图坐标； |  int   |   1    |   1    |    否    |
|    to    | 目标坐标类型：<br>	3：火星坐标（gcj02），即高德地图、腾讯地图及MapABC等地图使用的坐标；<br>	5：百度地图采用的经纬度坐标（bd09ll）；<br/>	6：百度地图采用的墨卡托平面坐标（bd09mc）； |  int   |   5    |   5    |    否    |
|    sn    | 若用户所用AK的校验方式为SN校验时该参数必须 [SN生成](http://lbsyun.baidu.com/index.php?title=webapi/appendix) | string |        |   无   |    否    |
|  output  |                         返回结果格式                         | string |  json  |  json  |    否    |

### 3.  返回结果参数

|  名称  |      类型       |                         说明                         |
| :----: | :-------------: | :--------------------------------------------------: |
| status |       Int       | 本次API访问状态，如果成功返回0，如果失败返回其他数字 |
| result | json或者xml数组 |                       转换结果                       |
|          x        |                        float                         | 经度 |
|          y        |                        float                         | 纬度 |

### 4.  状态码说明

| 返回码 | 英文描述 |           定义           |                           常见原因                           |
| :----: | :------: | :----------------------: | :----------------------------------------------------------: |
|   0    |    ok    |           正常           |                       服务请求正常召回                       |
|   1    |          |         内部错误         |                                                              |
|   4    |          |         转换失败         | X→GPS时必现，根据法律规定，不支持将任何类型的坐标转换为GPS坐标 |
|   21   |          |         from非法         |                                                              |
|   22   |          |          to非法          |                                                              |
|   24   |          |      coords格式非法      |                                                              |
|   25   |          | coords个数非法，超过限制 |                                                              |
|   26   |          |         参数错误         |                                                              |

### 5.  实例代码
```js
/**
 * <script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=userAK"></script>
 */

/**
 * 坐标转换完之后的回调函数
 * @param data
 */
draw_point = function (data){
  if(data.status === 0) {
    console.log(data)
  }
}

/**
 * 加载信息
 */
function get_team_location() {
  let convertor = new BMapGL.Convertor();// 获取坐标转换器
  let coords  = [["114","23"],["110","25"],["130","45"]]
  let pointArr = coords.map(function (item){
    console.log(item)
    return new BMapGL.Point(item[0],item[1])
  });
  convertor.translate(pointArr, 3, 5, draw_point)
}
```

----
### 参考
1. [^](https://lbsyun.baidu.com/index.php?title=webapi/guide/changeposition)WebAPI说明文档
2. [^](https://lbsyun.baidu.com/jsdemo.htm#a5_2)百度地图官方实例

