$(document).ready(function () {
	/*  */
	$('.top_nav__item a').click(function () {
		$(this).siblings('a').removeClass('top_nav__link--current');   //删除样式
		$(this).addClass('top_nav__link--current');  //添加样式
	});
	/* 显示搜索结果 */
	$('.search_input__input').focus(function () {
		//$('.js_smartbox').show();
	});
	/* 搜索 */
	$('.search_input__btn').click(function () {
		$('.search_input__input').val();  //数据
		$('.search_history_item');  //增加历史记录
	});
	/* 登录 */
	$('.js_login').click(function () {

		//显示用户信息
		$('.popup_user').show();
	});
	/* 回到顶部 */
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var	isTop = true;

	//滚动条滚动
	$(window).scroll(function () {
		var top = document.documentElement.scrollTop || document.body.scrollTop;

		if (top >= clientHeight) {
			$('.js_btn_top').show();
		} else {
			$('.js_btn_top').hide();
		}

		if (!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	});
	$('.js_btn_top').click(function () {
		clearInterval(timer);

		timer = setInterval(function () {
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.ceil(top/6);//向上舍入

			document.documentElement.scrollTop = document.body.scrollTop = top - ispeed;

			isTop = true;
			if(top == 0){
				clearInterval(timer);
			}
		}, 30);
	});
});
