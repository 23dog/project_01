<template>
  <a-result status="500" title="500" sub-title="抱歉，服务器错误。">
    <template #extra>
      <a-button type="primary" @click="goHome">返回首页</a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  name:'500',
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


