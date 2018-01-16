
        var myChart8 = echarts.init(document.getElementById('op8'));
        // 指定图表的配置项和数据
        var option8 = {
            title: {
                text: '流动人口来源地分布',//标题文本内容
                textStyle: {//设置标题的文本样式
                    color: '#ffffff'
                },
            },
            legend: {
                right: 10,
                data: ['TOP 30']
            },
            tooltip: {
                show: true
            },
            backgroundColor: 'rgba(30, 51, 94,0.8)',
            grid: {
                show: true,
                left: '1%',
                right: '1%',
                bottom: '1%',
                top: '1%',
                containLabel: true,
            },

            series: [{
                name: '分布地',
                type: 'wordCloud',
                gridSize: 2,
                sizeRange: [12, 50],
                rotationRange: [-90, 90],
                shape: 'pentagon',
                width: 600,
                height: 400,
                drawOutOfBound: true,
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [
                    {
                        name: "安徽",
                        value: 90,
                        itemStyle: {
                            normal: {
                                color: 'rgb(231, 61, 25)'
                            }
                        }
                    },
                    {
                        name: "亳州",
                        value: 90,
                        itemStyle: {
                            normal: {
                                color: 'rgb(250, 175, 58)'
                            }
                        }
                    },
                    {
                        name: "滁州",
                        value: 76,
                        itemStyle: {
                            normal: {
                                color: 'rgb(254, 235, 34)'
                            }
                        }
                    },
                    {
                        name: "六安",
                        value: 55,
                        itemStyle: {
                            normal: {
                                color: 'rgb(116, 235, 32)'
                            }
                        }
                    },
                    {
                        name: "淮北",
                        value: 40,
                        itemStyle: {
                            normal: {
                                color: 'rgb(218, 17, 63)'
                            }
                        }
                    },
                    {
                        name: "扬州",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: 'rgb(19, 168, 224)'
                            }
                        }
                    },
                    {
                        name: "徐州",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: 'rgb(10, 173, 208)'
                            }
                        }
                    },
                    {
                        name: "枣庄",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: 'rgb(250, 175, 58)'
                            }
                        }
                    },
                    {
                        name: "宿州",
                        value: 40,
                        itemStyle: {
                            normal: {
                                color: 'rgb(231, 61, 25)'
                            }
                        }
                    },
                    {
                        name: "菏泽",
                        value: 15,
                        itemStyle: {
                            normal: {
                                color: 'rgb(116, 235, 32)'
                            }
                        }
                    },
                    {
                        name: "蚌埠",
                        value: 28,
                        itemStyle: {
                            normal: {
                                color: 'rgb(254, 235, 34)'
                            }
                        }
                    },
                    {
                        name: "芜湖",
                        value: 48,
                        itemStyle: {
                            normal: {
                                color: 'rgb(210, 91, 94)'
                            }
                        }
                    },
                    {
                        name: "无锡",
                        value: 18,
                        itemStyle: {
                            normal: {
                                color: 'rgb(218, 17, 63)'
                            }
                        }
                    },
                    {
                        name: "连云港",
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: 'rgb(200, 33, 94)'
                            }
                        }
                    },
                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart8.setOption(option8);

    