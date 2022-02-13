# *dom to image*


## js库支持

>dom-to-image.min.js

>FileSaver.js


##   实现原理
将dom成图片



##  实现代码

```javascript
<script type="text/javascript">
    function dom2Image(){
      let fileName = document.getElementById('select_date').value+'.png'
      console.log()
      domtoimage.toBlob(document.getElementById('dom_to_image'))
          .then(function (blob) {
              window.saveAs(blob, fileName);
          });
    }

    $(function () {
        setTimeout(dom2Image,1000)
    })
</script>
```