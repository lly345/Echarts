<template>
  <div class="item-box">
    <div class="ech-head">
      <span class="blue-box"></span>
      <span>{{htitle}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    htitle: {
      type: String,
      default: function() {
        return "product";
      }
    }
  }
};
</script>

<style>
.item-box {
  width: 100%;
  background: #ffffff;
}
.blue-box {
  display: inline-block;
  width: 5px;
  height: 13px;
  background: #1e87f0;
  margin-left: 30px;
  margin-right: 5px;
}
.ech-head {
  line-height: 40px;
  border-bottom: 1px solid #eeeeee;
}
</style>