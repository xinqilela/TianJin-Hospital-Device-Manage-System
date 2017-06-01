var userApp = angular.module('userApp', []);
userApp.controller("registController", function ($scope) {

});
//封装自定义指令函数
function myDirective(name, url) {
	userApp.directive(name, function () {
		return {
			restrict: 'A',
			templateUrl: url,
			replace: true
		};
	});
}
myDirective('userNav', 'userLogoNav.html');
myDirective('managerNav', 'managerLogoNav.html');
myDirective('footer', 'footer.html');
myDirective('managerFooter', 'managerFooter.html');
//设备页面数据
userApp.controller("deviceControler", function ($scope) {
	$scope.currentTime = new Date();
	$scope.devices = [{
		'id': '001',
		'name': '灭火器1',
		'provider': '天津公司',
		'img': 'img/p1.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '002',
		'name': '灭火器2',
		'provider': '天津公司',
		'img': 'img/p2.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '003',
		'name': '灭火器3',
		'provider': '天津公司',
		'img': 'img/p3.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '004',
		'name': '灭火器4',
		'provider': '天津公司',
		'img': 'img/p4.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '005',
		'name': '灭火器5',
		'provider': '天津公司',
		'img': 'img/p5.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '006',
		'name': '灭火器6',
		'provider': '天津公司',
		'img': 'img/p6.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '007',
		'name': '灭火器7',
		'provider': '天津公司',
		'img': 'img/p7.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '008',
		'name': '灭火器8',
		'provider': '天津公司',
		'img': 'img/p8.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '009',
		'name': '灭火器9',
		'provider': '天津公司',
		'img': 'img/p9.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '010',
		'name': '灭火器10',
		'provider': '天津公司',
		'img': 'img/p10.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '011',
		'name': '灭火器11',
		'provider': '天津公司',
		'img': 'img/p11.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '012',
		'name': '灭火器12',
		'provider': '天津公司',
		'img': 'img/p12.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '013',
		'name': '灭火器13',
		'provider': '天津公司',
		'img': 'img/p13.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}, {
		'id': '014',
		'name': '灭火器14',
		'provider': '天津公司',
		'img': 'img/p14.png',
		'producedate': '2010-01-01',
		'shelflife': '1',
		'office': '设备科',
		'repairtime': '2015-01-01',
		'interval': '1'
					}];
	//页数显示
	$scope.pages = 20; //一共有20页数据
	$scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
	$scope.pagesList = [];
	$scope.selPage = 1;
	//分页要repeat的数组
	for (var i = 0; i < $scope.newPages; i++) {
		$scope.pagesList.push(i + 1);
	}
	//打印当前选中页的索引
	$scope.selectPage = function (page) {

		if (page < 1 || page > $scope.pages) return;
		//最多显示分页数为5
		if (page > 2) {
			var newPageList = [];
			for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
				newPageList.push(i + 1);
			}
			$scope.pagesList = newPageList;
		}
		$scope.selPage = page;
		console.log("当前页：" + $scope.selPage);
	};

	//上一页
	$scope.previous = function () {
		$scope.selectPage($scope.selPage - 1);
	};
	//下一页
	$scope.next = function () {
		$scope.selectPage($scope.selPage + 1);
	};
});
//科室管理页面数据
userApp.controller('officeControler', function ($scope) {
	$scope.offices = [{
		'id': '001',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '002',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '003',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '004',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '005',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '006',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '007',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '008',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '009',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '010',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '011',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '012',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '013',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}, {
		'id': '014',
		'name': '设备科',
		'number': '20',
		'phone': '13132256511'
					}];
	//页数显示
	$scope.pages = 20; //一共有20页数据
	$scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
	$scope.pagesList = [];
	$scope.selPage = 1;
	//分页要repeat的数组
	for (var i = 0; i < $scope.newPages; i++) {
		$scope.pagesList.push(i + 1);
	}
	//打印当前选中页的索引
	$scope.selectPage = function (page) {

		if (page < 1 || page > $scope.pages) return;
		//最多显示分页数为5
		if (page > 2) {
			var newPageList = [];
			for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
				newPageList.push(i + 1);
			}
			$scope.pagesList = newPageList;
		}
		$scope.selPage = page;
		console.log("当前页：" + $scope.selPage);
	};

	//上一页
	$scope.previous = function () {
		$scope.selectPage($scope.selPage - 1);
	};
	//下一页
	$scope.next = function () {
		$scope.selectPage($scope.selPage + 1);
	};
});
userApp.controller('userControler', function ($scope) {
	$scope.users = [{
		'id': '001',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '002',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '003',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '004',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '005',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '006',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '007',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '008',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '009',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '0010',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '0011',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '0012',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '0013',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}, {
		'id': '0014',
		'username': 'zhangsan',
		'userpassword': '123456',
		'name': '张三',
		'sex': '男',
		'tel': '13132256666',
		'email': '111@163.com',
		'birthday': '2015-01-01',
		'img': 'img/p1.png',
		'officeid': 'o001',
		'role': '1'
					}];
	//页数显示
	$scope.pages = 20; //一共有20页数据
	$scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
	$scope.pagesList = [];
	$scope.selPage = 1;
	//分页要repeat的数组
	for (var i = 0; i < $scope.newPages; i++) {
		$scope.pagesList.push(i + 1);
	}
	//打印当前选中页的索引
	$scope.selectPage = function (page) {

		if (page < 1 || page > $scope.pages) return;
		//最多显示分页数为5
		if (page > 2) {
			var newPageList = [];
			for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
				newPageList.push(i + 1);
			}
			$scope.pagesList = newPageList;
		}
		$scope.selPage = page;
		console.log("当前页：" + $scope.selPage);
	};

	//上一页
	$scope.previous = function () {
		$scope.selectPage($scope.selPage - 1);
	};
	//下一页
	$scope.next = function () {
		$scope.selectPage($scope.selPage + 1);
	};
});
//供应商数据
userApp.controller('providerControler', function ($scope) {
	$scope.providers = [{
		'id': '001',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '002',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '003',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '004',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '005',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '006',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '007',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '008',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '009',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '0010',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '0011',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '0012',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '0013',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}, {
		'id': '0014',
		'name': '天津公司',
		'licensenum': 'lic001',
		'businessnum': 'bus001',
		'img': 'img/p1.png'
	}];
	//页数显示
	$scope.pages = 20; //一共有20页数据
	$scope.newPages = $scope.pages > 5 ? 5 : $scope.pages;
	$scope.pagesList = [];
	$scope.selPage = 1;
	//分页要repeat的数组
	for (var i = 0; i < $scope.newPages; i++) {
		$scope.pagesList.push(i + 1);
	}
	//打印当前选中页的索引
	$scope.selectPage = function (page) {

		if (page < 1 || page > $scope.pages) return;
		//最多显示分页数为5
		if (page > 2) {
			var newPageList = [];
			for (var i = (page - 3); i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)); i++) {
				newPageList.push(i + 1);
			}
			$scope.pagesList = newPageList;
		}
		$scope.selPage = page;
		console.log("当前页：" + $scope.selPage);
	};

	//上一页
	$scope.previous = function () {
		$scope.selectPage($scope.selPage - 1);
	};
	//下一页
	$scope.next = function () {
		$scope.selectPage($scope.selPage + 1);
	};
});
