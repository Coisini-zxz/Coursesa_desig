var right1 = echarts.init(document.getElementById('l2'), "dark");

var ROOT_PATH =
  'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

var right1_option;

$.get(
  ROOT_PATH + '/data/asset/data/life-expectancy-table.json',
  function (_rawData) {
    run(_rawData);
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
    '英国（含北爱尔兰）'
  ]; //国家列表
  
  const datasetWithFilters = []; //数据集与过滤器
  
  const seriesList = []; //系列列表
  
  echarts.util.each(countries, function (country) {
    var datasetId = 
      'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples' +
      country;                                        //数据集id
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 }, //数据 起点 
            { dimension: 'Country', '=': country }
          ]
        }
      }
    });                                 //push数据
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: country,
      endLabel: {
        show: true,
        formatter: function (params) {
          return params.value[3] + ': ' + params.value[0];
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
    }); //push数据
  });
  option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    title: {
      text: '世界疫情发展 (2020.1.27-6.30)'
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
