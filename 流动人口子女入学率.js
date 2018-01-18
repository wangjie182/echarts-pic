var myChart7 = echarts.init(document.getElementById('op7'), 'dark');
option7 = {
    title: {
        text: '流动人口子女入学率',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['入学率'],
        right: '6%',
        top: '4%',
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2007', '2009', '2011', '2013', '2015', '2017']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel : {
                formatter: '{value} w'
            }
        }
    ],
    series: [
        {
            name: '入学率',
            type: 'line',
            data: [3.4,3.4,10,4,26,45.4],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' }
                ]
            },
        },
    ]
};
myChart7.setOption(option7);
