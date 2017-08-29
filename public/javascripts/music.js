var music = {
	musicDom: null,         //
	songs: new Array(),     //歌曲目录
	index: 0,               //下标

	/**
	 * 初始化
	 *
	 *
	 *
	 */
	init: function () {
		this.musicDom = document.createElement('audio');
		body.appendChild(this.musicDom);

		return this.musicDom;
	},

	/**
	 *
	 *
	 *
	 */
	addMusic: function (src) {
		this.songs.push(src);
	},

	/**
	 * 获得歌曲名
	 * 
	 *
	 */
	getSongName: function () {
		
	},

	/**
	 *
	 *
	 *
	 *
	 */
	play: function () {

	}
};


