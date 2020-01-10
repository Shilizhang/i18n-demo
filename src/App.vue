<template>
  <div id="app">
    <button @click="changeLanguage('zh')">中文</button>
    <button @click="changeLanguage('en')">英文</button>
    <div>{{$t('demo.hello')}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      changeLanguage(val) {
        this.$i18n.locale = val; //修改i18n语言
        localStorage.setItem("Language",val) //存储
      }
    }
  }
</script>
<style lang="scss">
</style>
