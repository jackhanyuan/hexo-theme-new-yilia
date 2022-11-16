const ap = new APlayer({
    container: document.getElementById('aplayer'),
	// mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
	//theme: '#0088cc',
    loop: 'all',
    order: 'random',
	//order: 'list',
    preload: 'auto',
    volume: 0.7,//默认音量
	lrcType: 3, //使用lrc文件提供歌词
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    //listMaxHeight: 90,//播放列表的高度
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
	// 音乐网解析: https://www.jbsou.cn/

    audio: [{
            name: '所念皆星河',
            artist: '房东的猫',
            lrc: '/music/lrc/所念皆星河 - 房东的猫.lrc',
            cover: 'http://p1.music.126.net/JtevaRk1N7ecpmwZCIvwzQ==/109951165293262893.jpg?param=300y300',
            url: 'http://music.163.com/song/media/outer/url?id=1476239407.mp3',
			theme: 'red',
			type: '',
                  },
        {
            name: '举镜子的女孩',
            artist: '张子枫',
            lrc: '/music/lrc/举镜子的女孩 - 张子枫.lrc',
            cover: 'http://p1.music.126.net/DVPFwwNkeWRiFx_UscjOpA==/109951165582170050.jpg?param=300x300',
            url: 'http://music.163.com/song/media/outer/url?id=1871120552.mp3',
                  },

        ],
		customAudioType: {
			'customHls': function (audioElement, audio, player) {
				if (Hls.isSupported()) {
					const hls = new Hls();
					hls.loadSource(audio.url);
					hls.attachMedia(audioElement);
				}
				else if (audioElement.canPlayType('application/x-mpegURL') || audioElement.canPlayType('application/vnd.apple.mpegURL')) {
					audioElement.src = audio.url;
				}
				else {
					player.notice('Error: HLS is not supported.');
				}
			}
       }  
});