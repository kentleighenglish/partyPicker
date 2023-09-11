<template>
	<nav>
		<router-link to="/" class="headerTitle">
			<img src="/favicon.svg" />
		</router-link>
		<ul class="nav">
			<li v-for="item in navItems">
				<router-link :to="item.path">{{ item.label }}</router-link>
			</li>
		</ul>
	</nav>
</template>
<style lang="scss">
	@import '~scss/variables';

	nav {
		margin: $gap 0 ($gap / 2);
		
		img {
			width: 60px;
			height: 60px;
			display: inline-block;
			vertical-align: middle;
		}
		
		ul {
			margin: 0 0 0 $gap;
			padding: 0;
			display: inline-block;
			vertical-align: middle;
			
			li {
				display: inline-block;
				
				a {
					padding: ($gap / 2) $gap;
					font-size: $font-lg;
					text-decoration: none;
					color: $primary-dark;
					
					border: 0px solid transparent;
					border-bottom-width: 1px;
					
					&:hover {
						background-color: fade-out($grey-lighter, .8);
						border-color: $primary;
					}
				}
			}
		}
	}
</style>
<script>
	export default {
		name: 'app-nav',
		data: function() {
			return {
				navItems: [
					{ label: 'Take Quiz', path: '/quiz' },
					{ label: 'About', path: '/about' }
				]
			}
		}
	}
</script>