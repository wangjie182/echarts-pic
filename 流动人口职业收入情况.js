
        var myChart3 = echarts.init(document.getElementById('op3'));
        var option3 = {
            title: {
                text: '流动人口职业收入情况',
                textStyle: {//设置标题的文本样式
                    color: '#ffffff'
                },
            },
            backgroundColor: 'rgba(30, 51, 94,0.8)',
            series: [
                {
                    type: 'pie',
                    radius: ['20%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgb(255, 255, 255)'
                            }
                        }
                    },
                    data: [
                        { value: 25, name: '企事业单位 25%',
                        itemStyle: {
                            normal: {
                                color: 'rgb(255,255,22)'
                            }
                        } },
                        { value: 75, name: '其他',
                        itemStyle: {
                            normal: {
                                color: 'rgb(82, 136, 200)'
                            }
                        } },
                    ]
                }
            ]
        };
        myChart3.setOption(option3);
    