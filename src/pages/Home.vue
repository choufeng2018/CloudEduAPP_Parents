<template>
	<div class='home'>
		<v-home-banner></v-home-banner>
		<v-home-tabs></v-home-tabs>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'home',
	components: {
		'v-home-banner': () => import('components/banner/HomeBanner.vue'),
		'v-home-tabs': () => import('components/tabs/HomeTabs.vue')
	},
	data() {
		return {}
	}
}
</script>
<style lang="stylus" scoped>
</style>

