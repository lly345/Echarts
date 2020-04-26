<template>
  <div id="categoryColor" style="width: 100%;height: 100%;"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "",
  props: {
    ydata: {
      type: Array,
      default: function() {
        return ["周一", "周二", "周三", "周四", "周五"];
      }
    },
    opinionlist: {
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
      this.drawPie("categoryColor");
    });
  },
  methods: {
    drawPie(id) {
      let catelist = this.opinionlist;
      const arrayAverage = arr =>
        arr.reduce((acc, val) => acc + val, 0) / arr.length; //以数据的平均数为衡量点
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: this.$t("poIndex.purchaAmount"),
          textStyle: {
            fontWeight: "normal",
            fontSize: 14
          }
        },
        tooltip: { show: true },
        xAxis: [
          {
            name: this.$t("poIndex.Department"),
            type: "category",
            data: this.ydata,
            axisLabel: {
              show: true,
              interval: 0,
              formatter: function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 15; //一行显示几个字
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
                return newParamsName;
              }
            }
          }
        ],
        yAxis: {
          type: "value"
        },
        grid: {
          left: "1%",
          right: "10%",
          bottom: "10%",
          containLabel: true
        },
        series: [
          {
            data: catelist,
            type: "bar",
            name: this.$t("Amount"),
            barWidth: "50", //设置柱宽度

            itemStyle: {
              normal: {
                color: function(params) {
                  //基本色(除白色)序列
                  let colorList = [
                      "#000000",
                      "#FF0000",
                      "#00FF00",
                      "#0000FF",
                      "#FFFF00",
                      "#00FFFF",
                      "#FF00FF",
                      "#C0C0C0",
                      "#808080",
                      "#800000",
                      "#808000",
                      "#008000",
                      "#800080",
                      "#008080",
                      "#000080"
                    ],
                    col = [];
                  for (var i = 0; i < catelist.length; i++)
                    col[i] = parseInt(catelist[i] / arrayAverage(catelist));
                  return colorList[col[params.dataIndex]];
                }
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