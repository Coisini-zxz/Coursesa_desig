function get_l1_data() {
	$.ajax({
		url: "/r2",
		success: function(data) {
			console.log((data))
		},
		error: function(xhr, type, errorThrown) {

		}
	})
}



function getWorldMap(data) {
	var myChart = echarts.init(
		document.getElementById('r2'), 'white', {
			renderer: 'canvas'
		});

	let nameComparison = {
		"阿尔巴尼亚": "Albania",
		"阿尔及利亚": "Algeria",
		"阿富汗": "Afghanistan",
		"阿根廷": "Argentina",
		"阿联酋": "The United Arab Emirates",
		"阿鲁巴": "Aruba",
		"阿曼": "Oman",
		"阿塞拜疆": "Azerbaijan",
		"埃及": "Egypt",
		"埃塞俄比亚": "Ethiopia",
		"爱尔兰": "Ireland",
		"爱沙尼亚": "Estonia",
		"安道尔": "Andorra",
		"安哥拉": "Angola",
		"安圭拉": "Anguilla",
		"安提瓜和巴布达": "Antigua and Barbuda",
		"奥地利": "Austria",
		"澳大利亚": "Australia",
		"巴巴多斯": "Barbados",
		"巴布亚新几内亚": "papua new guinea",
		"巴哈马": "Bahamas",
		"巴基斯坦": "Pakistan",
		"巴拉圭": "Paraguay",
		"巴勒斯坦": "Palestine",
		"巴林": "Bahrain",
		"巴拿马": "Panama",
		"巴西": "Brazil",
		"白俄罗斯": "Belarus",
		"百慕大": "Bermuda",
		"保加利亚": "Bulgaria",
		"北爱尔兰": "Northern Ireland",
		"北马里亚纳群岛联邦": "Commonwealth of the Northern Mariana Islands",
		"北马其顿": "Northern Macedonia",
		"贝宁": "Benin",
		"比利时": "Belgium",
		"冰岛": "Iceland",
		"波多黎各": "Puerto Rico",
		"波黑": "Bosnia and Herzegovina",
		"波兰": "poland",
		"玻利维亚": "bolivia",
		"伯利兹": "Belize",
		"博茨瓦纳": "botswana",
		"不丹": "Bhutan",
		"布基纳法索": "burkina faso",
		"布隆迪共和国": "Republic of Burundi",
		"赤道几内亚": "Equatorial Guinea",
		"大不列颠及北爱尔兰联合王国": "United Kingdom of Great Britain and Northern Ireland",
		"丹麦": "Denmark",
		"德国": "Germany",
		"东帝汶": "Timor-Leste",
		"多哥": "Togo",
		"多米尼加": "Dominican",
		"多米尼克": "dominica",
		"俄罗斯": "Russia",
		"厄瓜多尔": "Ecuador",
		"厄立特里亚": "Eritrea",
		"法国": "France",
		"法罗群岛": "Faroe Islands",
		"法属波利尼西亚": "French Polynesia",
		"法属圭亚那": "French Guiana",
		"梵蒂冈": "vatican",
		"菲律宾": "the Philippines",
		"斐济": "Fiji",
		"芬兰": "Finland",
		"佛得角": "Cape Verde",
		"福克兰群岛": "Falkland Islands",
		"冈比亚": "Gambia",
		"刚果（布）": "Congo (Brazzaville)",
		"刚果（金）": "Congo (DRC)",
		"哥伦比亚": "Columbia",
		"哥斯达黎加": "Costa Rica",
		"格林那达": "Grinnada",
		"格陵兰": "Greenland",
		"格鲁吉亚": "Georgia",
		"根西岛": "Guernsey",
		"古巴": "Cuba",
		"瓜德罗普岛": "Guadeloupe",
		"关岛": "Guam",
		"圭亚那": "Guyana",
		"哈萨克斯坦": "Kazakhstan",
		"海地": "Haiti",
		"韩国": "the republic of korea",
		"荷兰": "Netherlands",
		"荷兰加勒比地区": "Netherlands Caribbean",
		"荷属圣马丁": "Sint Maarten",
		"黑山": "Montenegro",
		"洪都拉斯": "Honduras",
		"吉布提": "Djibouti",
		"吉尔吉斯斯坦": "Kyrgyzstan",
		"几内亚": "Guinea",
		"几内亚比绍": "Guinea-Bissau",
		"加拿大": "Canada",
		"加纳": "Ghana",
		"加蓬": "Gabon",
		"柬埔寨": "Cambodia",
		"捷克": "Czech Republic",
		"津巴布韦": "zimbabwe",
		"喀麦隆": "Cameroon",
		"卡塔尔": "Qatar",
		"开曼群岛": "Cayman Islands",
		"科摩罗": "Comoros",
		"科索沃": "Kosovo",
		"科特迪瓦": "Cote d'Ivoire",
		"科威特": "Kuwait",
		"克罗地亚": "Croatia",
		"肯尼亚": "Kenya",
		"库拉索岛": "Cura ç Ao",
		"拉脱维亚": "Latvia",
		"莱索托": "Lesotho",
		"老挝": "Laos",
		"黎巴嫩": "Lebanon",
		"立陶宛": "Lithuania",
		"利比里亚": "Liberia",
		"利比亚": "Libya",
		"列支敦士登": "Liechtenstein",
		"留尼汪": "Reunion",
		"留尼旺": "Reunion",
		"卢森堡": "Luxembourg",
		"卢旺达": "Rwanda",
		"罗马尼亚": "Romania",
		"马达加斯加": "Madagascar",
		"马恩岛": "Isle of man",
		"马尔代夫": "Maldives",
		"马耳他": "Malta",
		"马拉维": "Malawi",
		"马来西亚": "Malaysia",
		"马里": "Mali",
		"马提尼克": "Martinique",
		"马约特": "Mayotte",
		"毛里求斯": "mauritius",
		"毛里塔尼亚": "Mauritania",
		"美国": "U.S.A",
		"美属维尔京群岛": "United States Virgin Islands",
		"蒙古": "Mongolia",
		"蒙特塞拉特": "Montserrat",
		"孟加拉国": "The People's Republic of Bangladesh",
		"秘鲁": "Peru",
		"缅甸": "Myanmar",
		"摩尔多瓦": "Moldova",
		"摩洛哥": "Morocco",
		"摩纳哥": "Monaco",
		"莫桑比克": "Mozambique",
		"墨西哥": "Mexico",
		"纳米比亚": "Namibia",
		"南非": "South Africa",
		"南苏丹": "South Sudan",
		"尼泊尔": "Nepal",
		"尼加拉瓜": "Nicaragua",
		"尼日尔": "Niger",
		"尼日利亚": "Nigeria",
		"挪威": "Norway",
		"葡萄牙": "Portugal",
		"日本": "Japan",
		"瑞典": "Sweden",
		"瑞士": "Switzerland",
		"萨尔瓦多": "El Salvador",
		"塞尔维亚": "Serbia",
		"塞拉利昂": "sierra leone",
		"塞内加尔": "Senegal",
		"塞浦路斯": "Cyprus",
		"塞舌尔": "Seychelles",
		"沙特阿拉伯": "Saudi Arabia",
		"圣巴泰勒米": "San bartelemi",
		"圣巴泰勒米岛": "San bartrami Island",
		"圣多美和普林西比": "Sao Tome and Principe",
		"圣卢西亚": "Saint Lucia",
		"圣马丁岛": "St Martin Island",
		"圣马力诺": "San Marino",
		"圣皮埃尔和密克隆群岛": "Saint Pierre and Miquelon Islands",
		"圣其茨和尼维斯": "Saint Kitts and Nevis",
		"圣文森特和格林纳丁斯": "Saint Vincent and the Grenadines",
		"斯里兰卡": "Sri Lanka",
		"斯洛伐克": "Slovakia",
		"斯洛文尼亚": "Slovenia",
		"斯威士兰": "Eswatini",
		"苏丹": "Sudan",
		"苏里南": "Suriname",
		"索马里": "Somalia",
		"塔吉克斯坦": "Tajikistan",
		"泰国": "Thailand",
		"坦桑尼亚": "Tanzania",
		"特克斯和凯科斯群岛": "Turks and Caicos Islands",
		"特立尼达和多巴哥": "Trinidad and Tobago",
		"突尼斯": "Tunisia",
		"土耳其": "turkey",
		"危地马拉": "Guatemala",
		"委内瑞拉": "Venezuela",
		"文莱": "Brunei",
		"乌干达": "Uganda",
		"乌克兰": "Ukraine",
		"乌拉圭": "Uruguay",
		"乌兹别克斯坦": "Uzbekistan",
		"西班牙": "Spain",
		"希腊": "Greece",
		"新加坡": "Singapore",
		"新喀里多尼亚": "New Caledonia",
		"新西兰": "New Zealand",
		"匈牙利": "Hungary",
		"叙利亚": "Syria",
		"牙买加": "Jamaica",
		"亚美尼亚": "Armenia",
		"也门共和国": "Republic of Yemen",
		"伊拉克": "Iraq",
		"伊朗": "Iran",
		"以色列": "Israel",
		"意大利": "Italy",
		"印度": "India",
		"印度尼西亚": "Indonesia",
		"英国": "britain",
		"英国（含北爱尔兰）": "UK (including Northern Ireland)",
		"英属维尔京群岛": "British Virgin Islands",
		"约旦": "Jordan",
		"越南": "Vietnam?",
		"赞比亚共和国": "Republic of Zambia",
		"泽西岛": "Jersey",
		"乍得": "Chad",
		"直布罗陀": "Gibraltar",
		"至尊公主邮轮": "Supreme Princess Cruise",
		"智利": "Chile",
		"中非共和国": "Central African Republic",
		"钻石公主号邮轮": "diamond princess"
	};
	// var option代表定义一个名为option的变量，后面花括号里的代表我们需要作图的参数设置
	var option = {
		// 默认的颜色数组 （如果不明确设置每个数据项的颜色，则会采用默认的数组
		// 此处的颜色为十六进制表示，也可以使用rgb来表示。简单地理解就是一串字符就代表一个颜色，挑选喜欢的颜色可以自行搜索颜色
		//"color": ["#ac6767","#1d953f","#6950a1","#918597"],
		title: {
			text: '\n\n全球地区累计确诊分布',
			left: 'center',
			textStyle: {
				fontSize: 27,
				color: 'black'
			},
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		visualMap: { //左侧小导航图标
			show: true,
			x: 'left',
			y: 'bottom',
			textStyle: {
				fontSize: 15,
			},
			splitList: [{
					start: 1,
					end: 9
				},
				{
					start: 10,
					end: 99
				},
				{
					start: 100,
					end: 999
				},
				{
					start: 1000,
					end: 9999
				},
				{
					start: 10000,
					end: 99999
				},
				{
					start: 100000,
					end: 999999
				},
				{
					start: 1000000,
					end: 9999999
				},
				{
					start: 10000000
				}
			],

			color: ['#2F0000', '#4D0000', '#600000', '#750000', '#930000', '#AE0000', '#CE0000', '#FF9797']
		},
		tooltip: { // 鼠标悬浮，单击产生的效果（在网页上可以动态显示）
			show: true,
			trigger: "item",
			triggerOn: "mousemove|click",
			axisPointer: {
				type: "line"
			},
			textStyle: {
				"fontSize": 14
			},
			"borderWidth": 0
		},

		series: [{
			// 图标类型为 地图
			type: 'map',
			name: '累计确诊人数',
			nameMap: nameComparison,
			roam: false, //禁用拖动和缩放 
			label: {
				show: false,
				position: "top",
				margin: 8
			},
			mapType: 'world', // 地图类型为 世界地图
			// data里的每一个{}中，是一项数据整体，标明了该项数据的名称，值，以及颜色等参数。注意：此处的字符串需要加双引号""(输入法切换至英文状态)


			"zoom": 1,
			// 去除各个国家上的小红点
			showLegendSymbol: false,
			itemStyle: { //图形样式
				normal: {
					borderWidth: .3, //区域边框宽度
					borderColor: '#009fe8', //区域边框颜色
					areaColor: '#ffefd5', //区域颜色
				},
				emphasis: { //鼠标滑过地图高亮的相关设置
					borderWidth: .5,
					borderColor: '#4b0082',
					areaColor: '#fff',
				}
			},
			data: [{
				name: '中国',
				value: chinaConfirm
			}], //数据  ***关键***
		}],
	};
	//世界个国家数据注入
	var countries = data;
	for () {
		console.log(country);
		option.series[0].data.push({
			name: country.name,
			value: country.confirm
		})
	}

	myChart.setOption(option);
}


get_l1_data()
setInterval(get_l1_data, 60000)