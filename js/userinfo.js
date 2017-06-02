$('.form_date').datetimepicker({
	format: 'yyyy-MM-dd',
	weekStart: 1,
	todayBtn: 1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0
});

$('#userMessage li').click(function () {
	$(this).addClass('current').siblings().removeClass('current');
});

$('#submitBtn').click(function () {
	$.post(url, data, function () {
		var con = $('#submitResponse');
		if (con.children().length >= 1) {
			$('p').remove();
		}
		var p = $('<p></p>');
		p.text('表单提交成功！');
		p.css({
			color: '#FFA07A',
			fontSize: 15,
			textAlign: 'center',
			marginTop: 310
		});
		con.append(p);
	});
});
