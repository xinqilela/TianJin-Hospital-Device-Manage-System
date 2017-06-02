(function () {
	//拖动滑块进行验证
	$(".bar1").slideToUnlock({
		text: '拖 动 滑 块 进 行 验 证',
		succText: 'ok',
		width: 330,
		handleColor: '#fff',
		progressColor: '#0C8D79'
	});
	//判断滑块是否通过验证
	var left;
	$("#valid").mouseover(function () {
		left = $(".slide-to-unlock-handle").css("left");
	});
	//注册
	$("#registBtn").click(function () {
		if (left !== "289px") return;
		$.post();
	});

})();
