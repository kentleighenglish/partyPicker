<template>
	<div id="app">
		<app-header></app-header>
		<router-view class="content"></router-view>
	</div>
</template>
<style lang="scss">
	@import 'scss/variables';
	
	body {
		color: $base-font-color;
		font-family: $base-font-family;
		font-size: $base-font-size;
		background-color: $bg;
		
		background-image: url('/bg_tile.svg');
	}
	
	#app {
		max-width: 1400px;
		margin: 0 auto;
	}
	
	h1, h2, h3, h4, h5, h6 {
		font-family: $header-font-family;
		font-weight: 300;
	}
	
	.content {
		padding-top: $gap;
	}
</style>
<script>
	import AppHeader from './components/global/AppHeader.vue';

	export default {
		title () {
			return 'Party Picker';
		},
		components: {
			AppHeader
		}
	}
</script>