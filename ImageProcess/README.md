# ImageProcess for new-yilia theme

1. 首先安装python环境和所需依赖

```sh
pip install -r requirments.txt
```

2. 运行主程序，生成的`data.json`会自动存入`source/photos/`目录。

```sh
python main.py 
```

3. 可以将图片上传至github或者七牛云

```
# 先打开qiniu_upload.py，配置access_key、secret_key、url、bucket_name、upload_dic_path。
# 上传
python qiniu_upload.py 
```

4. 修改`source/photos/static/ins.js`

找到119和120两行
```js
var minSrc = 'yor_photos_url/photos/min_photos/' + data.link[i];
var src = 'your_photos_url/photos/photos/' + data.link[i];
```
