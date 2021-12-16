var myChart = echarts.init(document.getElementById('r1'));

var option;

$.get(
	'../static/json/r1.json',
	function(_rawData) {
		run(_rawData);
		// console.log(_rawData)
	}
);

function run(_rawData) {
	// var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
	const countries = [
		'澳大利亚',
		'巴西',
		'俄罗斯',
		'法国',
		'韩国',
		'加拿大',
		'美国',
		'日本',
		'英国（含北爱尔兰）'
	];

	const datasetWithFilters = [];
	const seriesList = [];
	echarts.util.each(countries, function(country) {
		var datasetId = 'dataset_' + country;
		datasetWithFilters.push({
			id: datasetId,
			fromDatasetId: 'dataset_raw',
			transform: {
				type: 'filter',
				config: {
					and: [{
							dimension: 'Year',
							gte: 20200127
						},
						{
							dimension: 'Country',
							'=': country
						}
					]
				}
			}
		});
		seriesList.push({
			type: 'line',
			datasetId: datasetId,
			showSymbol: false,
			name: country,
			endLabel: {
				show: true,
				formatter: function(params) {
					return params.value[1] + ': ' + params.value[0];
				}
			},
			labelLayout: {
				moveOverlap: 'shiftY'
			},
			emphasis: {
				focus: 'series'
			},
			encode: {
				x: 'Year',
				y: 'Income',
				label: ['Country', 'Income'],
				itemName: 'Year',
				tooltip: ['Income']
			}
		});
	});
	option = {
		animationDuration: 10000,
		dataset: [{
				id: 'dataset_raw',
				source: _rawData
			},
			...datasetWithFilters
		],
		title: {
			text: '其他国家疫情趋势(例)'
		},
		tooltip: {
			order: 'valueDesc',
			trigger: 'axis'
		},
		xAxis: {
			type: 'category',
			nameLocation: 'middle'
		},
		yAxis: {
			name: 'Number'
		},
		grid: {
			right: 140
		},
		series: seriesList
	};
	myChart.setOption(option);
}

option && myChart.setOption(option);
