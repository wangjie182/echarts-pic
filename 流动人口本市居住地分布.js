var myChart = echarts.init(document.getElementById('map'), 'dark');
var myData = [

    { name: '阜阳生态乐园', value: [115.7968686776, 32.9380258656, 10000] },
    { name: '临朐县', value: [118.5494842526, 36.5184184965, 4000] },
    { name: '阜阳市', value: [115.8213690722, 32.8959741345, 28000] },
    { name: '阜阳长途汽车中心站', value: [115.8369497108, 32.8844111871, 32023] },
];

myChart.setOption({
    bmap: {
        center: [115.83937168119307, 32.89847058099075],//中心坐标位置
        zoom: 14,//地图初始缩放比例
        roam: true,//开启缩放比例
        mapStyle: {//地图自定义样式
            styleJson: [
                {
                    'featureType': 'land',     //调整土地颜色
                    'elementType': 'geometry',
                    // 'stylers': {
                    //           'color': '#081734'
                    // }
                },
                {
                    'featureType': 'building',   //调整建筑物颜色
                    'elementType': 'geometry',
                    // 'stylers': {
                    //           'color': '#04406F'
                    // }
                },
                {
                    'featureType': 'building',   //调整建筑物标签是否可视
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'highway',     //调整高速道路颜色
                    'elementType': 'geometry',
                    // 'stylers': {
                    // 'color': '#015B99'
                    // }
                },
                {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'arterial',   //调整一些干道颜色
                    'elementType': 'geometry',
                    // 'stylers': {
                    // 'color':'#003051'
                    // }
                },
                {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    // 'stylers': {
                    //           'color': '#044161'
                    // }
                },
                {
                    'featureType': 'subway',    //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    // 'stylers': {
                    // 'color': '#003051'
                    // }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'geometry',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'all',     //调整所有的标签的边缘颜色
                    'elementType': 'labels.text.stroke',
                    // 'stylers': {
                    //           'color': '#313131'
                    // }
                },
                {
                    'featureType': 'all',     //调整所有标签的填充颜色
                    'elementType': 'labels.text.fill',
                    // 'stylers': {
                    //           'color': '#FFFFFF'
                    // }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'geometry',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'local',
                    'elementType': 'labels',
                    'stylers': {
                        // 'visibility': 'off'
                    }
                },
                {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    // 'stylers': {
                    //           'lightness': -65
                    // }
                },
                {
                    'featureType': 'railway',
                    'elementType': 'all',
                    // 'stylers': {
                    //           'lightness': -40
                    // }
                },
                {
                    'featureType': 'boundary',
                    'elementType': 'geometry',
                    // 'stylers': {
                    //           'color': '#8b8787',
                    //           'weight': '1',
                    //           'lightness': -29
                    // }
                }]
        }
    },
    visualMap: {	// 视觉映射组件
        type: 'continuous',
        min: 10000,
        max: 50000,
        calculable: true,
        // inRange: {
        //     color: ['#50a3ba', '#eac736', '#d94e5d']
        // },
        // textStyle: {
        //     color: '#fff'
        // }
    },

    series: [
        {
            name: '人口数量',
            type: 'scatter',
            coordinateSystem: 'bmap', // 坐标系使用bmap
            data: myData,
           
        }

    ],


});

//按需添加

// var bmap = myChart.getModel().getComponent('bmap').getBMap();//获取百度地图实例
// bmap.addControl(new BMap.MapTypeControl());
// bmap.addControl(new BMap.NavigationControl()); // 缩放控件
// bmap.addControl(new BMap.ScaleControl()); // 比例尺