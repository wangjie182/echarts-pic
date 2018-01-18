
// 基于准备好的dom，初始化echarts实例
var myChart6 = echarts.init(document.getElementById('op6'),'dark');

// 指定图表的配置项和数据
var option6 = {
    title: {
        text: '流动人口民族宗教',//标题文本内容
        textStyle: {//设置标题的文本样式
            color: '#ffffff'
        },
    },
    grid: {
        // show: true,   //边框？？
        left: '1%',
        right: '1%',
        bottom: '1%',
        top: '1%',
        // containLabel: true,
    },

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '44%',
        roseType: 'angle',
        data: [
            {
                name: '天主教 30%', value: 30,

            },
            {
                name: '佛教 15%', value: 15,

            },
            {
                name: '基督教 12%', value: 12,
            },
            {
                name: '伊斯兰教 10%', value: 10,
            },

            {
                name: '道教 10%', value: 10,

            },
            {
                name: '印度教 6%', value: 6,

            },
            {
                name: '其他 4%', value: 4,

            }
        ],
    }]

};

// 使用刚指定的配置项和数据显示图表。
myChart6.setOption(option6);
