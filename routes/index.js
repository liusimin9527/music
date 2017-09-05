var express = require('express');
var router = express.Router();

/* 首页 */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title : "QQ音乐"
  });
});
/* 歌手 */
router.get('/portal/singer_list.html', function(req, res, next) {
	res.render('singer_list', {
		title : "歌手列表-QQ音乐"
	});
});
/* 专辑 */
router.get('/portal/album_lib.html', function(req, res, next) {
	res.render('album_lib', {
		title : "专辑库-QQ音乐-中国最新最全的免费正版高品质无损音乐平台"
	});
});
/* 排行榜 */
router.get('', function(req, res, next) {
	res.render('', {

	});
});
/* 分类歌单 */
router.get('/portal/playlist.html', function(req, res, next) {
	res.render('playlist', {
		title : "分类歌单-QQ音乐-中国最新最全的免费正版高品质无损音乐平台"
	});
});
/* 电台 */
router.get('/portal/radio.html', function(req, res, next) {
	res.render('radio', {
		title : "电台-QQ音乐-中国最新最全的免费正版高品质无损音乐平台"
	})
})
/* 数字专辑 */
router.get('/portal/album_mall.html', function(req, res, next) {
	res.render('album_mall', {
		title : "数字专辑-QQ音乐-中国最新最全的免费正版高品质无损音乐平台"
	});
});
/* 我的音乐 */
router.get('/portal/profile.html', function(req, res, next) {
	res.render('profile.jade', {
		title : "我的音乐-QQ音乐-中国最新最全的免费正版高品质无损音乐平台"
	});
})
/* 客户端 */
router.get('/download', function(req, res, next) {
	res.render('', {

	});
})
/* 音乐号 */
router.get('/vip/daren_recruit/apply.html', function(req, res, next) {
	res.render('apply.jade');
});
/* vip */
router.get('/vipportal', function() {
	res.render('');
});
/*  */
router.get('/portal/player.html', function(req, res) {
	res.render('player');
});

module.exports = router;