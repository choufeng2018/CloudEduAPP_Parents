<template>
	<div class='home-banner'>
		<q-carousel
			animated
			autoplay
			height='200px'
			infinite
			navigation
			transition-next='slide-left'
			transition-prev='slide-right'
			v-model='defaultSlide'
		>
			<q-carousel-slide
				:img-src='slideItem.imgUrl'
				:key='index'
				:name='index++'
				v-for='(slideItem, index) in slideList'
			/>
		</q-carousel>
	</div>
</template>

<script>
export default {
	name: 'HomeBanner',
	data() {
		return {
			defaultSlide: 1,
			slideList: [
				{ imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg' },
				{ imgUrl: 'https://cdn.quasar.dev/img/parallax1.jpg' },
				{ imgUrl: 'https://cdn.quasar.dev/img/parallax2.jpg' },
				{ imgUrl: 'https://cdn.quasar.dev/img/quasar.jpg' }
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.home-page {
  width: 100%;
}
</style>

