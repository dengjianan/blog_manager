// 创建博客对象
var item = {};
// 使用富文本框
var editor = CKEDITOR.replace( 'body' );
// 获取字段的dom
var title = $('#title');
var type = $('#type');
var body = $('#body');
var labels = $('#labels');
function submit () {
	item.title = title.val();
	item.type = type.val();
	item.labels = labels.val().split(" ");
	item.date = Date();
	item.body = editor.getData();
	$.ajax({
		type: "POST",
		dataType: 'json',
		url: "http://localhost:3000/" + item.type,
		contentType: "application/json; charset=utf-8", 
		data: JSON.stringify(item), 
		success: function(msg){
			alert('123');
		}
	});
}