<template>
	<div>
		<div style="max-width: 100%; position:relative;">
			<q-skeleton
				animation="fade"
				height="100vh"
				square
			></q-skeleton>
			<div class="selected-group flex justify-center">
				<q-skeleton
					animation="fade"
					class="skeleton-selected"
					type="QAvatar"
				></q-skeleton>
				<q-skeleton
					animation="fade"
					class="skeleton-selected"
					type="QAvatar"
				></q-skeleton>
				<q-skeleton
					animation="fade"
					class="skeleton-selected"
					type="QAvatar"
				></q-skeleton>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {}
	}
}
</script>

<style lang='stylus' scoped>
.skeleton-selected {
  width: 10px;
  height: 10px;
  background: rgba(0, 0, 0, 0.26) !important;
  margin-right: 15px;

  &:nth-last-of-type(1) {
    position: relative;
  }
}

.selected-group {
  position: fixed;
  bottom: 25px;
  left: 0;
  right: 0;
}
</style>
