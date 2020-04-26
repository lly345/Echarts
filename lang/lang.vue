<template>
  <span class="lang-switcher">
    <a v-for="(locale, i) in showLocales" :key="i" href="javascript:void(0)">
      <span @click="handleChangeLang(locale.code)">{{ locale.name }}</span>
    </a>
  </span>
</template>
 
<script>
import { changeLanguage } from "@/api/changeLanguage";
// const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "LangSwitcher",
  data() {
    return {
      locales: [
        {
          code: "en-US",
          name: "English"
        },
        {
          code: "zh-CN",
          name: "简体中文"
        }
      ]
    };
  },
  computed: {
    showLocales() {
      return this.locales.filter(locale => locale.code !== this.$i18n.locale);
    }
  },
  methods: {
    handleChangeLang() {
      changeLanguage().then(body => {
        if (body.success) {
          window.location.reload(true);
        }
      });
      // this.$i18n.locale = lang;
    }
  }
};
</script>