require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/wordCloud',    //字符云
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart8 = ec.init(document.getElementById('op8')); 

        function createRandomItemStyle() {
            return {
                normal: {
                    color: 'rgb(' + [
                        Math.round(Math.random() * 176),
                        Math.round(Math.random() * 146),
                        Math.round(Math.random() * 126)
                    ].join(',') + ')'
                }
            };
        }

        option8 = {
            title: {
                text: '流动人口来源地分布',//标题文本内容
                textStyle: {//设置标题的文本样式
                    color: '#ffffff'
                },
            },
            backgroundColor: 'rgba(30, 51, 94,0.8)',

            tooltip: {
                show: true
            },
            series: [{
                name: 'Google Trends',
                type: 'wordCloud',
                size: ['80%', '80%'],
                textRotation : [0, 0, 0, 0],
                textPadding: 5,
                autoSize: {
                    enable: true,
                    minSize: 16
                },
                data: [
                    {
                        name: "安徽",
                        value: 90,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "亳州",
                        value: 90,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "滁州",
                        value: 76,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "六安",
                        value: 55,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "淮北",
                        value: 40,
                    itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "扬州",
                        value: 20,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "徐州",
                        value: 20,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "枣庄",
                        value: 20,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "宿州",
                        value: 40,
                    itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "菏泽",
                        value: 15,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "蚌埠",
                        value: 28,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "芜湖",
                        value: 48,
                    itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "无锡",
                        value: 18,
                    itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "连云港",
                        value: 20,
                    itemStyle: createRandomItemStyle(),
                    },
                ]
            }]
        };

        // 为echarts对象加载数据 
        myChart8.setOption(option8); 
    }
);
