
var myChart9 = echarts.init(document.getElementById('op9'), 'dark');
// 指定图表的配置项和数据
var option9 = {
    title: {
        text: '流动人口数量及性别年变化',//标题文本内容
        textStyle: {//设置标题的文本样式
            color: '#ffffff'
        },
    },
    tooltip: {
        show: true
    },
    grid: {
        show: true,
        // left: '2%',
        right: '5%',
        bottom: '7%',
        height: '77%',
        width: '77%'
        // containLabel: true,
    },

    xAxis: {
        data: ['2011', '2012', '2013', '2014', '2015', '2016']
    },
    yAxis: {},
    legend: {
        itemWidth: 25,
        right: 6,
        top: '7%',
        data: ['女', '男', '流动人口总量', '常驻人口总量']
    },
    series: [
        {
            name: '女',
            type: 'bar',
            stack: '1',
            data: [45000, 58000, 40000, 58000, 60000, 58000]
        },
        {
            name: '男',
            type: 'bar',
            stack: '1',
            data: [40000, 47000, 40000, 52000, 56000, 50000]
        },
        
        {
            name: '流动人口总量', 
            type: 'line',
            data: [85000, 105000, 80000, 110000, 113000, 108000].map(function (val) {
                return val
            })
        },
        {
            name: '常驻人口总量',
            type: 'line',
            data: [116000, 125000, 118000, 123000, 132000, 140000].map(function (val) {
                return val
            })
        },

    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart9.setOption(option9);

