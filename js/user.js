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
	var pagesNum = 6;
	$scope.pages = [];
	for (var i = 0; i < pagesNum; i++) {
		$scope.pages.push(i);
	}
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
	var pagesNum = 6;
	$scope.pages = [];
	for (var i = 0; i < pagesNum; i++) {
		$scope.pages.push(i);
	}
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
	var pagesNum = 6;
	$scope.pages = [];
	for (var i = 0; i < pagesNum; i++) {
		$scope.pages.push(i);
	}
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
	var pagesNum = 6;
	$scope.pages = [];
	for (var i = 0; i < pagesNum; i++) {
		$scope.pages.push(i);
	}
});
