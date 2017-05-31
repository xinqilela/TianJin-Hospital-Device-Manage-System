(function () {
	//登录角色设定
	$("#checkRole button").click(function () {
		$(this).addClass("current").
		siblings().removeClass("current");
	});
	//验证码部分
	var verifyCode = new GVerify("validCode");
	var length = 0;
	$("#valid").keyup(function () {
		length = $(this).val().length;
		if (length == 4) {
			var res = verifyCode.validate($(this).val());
			if (res) {
				alert("验证码正确");
			} else {
				alert("验证码错误");
			}
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
		//保存cookie
		saveUserInfo();
	});

})();
