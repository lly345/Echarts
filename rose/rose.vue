<template>
  <div :id="Pid" style="width:95%;height:95%"></div>
</template>

<script>
import echarts from "echarts";
const ColorList = [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3"
]

export default {
  name: "rose",
  props: {
    Pid: {
      type: String,
      default: function() {
        return "rosebox";
      }
    },
    titles: {
      type: Array,
      default: function() {
        return [];
      }
    },
    Pname: {
      type: Array,
      default: function() {
        return ["记录数", "总数值"];
      }
    },
    pieOption: {
      type: Array,
      default: function() {
        return ["直接访问", "邮件营销"];
      }
    },
    pieOpinionData: {
      type: Array,
      default: function() {
        return [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" }
        ];
      }
    },
    pieOpinionData2: {
      type: Array,
      default: function() {
        return [
          { value: 325, name: "直接访问" },
          { value: 310, name: "邮件营销" }
        ];
      }
    }
  },
  data() {
    return {
      charts: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPie(this.Pid);
    });
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: [
          {
            subtext: this.titles[0],
            left: "24%",
            textAlign: "center",
            subtextStyle: {
              //副标题文本样式{"color": "#aaa"}
              color: "#1e87f0"
            }
          },
          {
            subtext: this.titles[1],
            left: "74%",
            textAlign: "center",
            subtextStyle: {
              color: "#1e87f0"
            }
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: this.pieOption
        },
        calculable: true,
        series: [
          {
            name: this.Pname[0], //第一个饼图的title
            type: "pie",
            radius: "60%",
            center: ["25%", "48%"], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(30, 144, 255，0.5)"
              },
              color: function(params) {
                var colorList = ColorList; //自定义颜色
                return colorList[params.dataIndex];
              }
            },
            data: this.pieOpinionData,
            labelLine: {
              // 设置值域的那指向线
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              // 设置值域的标签
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                formatter: "{d}%",
                fontSize: 10 //图上文本标签文字的字体大小
              }
            }
          },
          {
            name: this.Pname[1], //第二个饼图的title
            type: "pie",
            radius: "60%",
            center: ["75%", "48%"], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            // itemStyle 设置饼状图扇形区域样式
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(30, 144, 255，0.5)"
              },
              color: function(params) {
                //自定义颜色
                var colorList = ColorList;
                return colorList[params.dataIndex];
              }
            },
            data: this.pieOpinionData2,
            // 设置值域的那指向线
            labelLine: {
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            // 设置值域的标签
            label: {
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                formatter: "{d}%",
                fontSize: 10 //图上文本标签文字的字体大小
              }
            }
          }
        ]
      });
    }
  },
  destroyed() {
    this.charts = null;
  }
};
</script>
<style>
</style>