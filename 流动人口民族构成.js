
        var myChart5 = echarts.init(document.getElementById('op5'));
        // 指定图表的配置项和数据
        var option5 = {
            title: {
                text: '流动人口民族构成',//标题文本内容
                textStyle: {//设置标题的文本样式
                    color: '#ffffff'
                },
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
                name: '人口比例',
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
                        name: "汉族",
                        value: 30,
                    },
                    {
                        name: "蒙古族",
                        value: 30,
            
                    },
                    {
                        name: "彝族",
                        value: 28,
                    },
                    {
                        name: "回族",
                        value: 25,
                    },
                    {
                        name: "维吾尔族",
                        value: 20,
                    },
                    {
                        name: "土家族",
                        value: 20,
                    },
                    {
                        name: "藏族",
                        value: 18,
                    },
                    {
                        name: "壮族",
                        value: 16,
                    },
                    {
                        name: "满族",
                        value: 15,
                    },
                    
                    {
                        name: "苗族",
                        value: 15,
                    },
                    {
                        name: "白旗族",
                        value: 13,
                    },
                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart5.setOption(option5);

    