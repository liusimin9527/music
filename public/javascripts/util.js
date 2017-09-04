var EventUtil = {
	/**
	 * 
	 * @param {[type]} element [description]
	 * @param {[type]} type    [description]
	 * @param {[type]} handler [description]
	 */
	addHandler: function (element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (window.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	}
};

var AjaxUtil = {
  /**
   * ajax中的get请求
   * @param  {[type]}   url      [description]
   * @param  {Function} callback [回调函数]
   * @return {[type]}            [description]
   */
  get: function (url, callback) {
    var xhr = null;

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();                    //其它浏览器
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  //IE5、IE6
		}

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        //callback(JSON.parse(xhr.responseText));
        callback();
      }
    };

    xhr.open('get', url);
    xhr.send(null);
  },

  /**
   * ajax中的post请求
   * @param  {[type]}   url      [description]
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [回调函数]
   * @return {[type]}            [description]
   */
  post: function (url, data,callback) {
    var xhr = null;

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();                    //其它浏览器
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  //IE5、IE6
		}

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('post', url);
    xhr.setRequestHeader("Content-Type", "application/x-www--form-urlencoded");
    xhr.send(data);
  }
};