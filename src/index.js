// 创建博客对象
var item = {};
// 使用富文本框
// CKEDITOR.replace('body');
// 获取字段的dom
var title = $('#title');
var type = $('#type');
var body = $('#body');
var labels = $('#labels');
function submit () {
	item.title = title.val();
	item.type = type.val();
	item.labels = labels.val().split(" ");
	item.body = body.val();
	item.date = Date();
	$.ajax({
		type: "POST",
		dataType: 'json',
		url: "http://localhost:3000/" + item.type,
		contentType: "application/json; charset=utf-8", 
		data: JSON.stringify(item), 
		success: function(msg){
			location.href = "localhost:8000/" + item.type;
		}
	});
}