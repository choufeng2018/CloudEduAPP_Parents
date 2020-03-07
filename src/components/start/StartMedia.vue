<template>
	<div class="start-media">
		<q-carousel
			@input="changeDefaultSlide"
			animated
			autoplay
			height="100vh"
			navigation
			swipeable
			transition-next="slide-left"
			transition-prev="slide-right"
			v-model="defaultSlide"
		>
			<q-carousel-slide
				:img-src="slideItem.imgUrl"
				:key="index"
				:name="index++"
				v-for="(slideItem, index) in slideList"
			/>
		</q-carousel>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ACTIVE_PROCESS } from '../../store/start/mutation-types.js'
export default {
	name: 'StartMedia',
	data() {
		return {
			defaultSlide: 1,
			slideList: [
				{ imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg' },
				{ imgUrl: 'https://cdn.quasar.dev/img/parallax1.jpg' },
				{ imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg' },
				{ imgUrl: 'https://cdn.quasar.dev/img/quasar.jpg' }
			],
			timer: null
		}
	},
	methods: {
		...mapMutations('start', [ACTIVE_PROCESS]),
		changeDefaultSlide(value) {
			const slideLength = this.slideList.length - 1
			if (value >= slideLength) {
				this.$q.loading.show({
					message: '正在加载中，请稍等'
				})

				this.timer = setTimeout(() => {
					this.$q.loading.hide()
					this.timer = void 0
					this[ACTIVE_PROCESS](2)
				}, 3000)
			}
			return value
		}
	},
	beforeDestroy() {
		if (this.timer !== void 0) {
			clearTimeout(this.timer)
			this.$q.loading.hide()
			this[ACTIVE_PROCESS](2)
		}
	}
}
</script>

<style lang='stylus' scoped>
</style>
