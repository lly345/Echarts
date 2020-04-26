export default {
  props: {
    /**
     * 默认柱状图的颜色
     */
    Ccolor: {
      type: Array,
      default: function () {
        return ["#3398DB"];
      }
    },
    /**
     * 柱状图Y轴的title值
     */
    ctitle: {
      type: String,
      default: function () {
        return "";
      }
    },
    /**
    * 柱状图X轴的name值
    */
    cname: {
      type: String,
      default: function () {
        return "SKU";
      }
    },
    /**
    * 柱状图唯一的id
    */
    Cid: {
      type: String,
      default: function () {
        return "category";
      }
    },
    /**
    * legend数据
    */
    opinion: {
      type: Array,
      default: function () {
        return ["直接访问", "邮件营销"];
      }
    },
    /**
     * 展示的类别
     */
    opinionData: {
      type: Array,
      default: function () {
        return [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" }
        ];
      }
    },
    /**
     * 展示数据标签
     */
    xAxisData: {
      type: Array,
      default: function () {
        return ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
      }
    },
    /**
     * 展示数据
     */
    cateseries: {
      type: Array,
      default: function () {
        return [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ];
      }
    },
    /**
     * 是否显示legend
     */
    show: {
      type: Boolean,
      default: function () {
        return true;
      }
    },
    /**
     * 是否显示 tooltip
     */
    tooltipShow: {
      type: Boolean,
      default: function () {
        return true;
      }
    },
    /**
     * 数据大于等于6条的时候显示滑动条
     */
    dataZoomEnd: {
      type: Number,
      default: function () {
        return null;
      }
    },
    /**
     * X轴的name为数值类型
     */
    cxAxis: {
      type: Array,
      default: function () {
        return [
          {
            name: this.cname,
            type: "value"
          }
        ];
      }
    }
  }
}
