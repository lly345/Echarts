<template>
  <div :id="this.pid" :style="pieStyle"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "piep",
  props: {
    subtext: {
      type: String,
      default: function() {
        return this.$t("acceptIndex.Demonstration");
      }
    },
    pname: {
      type: String,
      default: function() {
        return this.$t("acceptIndex.Diff");
      }
    },
    pid: {
      type: String,
      default: function() {
        return "pieReport";
      }
    },
    pieStyle: {
      type: Object,
      default: function() {
        return {
          width: "300px",
          height: "320px"
        };
      }
    },
    pieOption: {
      type: Array,
      default: function() {
        return [];
      }
    },
    pieOpinionData: {
      type: Array,
      default: function() {
        return [];
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
      this.drawPie(this.pid);
    });
  },
  methods: {
    drawPie(id) {
      var myChart = echarts.init(document.getElementById(id));
      myChart.setOption({
        title: {
          subtext: this.subtext, //主标题
          x: "center", //x轴方向对齐方式
          subtextStyle: {
            color: "#1e87f0" //副标题文本样式{"color": "#aaa"}
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          data: this.pieOption,
          orient: "horizontal",
          bottom: "bottom",
          itemWidth: 14,
          itemGap: 10
        },
        series: [
          {
            name: this.pname,
            type: "pie",
            radius: "60%", // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            // radius: ["30%", "60%"], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ["50%", "50%"], // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            itemStyle: {
              // itemStyle 设置饼状图扇形区域样式
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(30, 144, 255，0.5)"
              },

              color: function(params) {
                //自定义颜色
                var colorList = [
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
                ];
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
                // formatter: '{a} {b} : {c}个 ({d}%)',  // 设置标签显示内容 ，默认显示{b}
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: "{d}%",
                fontSize: 10 //图上文本标签文字的字体大小
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style>
</style>