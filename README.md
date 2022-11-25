# hexo-theme-new-yilia

一个简洁优雅的hexo主题

此项目是根据[hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)主题做了一些优化，具体效果请看[Demo](https://sanshui.findn.cn/)。

## 更新内容

### Yilia主题bug修复

- 修复yilia主题所有文章列表不显示
- yilia主题头像显示异常
- 修复手机端toc目录不显示
- 修复mathjax数学公式js失效及换行问题
- 移除已经关闭的多说和网易云跟帖评论系统
- 修复翻页不能正确显示的bug
- 修复分享到微信二维码失效问题
- 取消litten.me统计

### Yilia主题功能新增

- 增加文章置顶功能
- 增加代码块复制功能
- 增加waline评论功能(含valine后端部署)
- 增加gittalk评论
- 增加APlayer播放器(可导入歌单)
- 增加live2d看板娘
- 增加归档页
- 增加分类和标签页
- 增加music页
- 增加相册photos和视频videos页
- 增加404页面(《圈小猫》游戏 和 腾讯公益404)

### Yilia 主题美化

- 文章添加字数统计和阅读时长
- 文章添加原创和转载标签
- 增加鼠标悬停头像旋转功能
- 侧栏left-col增加时钟clock显示
- 侧栏left-col增加网易云播放器
- 侧栏增加一言(hitokoto)
- 增加鼠标点击爱心love和文字特效
- 增加雪花飘落snow效果
- 文章底部增加版权声明
- 利用font-awesome给网站添加图标
- 侧栏subnav增加自定义图标
- 手机端增加smart menu按钮
- 添加不蒜子/busuanzi访问量统计功能
- footer添加网站运行时间
- footer添加icp备案信息
- 友链页面优化
- 修改css统一yilia主题视觉颜色
- 自定义背景图片
- 手机端美化

### 搜索引擎收录优化

- 文章URL链接使用abbrlink持久化
- robots.txt配置
- 百度搜索资源平台（百度站长平台）配置
- 谷歌搜索( google search console)配置
- 百度主动推送链接配置
- 百度站长平台自动推送配置
- sitemap站点地图生成与提交

### 网站统计分析

- 配置谷歌分析(google analytics)
- 配置百度统计


## 开始使用

### 安装

- 安装hexo

```sh
npm install hexo-cli -g  # npm 全局安装hexo-cli
hexo init blog  # 初始化blog 会自动创建blog文件夹并安装依赖
hexo -v
cd blog
npm install  # 安装依赖
```

- 克隆repo到hexo根目录

```sh
git clone git@github.com:jackhanyuan/hexo-theme-new-yilia.git .
```

- 安装new-yilia所需依赖

```sh
npm install 
```

#### 配置

修改hexo根目录下的 `_config.yml` 文件及`themes\new-yilia`目录下的`_config.yml`文件

构建并启动本地博客

```sh
hexo clean # 清理
hexo g # 构建
hexo s # 启动本地sever服务
hexo d # 部署
```