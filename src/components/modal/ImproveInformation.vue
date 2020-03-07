<template>
	<div>
		<q-dialog v-model="isImproveInformation">
			<q-card class="dialog--card">
				<q-card-section class="card--section__remove-bottom-padding">
					<div class="dialog--card--section__title">{{ modelConfig.title }}</div>
				</q-card-section>
				<q-card-actions
					align="center"
					class="bg-white text-teal"
					vertical
				>
					<q-btn
						:key="index"
						:label="value.label"
						:text-color="value.textColor"
						@click="cardActions(value.event)"
						class="card--actions__modify"
						fab-mini
						flat
						v-for="(value, key, index) in modelConfig.actions"
					/>
				</q-card-actions>
			</q-card>
		</q-dialog>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {}
	},
	props: {
		isImproveInformation: {
			type: Boolean,
			required: true,
			default: () => false
		},
		modelConfig: {
			type: Object,
			required: true,
			default: () => {}
		}
	},
	methods: {
		cardActions(type) {
			this.$emit('executeEvent', type)
		}
	}
}
</script>

<style lang='stylus' scoped>
.dialog--card {
  width: 100%;
  max-width: 370px;
}

.dialog--card--section__title {
  font-size: 16px;
  text-align: center;
  font-weight: 500;
}

.card--actions__modify {
  font-size: 16px;
  width: 100%;
  font-weight: 500;
}

.card--section__remove-bottom-padding {
  padding-bottom: 6px;
}
</style>
