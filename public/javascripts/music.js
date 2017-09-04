var music = {
	musicDom: null,         //
	songs: new Array(),     //歌曲目录
	index: 0,               //下标

	/**
	 * [init description]
	 * @return {[type]} [description]
	 */
	init: function () {
		this.musicDom = document.createElement('audio');
		document.body.appendChild(this.musicDom);
	},

	/**
	 * 增加音乐
	 * @param {[]} src []
	 */
	addMusic: function (src) {
		this.songs.push(src);
	},

	/**
	 * 获取歌曲名
	 * @return {[type]} [description]
	 */
	getSongName: function () {
		
	},

	/**
	 * 播放音乐
	 * @return {[type]} [description]
	 */
	play: function () {

	}
};


