#  echarts

### 1、渐变色Bug

```javascript
{
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
      offset: 0, color: 'red' // 0% 处的颜色
  }, {
      offset: 1, color: 'blue' // 100% 处的颜色
  }],
  global: false // 缺省为 false
}
```

使用rgb表达会出现 

>Uncaught TypeError: Cannot read properties of undefined (reading 'length') 
>
>定位至：Animator.js?06ad:13 报错

