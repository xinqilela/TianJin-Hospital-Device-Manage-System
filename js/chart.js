//
setTimeout(function () {
	var cur = $('header ul li:eq(1)');
	cur.addClass('active');
}, 200);
//
var chart11;
var chart22;
if (chart11) {
	chart11.clear();
}
if (chart22) {
	chart22.clear();
}
chart11 = AmCharts.makeChart("chart1", {
	type: "serial", //图表类型
	theme: "light", //图表主题
	//数据源
	dataProvider: [{
		"office": "设备科",
		"numbers": 23,
		"outRepair": 18
			}, {
		"office": "住院科",
		"numbers": 26,
		"outRepair": 22
			}, {
		"office": "人事科",
		"numbers": 30,
		"outRepair": 23
			}, {
		"office": "精神科",
		"numbers": 29,
		"outRepair": 25
			}, {
		"office": "中医科",
		"numbers": 24,
		"outRepair": 20
			}],
	//用于分类轴的值的字段的名称
	categoryField: "office",
	//动画的持续时间，以秒为单位
	startDuration: 1,
	//图表创建类轴本身,如果要更改某些属性，则应从图表中获取此轴并将属性设置为此对象
	categoryAxis: {
		gridPosition: "start" //指定网格线是否放置在单元格的中心或单元格的开头。可能的值是：“开始”和“中间”这个设置不工作，如果parsedates设置为true。
	},
	//值轴数组。图自动创建一个值轴，所以如果只需要一个值轴，就不需要创建它。
	/*valueAxes: [{ title: "各科室报警设备" //轴线标题 }],*/
	//属于此图表的图形数组
	graphs: [{
		type: "column", //图的类型。可能的值是：“行”、“列”、“步”、“smoothedline”、“烛台”、“OHLC”。XY和雷达图只能显示“线”型图。
		title: "各科室报警设备数量", //图的标题
		valueField: "numbers", //dataProvider中字段值的名字
		lineAlpha: 0, //行（或列边框）的不透明度。值范围为0 - 1
		//填充不透明度。复数形式用于保存与我们的Flex图表相同的属性名称。Flex图表可以接受数组来生成渐变。虽然可以在这里设置数组，但仅使用此数组的第一个值。
		fillAlphas: 0.8,
		//气球文本。您可以使用标签[[value]], [[description]], [[percents]], [[open]], [[category]]或任何其他字段名称从您的数据提供者。HTML标签也可以使用。
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
			}, {
		type: "line",
		title: "已过检修时间的设备数量",
		valueField: "outRepair",
		lineThickness: 2, //指定图形行（或边框）的粗细
		fillAlphas: 0,
		//子弹类型。可能的值是："none", "round", "square", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "bubble", "diamond", "xError", "yError" and "custom".
		bullet: "round",
		balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
			}],
	//图表图例
	legend: {
		/*
		图例标记可以镜像图形的设置，在图形本身中显示一行和一个真实的子弹。
		如果要启用此功能，请将此属性设置为true。注意，如果你在dataProvider集图的颜色，他们将不会反映在标记。
		*/
		useGraphSettings: true
	}
});
chart22 = AmCharts.makeChart("chart2", {
	type: "pie",
	theme: 'light',
	dataProvider: [{
		"deviceName": "病床",
		"medicalNumbers": 16
				}, {
		"deviceName": "氧气瓶",
		"medicalNumbers": 18
				}, {
		"deviceName": "手术台",
		"medicalNumbers": 20
				}, {
		"deviceName": "b超机",
		"medicalNumbers": 30
				}, {
		"deviceName": "显微镜",
		"medicalNumbers": 50
				}, {
		"deviceName": "心电图机",
		"medicalNumbers": 10
				}, {
		"deviceName": "高压氧",
		"medicalNumbers": 5
				}],
	//这场图的dataProvider持有切片的名称
	titleField: "deviceName",
	//
	valueField: "medicalNumbers",
	balloonText: "[[title]]<br><b>[[value]]</b> ([[percents]]%)",
	legend: {
		align: "center", //图例条目对齐。可能的值是：“左”，“中”，“右”。
		markerType: "circle" //图例标记（键）的形状。可能的值是：方、圆、菱形、triangleup，triangledown，triangleleft，triangledown，泡沫，线，没有。
	}
});
