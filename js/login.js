(function () {
	//登录角色设定
	$("#checkRole button").click(function () {
		$(this).addClass("current").
		siblings().removeClass("current");
	});
	//验证码部分
	var verifyCode = new GVerify("validCode");
	var length = 0;
	var res;
	$("#valid").keyup(function () {
		length = $(this).val().length;
		if (length == 4) {
			res = verifyCode.validate($(this).val());
			/*if (res) {
	alert("验证码正确");
} else {
	alert("验证码错误");
}*/
		}
	});
	//记住密码实现
	if ($.cookie("rememberPass") == "true") {
		$("#loginRemember").attr("checked", true);
		$("#loginName").val($.cookie("userName"));
		$("#loginPassword").val($.cookie("userPassword"));
	}

	function saveUserInfo() {
		if ($("#loginRemember").is(":checked") == true) {
			var userName = $("#loginName").val();
			var userPassword = $("#loginPassword").val();
			$.cookie("rememberPass", "true", {
				expires: 7
			});
			$.cookie("userName", userName, {
				expires: 7
			});
			$.cookie("userPassword", userPassword, {
				expires: 7
			});
		} else {
			$.cookie("rememberPass", "false", {
				expires: -1
			});
			$.cookie("userName", "", {
				expires: -1
			});
			$.cookie("userPassword", "", {
				expires: -1
			});
		}
	}
	//登录
	$("#loginBtn").click(function () {
		var userName = $("#loginName").val();
		var userPassword = $("#loginPassword").val();
		//保存cookie
		saveUserInfo();
		if ($("#common").hasClass("current")) {
			if (!res || !userName || !userPassword) return;
			$.post(); //向普通员工表提交
		} else if ($("#special").hasClass("current")) {
			if (!res || !userName || !userPassword) return;
			$.post(); //向管理员表提交
		}
	});
	//cookie被记录后直接登录
	if ($.cookie() != null) {
		if ($("#common").hasClass("current")) {
			$.post(); //向普通员工表提交
		} else if ($("#special").hasClass("current")) {
			$.post(); //向管理员表提交
		}
	}
})();
