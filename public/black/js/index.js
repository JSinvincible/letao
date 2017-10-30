      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.querySelector(".bar_left"));
      
              // 指定图表的配置项和数据
              var option = {
                  title: {
                    //   标题
                      text: '2017年注册人数'
                  },
                  tooltip: {},
                  legend: {
                    //   图例
                      data:['人数']
                  },
                  xAxis: {
                      data: ["A","B","C","D","E","F"]
                  },
                  yAxis: {},
                  series: [{
                      name: '人数',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20]
                  }]
              };
      
              // 使用刚指定的配置项和数据显示图表。
              myChart.setOption(option);

              var second =  echarts.init(document.querySelector(".bar_right"));

              var secondoption = {
                title : {
                    text: '热门品牌销售',
                    subtext: '2017年6月',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['耐克','阿迪','李宁','百伦','安踏']
                },
                series : [
                    {
                        name: '热门品牌销售',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'耐克'},
                            {value:310, name:'阿迪'},
                            {value:234, name:'李宁'},
                            {value:135, name:'百伦'},
                            {value:1548, name:'安踏'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            second.setOption(secondoption);