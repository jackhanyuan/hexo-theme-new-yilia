---
title: 音乐
no_word_count: true
no_date: true
no_declare: true
no_toc: true
no_reward: true
no_comments: false
---

<center>
    <img src="https://qiniu.findn.cn/blog/photos/article/music-1.jpg" />
</center>


<!-- 添加APlayer音乐播放器,详见: https://aplayer.js.org -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">

<!-- 列表左对齐 并显示在最上面一层 -->
<div id="aplayer2" style="text-align:left;">

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/color-thief-don@2.0.2/src/color-thief.js"></script>

<!-- 为方便修改，添加一个配置文件，修改时直接修改配置文件即可。 -->
<script type="text/javascript" src="/music/aplayer_page_config.js"></script>

<!-- 根据封面自适应主题色，主要是作用于进度条 -->
<script type="text/javascript">
	  const colorThief = new ColorThief();
	  const setTheme = (index) => {
		if (!ap.list.audios[index].theme) {
		  colorThief.getColorAsync(ap.list.audios[index].cover, function(color) {
			ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
		  });
		}
	  };
	  setTheme(ap.list.index);
	  ap.on('listswitch', (data) => {
		setTheme(data.index);
	  });
</script>

<!-- APlayer音乐播放器功能结束 -->


<center>
    <h1></h1>
	<h1></h1>
</center>

<center>
<img src="https://qiniu.findn.cn/blog/photos/article/music-2.jpg" />
</center>

<!-- 用meting-js 添加APlayer音乐播放器, 可以实现添加导入音乐列表, 详见: https://github.com/metowolf/MetingJS -->
<!-- 支持server：netease, tencent, kugou, xiami, baidu -->
<!-- 网易云音乐 “我喜欢的音乐”不支持 其它收藏歌单均支持 -->
<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>


<!-- 歌单 替换id即可 -->
<meting-js style="margin-top: 1.5rem;width: auto;height: auto"
	server="netease"
	type="playlist"
	id="6728476093"
	fixed="false"
	mini="false"
	theme="#0088cc"
	autoplay="false"
	loop="all"
	preload="auto"
	volume="0.7"
	order="list"
	mutex="true"
	list-folded="false"
	list-max-height="700px"
	storage-name="metingjs">
</meting-js>








