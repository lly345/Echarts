<template>
  <div :id="pid" style=" width: 100%;height: 95%;"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "",
  props: {
    opinion: {
      type: Array,
      default: function() {
        return ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"];
      }
    },
    opinionData: {
      type: Array,
      default: function() {
        return [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ];
      }
    },
    xAxisData: {
      type: Array,
      default: function() {
        return ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      }
    },
    pid:{
      type:String,
      default:'stackedLine'
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
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: this.$t("product.Price"),
          left: 30,
          textStyle: {
            fontWeight: "normal",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          type: "scroll", //分页类型,
          data: this.opinion,
          orient: "horizontal",
          bottom: 10
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "12%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxisData
        },
        yAxis: {
          type: "value"
        },
        series: this.opinionData
      });
    }
  },
  destroyed() {
    this.charts = "";
  }
};
</script>

<style>
</style>