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
        var myChart5 = ec.init(document.getElementById('op5'), 'dark');

        // function createRandomItemStyle() {
        //     return {
        //         normal: {
        //             color: 'rgb('  [
        //                 Math.round(Math.random() * 252),
        //                 Math.round(Math.random() * 246),
        //                 Math.round(Math.random() * 126)
        //             ].join(',')  ')'
        //         }
        //     };
        // }

        option5 = {
            title: {
                text: '流动人口民族构成',//标题文本内容
                color: 'white',
            },
            tooltip: {
                show: true
            },
            backgroundColor: '#333',
            series: [{
                name: 'Google Trends',
                type: 'wordCloud',
                size: ['80%', '80%'],
                textRotation: [0, 0, 0, 0],
                textPadding: 5,
                autoSize: {
                    enable: true,
                    minSize: 16
                },
                data: [
                    {
                        name: "汉族",
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: '#dd6b66'
                            }
                        },
                    },
                    {
                        name: "蒙古族",
                        value: 30,
                        itemStyle: {
                            normal: {
                                color: '#759aa0'
                            }
                        },

                    },
                    {
                        name: "彝族",
                        value: 28,
                        itemStyle: {
                            normal: {
                                color: '#e69d87'
                            }
                        },
                    },
                    {
                        name: "回族",
                        value: 25,
                        itemStyle: {
                            normal: {
                                color: '#8dc1a9'
                            }
                        },
                    },
                    {
                        name: "维吾尔族",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: '#ea7e53'
                            }
                        },
                    },
                    {
                        name: "土家族",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: 'rgb(231, 61, 25)'
                            }
                        },
                    },
                    {
                        name: "藏族",
                        value: 18,
                        itemStyle: {
                            normal: {
                                color: '#eedd78'
                            }
                        },
                    },
                    {
                        name: "壮族",
                        value: 16,
                        itemStyle: {
                            normal: {
                                color: '#73a373'
                            }
                        },
                    },
                    {
                        name: "满族",
                        value: 15,
                        itemStyle: {
                            normal: {
                                color: '#73b9bc'
                            }
                        },
                    },

                    {
                        name: "苗族",
                        value: 15,
                        itemStyle: {
                            normal: {
                                color: '#7289ab'
                            }
                        },
                    },
                    {
                        name: "白旗族",
                        value: 13,
                        itemStyle: {
                            normal: {
                                color: '#91ca8c'
                            }
                        },
                    },
                ]
            }]
        };

        // 为echarts对象加载数据 
        myChart5.setOption(option5);
    }
);
