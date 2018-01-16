
        // 基于准备好的dom，初始化echarts实例
        var myChart6 = echarts.init(document.getElementById('op6'));

        // 指定图表的配置项和数据
        var option6 = {
            title: {
                text: '流动人口民族宗教',//标题文本内容
                textStyle: {//设置标题的文本样式
                    color: '#ffffff'
                },
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
                name: '访问来源',
                type: 'pie',
                radius: '44%',
                roseType: 'angle',
                data: [
                    {
                        name: '天主教 30%', value: 30,
                        itemStyle: { normal: { color: 'rgb(116, 235, 32)' } }
                    },
                    {
                        name: '佛教 15%', value: 15,
                        itemStyle: { normal: { color: 'rgb(250, 175, 58)' } }
                    },
                    {
                        name: '基督教 12%', value: 12,
                        itemStyle: { normal: { color: 'rgb(218, 17, 63)' } }
                    },
                    {
                        name: '伊斯兰教 10%', value: 10,
                        itemStyle: { normal: { color: 'rgb(231, 61, 25)' } }
                    },
                    
                    {
                        name: '道教 10%', value: 10,
                        itemStyle: { normal: { color: 'rgb(254, 235, 34)' } }
                    },                    
                    {
                        name: '印度教 6%', value: 6,
                        itemStyle: { normal: { color: 'rgb(19, 168, 224)' } }
                    },
                    {
                        name: '其他 4%', value: 4,
                        itemStyle: { normal: { color: 'rgb(10, 173, 208)' } }
                    }
                ],
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgb(255, 255, 255)'
                        }
                    }
                }
            }]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart6.setOption(option6);
