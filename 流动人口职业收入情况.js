
        var myChart3 = echarts.init(document.getElementById('op3'),'dark');
        var option3 = {
            title: {
                text: '流动人口职业收入情况',
            },
            legend: {
                bottom: '3%',
                right: '2%',
                data: ['企事业单位','其他']
            },
            series: [
                {
                    type: 'pie',
                    radius: ['20%', '50%'],
                    avoidLabelOverlap: false,
                    data: [
                        { name: '企事业单位', value: 25,
                    },
                        { name: '其他',value: 75, 
                    },
                    ]
                }
            ]
        };
        myChart3.setOption(option3);
    