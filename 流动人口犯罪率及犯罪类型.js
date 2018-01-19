var myChart4 = echarts.init(document.getElementById('op4'),'dark');

var option4 = {
    // color: ['#23cbe5',],
    title: {
        text: '流动人口犯罪率和犯罪类型',//标题文本内容
    },
    legend: {
        itemWidth: 20,
        right: 10,
        data: ['一案双查']
    },
    grid: {
        left: '7%',
        top: '12%',
        height: '66%',
        width: '90%',
    },
    xAxis: {
        type: 'category',
        data: ["放火罪",
            '破坏交通设施罪',
            '破坏交通工具罪',
            '抢劫',
            '强奸',
            '诈骗',
            '勒索',
            '伪造货币',
            '非法经营'],
        axisLabel: {                      //设置换行
            show: true,
            // interval: 1,
            formatter: function (params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 4;  //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }

                } else {
                    newParamsName = params;
                }
                return newParamsName
            },
        },
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value',
    },
    series: [

        {
            name: '一案双查',
            type: 'scatter',
            data: [
                ["放火罪", 22],
                ['破坏交通设施罪', 15],
                ['破坏交通工具罪', 13],
                ['抢劫', 4],
                ['强奸', 3],
                ['诈骗', 2],
                ['勒索', 4],
                ['伪造货币', 6],
                ['非法经营', 12]
            ],
            symbolSize: function (data) {
                return Math.sqrt(data[1]) / 0.22;
            },

        }

    ]
};

myChart4.setOption(option4);
