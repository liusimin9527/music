var express = require('express');
var router = express.Router();

/*  */
router.get('/', function(req, res, next) {
  res.render('index', {
  	"title": "QQ音乐"
  });
});

/* 歌手 */
router.get('/portal/singer_list.html', function(req, res, next) {
	res.render('singer_list', {
		"title": "歌手列表-QQ音乐"
	});
});
/* 专辑 */
router.get('/portal/album_lib.html', function(req, res, next) {
	res.render('album_lib');
});
/*  */
router.get('/portal/playlist.html', function(req, res, next) {
	res.render('playlist')
});
/* 我的音乐 */
router.get('/portal/profile.html', function(req, res, next) {
	res.render('profile.jade')
})
/* 客户端 */
router.get('')
/* 音乐号 */
router.get('/vip/daren_recruit/apply.html', function(req, res, next) {
	res.render('apply.jade');
});
/* vip */

/*  */
router.get('/portal/player.html', function(req, res) {
	res.render('player');
});

module.exports = router;
