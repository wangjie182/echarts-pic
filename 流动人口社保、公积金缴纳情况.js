
var myChart2 = echarts.init(document.getElementById('op2'), 'dark');
var option2 = {
    title: {
        text: '流动人口社保、公积金缴纳情况',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['社保', '公积金'],
        right: '6%',
        top: '10%',
    },
    grid: {
        left: '10%',
        top: '10%',
        height: '75%',
        width: '85%',
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },//去除网格线
        boundaryGap: false,
        data: ['2007', '2009', '2011', '2013', '2015', '2017']
    },
    yAxis: {
        type: 'value',
        splitLine: { show: false },//去除网格线
        axisLabel: {
            formatter: '{value} %'
        },
        boundaryGap: false,//y轴从0开始
    },
    series: [
        {
            name: '社保',
            type: 'line',
            data: [2, 6, 3, 12, 5, 25, 30],
            symbol: 'rect',
        },
        {
            name: '公积金',
            type: 'line',
            data: [6, 3, 12, 24, 10, 30, 35],
            symbol: 'rect',//折线小圆点
        }
    ]
};
myChart2.setOption(option2);
