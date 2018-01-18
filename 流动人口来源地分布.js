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

        option8 = {
            title: {
                text: '流动人口来源地分布',//标题文本内容
                textStyle: {//设置标题的文本样式
                    color: '#ffffff'
                },
            },
            backgroundColor: '#333',

            tooltip: {
                show: true
            },
            series: [{
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
                        itemStyle: {
                            normal: {
                                color: '#dd6b66'
                            }
                        },
                    },
                    {
                        name: "亳州",
                        value: 90,
                        itemStyle: {
                            normal: {
                                color: '#759aa0'
                            }
                        },
                    },
                    {
                        name: "滁州",
                        value: 76,
                        itemStyle: {
                            normal: {
                                color: '#e69d87'
                            }
                        },
                    },
                    {
                        name: "六安",
                        value: 55,
                        itemStyle: {
                            normal: {
                                color: '#dd6b66'
                            }
                        },
                    },
                    {
                        name: "淮北",
                        value: 40,
                    itemStyle: {
                            normal: {
                                color: '#8dc1a9'
                            }
                        },
                    },
                    {
                        name: "扬州",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: '#ea7e53'
                            }
                        },
                    },
                    {
                        name: "徐州",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: '#eedd78'
                            }
                        },
                    },
                    {
                        name: "枣庄",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: '#73a373'
                            }
                        },
                    },
                    {
                        name: "宿州",
                        value: 40,
                    itemStyle: {
                            normal: {
                                color: '#73b9bc'
                            }
                        },
                    },
                    {
                        name: "菏泽",
                        value: 15,
                        itemStyle: {
                            normal: {
                                color: '#7289ab'
                            }
                        },
                    },
                    {
                        name: "蚌埠",
                        value: 28,
                        itemStyle: {
                            normal: {
                                color: '#91ca8c'
                            }
                        },
                    },
                    {
                        name: "芜湖",
                        value: 48,
                    itemStyle: {
                            normal: {
                                color: '#dd6b66'
                            }
                        },
                    },
                    {
                        name: "无锡",
                        value: 18,
                    itemStyle: {
                            normal: {
                                color: '#f49f42'
                            }
                        },
                    },
                    {
                        name: "连云港",
                        value: 20,
                    itemStyle: {
                            normal: {
                                color: '#ea7e53'
                            }
                        },
                    },
                ]
            }]
        };

        // 为echarts对象加载数据 
        myChart8.setOption(option8); 
    }
);
