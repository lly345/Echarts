<template>
  <div class="pie">
    <div class="pie_left">
      <ul class="pieLeft">
        <li>
          <h3>{{$t('Status')}}</h3>
        </li>
        <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
        <li>{{$t('Total')}}</li>
      </ul>
      <ul class="pieRight">
        <li>
          <h3>{{$t('Quantity')}}</h3>
        </li>
        <li v-for="(item,index) in list" :key="index">{{item.value}}</li>
        <li>{{Total}}</li>
      </ul>
    </div>
    <div class="pie_right">
      <h3>{{$t('Ratio')}}</h3>
      <div id="main1" style="width:100%;height:100%"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return [
          { value: 16, name: "APProved" },
          { value: 8, name: "Approving" },
          { value: 2, name: "Draft" },
          { value: 13, name: "Rejected" },
          { value: 39, name: "Total" }
        ];
      }
    },
    legend: {
      type: Object,
      default: function() {
        return {
          orient: "horizontal",
          bottom: "bottom",
          itemWidth: 15,
          itemGap: 10
        };
      }
    },
    center: {
      type: Array,
      default: function() {
        return ["50%", "35%"];
      }
    }
  },
  components: {},
  data() {
    return {
      charts: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initData("main1");
    });
  },
  computed: {
    Total() {
      return this.list.reduce((prev, item) => {
        return prev + item.value * 1;
      }, 0);
    }
  },
  methods: {
    initData(id) {
      // 基于准备好的dom，初始化echarts实例
      this.charts = echarts.init(document.getElementById(id));
      // 绘制图表
      this.charts.setOption({
        title: {
          // text: "某站点用户访问来源", //主标题
          x: "center", //x轴方向对齐方式
          subtextStyle: {
            //副标题文本样式{"color": "#aaa"}
            color: "#1e87f0"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: this.legend,
        series: [
          {
            name: this.$t("Total"),
            type: "pie",
            //   radius: '55%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            radius: ["15%", "60%"], // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: this.center, // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: this.list,
            itemStyle: {
              // itemStyle 设置饼状图扇形区域样式
              borderWidth: 1, //设置border的宽度有多大
              borderColor: "#fff"
              // emphasis：英文意思是 强调;着重;（轮廓、图形等的）鲜明;突出，重读
              // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
              // emphasis: {
              //   shadowBlur: 10,
              //   shadowOffsetX: 0,
              //   shadowColor: "rgba(30, 144, 255，0.5)"
              // }
            },
            labelLine: {
              // 设置值域的指向线
              normal: {
                show: false // show设置线是否显示，默认为true，可选值：true ¦ false
              }
            },
            label: {
              // 设置值域的标签
              normal: {
                position: "inner", // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
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
  },
  destroyed() {
    this.charts = "";
  }
};
</script>
<style>
.pie {
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin-left: 20px;
  margin-right: 20px;
}
.pie_left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-right: 1px solid #ccc;
}
.pie_left > ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: initial;
}
.pieLeft {
  border-right: 1px solid #ccc;
}
.pie_left > ul > li {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pie_left > ul > li:nth-last-child(1) {
  border: 0;
}
.pie_left > ul > li:nth-child(1) {
  width: 100%;
  height: 50px;
  background: #ccc;
}
.pie_right {
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.pie_right h3 {
  width: 100%;
  line-height: 45px;
  background: #ccc;
  margin-top: 0;
}
#main1 {
  width: 100%;
  height: 254px;
  flex: 1;
}
</style>