<template>
	<div>
		<v-start-media v-if="activeProcess === 1"></v-start-media>
		<v-start-position v-if="activeProcess === 2"></v-start-position>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: '',
	data() {
		return {}
	},
	components: {
		'v-start-media': () => import('components/start/StartMedia.vue'),
		'v-start-position': () => import('components/start/StartPosition.vue')
	},
	computed: {
		...mapState('start', {
			activeProcess: 'activeProcess'
		})
	}
}
</script>

<style lang='stylus' scoped>
</style>
