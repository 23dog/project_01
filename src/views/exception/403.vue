<template>
  <a-result status="403" title="403" sub-title="抱歉，您无权访问此页面。">
    <template #extra>
      <a-button type="primary" @click="goHome">返回首页</a-button>
    </template>
  </a-result>
</template>

//vue2用法
<script>
export default {
  name:'403',
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
<!--vue3用法-->
<!--<script lang="ts" setup>-->
<!--import {ref} from "vue";-->
<!--const name = ref('')-->
<!--console.log(name.value)-->
<!--</script>-->
<style lang="scss" scoped></style>


