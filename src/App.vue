<template>
	<a-config-provider :locale="locale">
		<router-view />
	</a-config-provider>
</template>
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import _default from 'ant-design-vue/es/color-picker'
import locale = _default.props.locale

const locate = zhCN
</script>

<style scoped></style>
