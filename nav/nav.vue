<template>
  <div class="ips-wrappera" id="searchBar" :class="searchBarFixed== true?'isFixed':''">
    <div class="lz-toolbar">
      <div class="lz-toolbar-header">
        <img id="banner" style="width: 140px;" src="@/assets/logo.png" />
      </div>
      <div class="lz-toolbar-tools" style="padding-top: 15px;">
        <span>{{userName}}</span>
        <lang style="padding-left: 10px;">切换语言</lang>
        <a text="toolbar.logout" href="/logout" style="padding-left: 10px;">退出</a>
        <a
          href="/ipsHelp/toList"
          target="_blank"
          style="padding-left: 10px;"
          title="por.helpDocument"
        >
          <i class="fa fa-question-circle"></i>
        </a>
      </div>
    </div>
    <div class="lz-nav-wrap">
      <div class="lz-row">
        <ul class="lz-nav" id="nav"></ul>
      </div>
    </div>
    <div id="nav-ext" style="display:none;"></div>
  </div>
</template>

<script>
import lang from "@/components/lang";
import { getLoginUserInfo } from "@/api/getLoginUserInfo";

export default {
  name: "HelloWorld",
  components: {
    lang
  },
  data() {
    return {
      userName: "用户名",
      searchBarFixed: false,
      toolbar: {
        changeLanguage: true
      }
    };
  },
  props: {
    msg: String
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const body = await getLoginUserInfo();
      if (body.userName) {
        this.userName = body.userName;
        window.userCode=body.userCode
      }
    },
    handleScroll() {
      this.$nextTick(() => {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let offsetTop = document.querySelector("#searchBar").offsetTop;
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true;
        } else {
          this.searchBarFixed = false;
        }
      });
    },
    changeLanguage() {
      this.toolbar.changeLanguage = !this.toolbar.changeLanguage;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
