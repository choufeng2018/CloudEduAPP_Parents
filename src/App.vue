<template>
	<div id="q-app">
		<v-start v-if="!started"></v-start>
		<router-view v-if="started"/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'App',
	data() {
		return {}
	},
	computed: {
		...mapState('start', {
			started: 'started'
		})
	},
	components: {
		'v-start': () => import('pages/Start.vue')
	}
}
</script>

<style lang="stylus" scoped>
html, body {
  margin: 0;
  padding: 0;
  line-height: 0;
}
</style>

