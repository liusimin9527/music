EventUtil.addHandler(window, 'load', function() {
	var searchText = document.getElementById('search-text');
	var searchBtn = document.getElementById('search-btn');
	var prev = document.getElementById('prev');
	var play = document.getElementById('play');
	var next = document.getElementById('next');
	var songName = document.getElementById('song-name');
	
	//music.init();   //初始化
	//music.add();    

	EventUtil.addHandler(searchBtn, 'click', function () {
		console.log('1111111111');
		console.log(searchText.value);
	});
});
