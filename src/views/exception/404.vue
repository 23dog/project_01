<template>
  <a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在。">
    <template #extra>
      <a-button type="primary" @click="goHome">返回首页</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name:'404',
  data(){
    return{

    }
  },
  methods:{
    goHome(){
      //路由跳转
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped></style>

