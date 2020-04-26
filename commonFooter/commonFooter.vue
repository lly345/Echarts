<template>
  <div class="lz-footer">
    <div class="lz-row">
      <div class="lz-copyright">
        <div>
          <img id="banner" class="lz-footer-logo" src="@/assets/logo.png" />
        </div>
        <p>绫致时装（天津）有限公司</p>
      </div>
    </div>
    <div class="side-bar">
      <a href="/riskManage/toAdd" target="_blank">
        <Icon type="ios-flash" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.lz-footer {
  height: 80px;
  padding-top: 15px;
}
.side-bar {
  width: 35px;
  position: fixed;
  bottom: 20px;
  right: 25px;
  line-height: 0;
  z-index: 9000;
}

.side-bar a {
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  color: #ff0000;
}
/* .side-bar a:hover {background-color: #428bca} */
.side-bar a i {
  font-size: 35px;
}
</style>