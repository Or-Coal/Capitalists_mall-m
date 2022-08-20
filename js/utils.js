//表单序列化提取表单
function serialize(form) {
  var obj = {};
  var formDate = new FormData(form);
  for (var iterator of formDate) {
    var value = iterator[1].trim();
    if (value) {
      obj[iterator[0]] = value;
    }
  }
  return obj
}
// 获取路由参数---兼容IE
function query(key) {
  // 切除问号前面的字符
  var params = location.search.slice(1);
  // string => array
  var arr = params.split('&');
  // 遍历数组
  var result = {};
  arr.forEach(function (item) {
      var temp = item.split('=');
      result[temp[0]] = temp[1];
  });
  return result[key];
}

// 获取路由参数---IE不支持
function params(key) {
  return new URLSearchParams(location.search).get(key);
}
// 给所有ELement元素添加trigger方法
Element.prototype.trigger = function (eventName) {
  this.dispatchEvent(new Event(eventName));
}
