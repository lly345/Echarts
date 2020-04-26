<template>
  <div>
    <div :id="Cid" style="width: 100%;height:380px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import cate from "@/components/mixin/cate";

export default {
  name: "category",
  mixins: [cate],
  data() {
    return {
      charts: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawPie(this.Cid);
    });
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        color: this.Ccolor,
        title: {
          text: this.ctitle,
          textStyle: {
            fontWeight: "normal",
            fontSize: 14
          }
        },
        tooltip: {
          show: this.tooltipShow,
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            axis: "y"
          }
        },
        legend: {
          show: this.show,
          data: this.opinion,
          bottom: "bottom"
        },
        grid: {
          left: "1%",
          right: "10%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: this.cxAxis,
        yAxis: {
          type: "category",
          axisLabel: {
            color: "#000",
            interval: 0,
            formatter: function(value) {
              if (value.length > 6) {
                return value.substring(0, 6) + "...";
              } else {
                return value;
              }
            }
          },
          data: this.xAxisData
        },
        dataZoom: [
          {
            type: "inside", //滑动条
            show: true, //开启
            yAxisIndex: [0],
            start: 0, //初始化时，滑动条宽度开始标度
            end: this.dataZoomEnd, //xArraylength是x轴返回的数据的个数 //初始化时，滑动条宽度结束标度
            zoomLock: true //阻止区域缩放
          }
        ],
        series: this.cateseries
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