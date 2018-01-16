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
        var myChart5 = ec.init(document.getElementById('op5')); 

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

        option5 = {
            title: {
                text: '流动人口民族构成',//标题文本内容
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
                        name: "汉族",
                        value: 30,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "蒙古族",
                        value: 30,
                        itemStyle: createRandomItemStyle(),
            
                    },
                    {
                        name: "彝族",
                        value: 28,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "回族",
                        value: 25,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "维吾尔族",
                        value: 20,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "土家族",
                        value: 20,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "藏族",
                        value: 18,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "壮族",
                        value: 16,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "满族",
                        value: 15,
                        itemStyle: createRandomItemStyle(),
                    },
                    
                    {
                        name: "苗族",
                        value: 15,
                        itemStyle: createRandomItemStyle(),
                    },
                    {
                        name: "白旗族",
                        value: 13,
                        itemStyle: createRandomItemStyle(),
                    },
                ]
            }]
        };

        // 为echarts对象加载数据 
        myChart5.setOption(option5); 
    }
);
