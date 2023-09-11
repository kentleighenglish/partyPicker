<template>
	<header>
		<app-nav></app-nav>
	</header>
</template>
<style lang="scss">
	@import '~scss/variables';
	
	header {
		margin-top: $gap;
	}
</style>
<script>
	import appNav from './AppNav.vue';

	export default {
		name: 'app-header',
		components: {
			appNav
		}
	}
</script>