<template>
	<div class="form-group">
		<q-form @submit.prevent="submitForm">
			<div
				:key="index"
				class="form-group-module"
				v-for="(value, key, index) in renderType"
			>
				<q-input
					:label="value.placeholder"
					:ref="value.refName"
					:rules="value.rule"
					:type="value.type"
					@input="changePasswordValidate(value.type)"
					class="form-group-item no-shadow"
					color="blank"
					outlined
					v-if="value.type"
					v-model="value.model"
				>
					<template
						v-if="value.refName === 'code'"
						v-slot:after
					>
						<div @click="getCodeImage">
							<img
								:src="`data:image/png;base64,${value.img}`"
								alt
								class="code--img"
								v-if="value.img"
							>
						</div>
					</template>
					<template v-slot:append>
						<q-icon
							@click="value.model = ''"
							name="close"
							v-if="value.addCloseIcon && value.model"
						></q-icon>
					</template>
				</q-input>
				<q-btn
					:color="value.color"
					:disable="getLoading"
					:text-color="value.textColor"
					class="login__submit"
					dark-percentage
					no-caps
					type="submit"
					v-close-popup
					v-if="!value.type"
				>{{ value.label }}</q-btn>
			</div>
		</q-form>
	</div>
</template>

<script>
import { getAppCodeImage } from '../../service/user/user'
import { mapGetters } from 'vuex'
export default {
	name: 'RenderForm',
	data() {
		return {
			disable: false
		}
	},
	props: {
		renderType: {
			type: Object,
			required: true,
			default: () => {}
		}
	},
	computed: {
		...mapGetters('user', ['authStatus']),
		getLoading() {
			this.authStatus === 'loading' ? (this.disable = true) : (this.disable = false)
		}
	},
	created() {
		if (this.renderType.code) {
			this.getCodeImage()
		}
	},
	methods: {
		async getCodeImage() {
			try {
				const data = await getAppCodeImage()
				this.$emit('codeImage', data.data)
			} catch (error) {}
		},
		submitForm() {
			const values = Object.values(this.renderType)
			const collectHasError = []
			values.pop()
			values.forEach(item => {
				this.$refs[item.refName][0].validate()
				collectHasError.push(this.$refs[item.refName][0].hasError)
			})
			const filterHasError = collectHasError.filter(item => item === true)
			if (filterHasError.length <= 0) this.submitTask()
		},
		submitTask() {
			const keys = Object.keys(this.$refs)
			this.$emit('request', { keys, refs: this.$refs })
		},
		changePasswordValidate(type) {
			if (this.$refs.confirmPassword && type === 'password') {
				const values = Object.values(this.renderType)
				const filterValues = values.filter(item => item.type === 'password')
				filterValues.forEach(item => {
					this.$refs[item.refName][0].validate()
				})
			}
		}
	},
	beforeDestroy() {}
}
</script>

<style lang='stylus' scoped>
.form-group {
  padding: 0 37px;
}

.form-group-item {
  border-radius: 5px 5px 5px 5px;
  font-size: 14px;
  font-family: Aria;
  margin-top: 11px;
}

.form-group-item:nth-last-of-type(1) {
  margin-bottom: 0;
}

.login__submit {
  width: 100%;
  min-height: 56px;
  border-radius: 5px;
  font-size: 18px;
  font-family: PingFangSC-regular;
  margin-top: 25px;
}

.code--img {
  width: 100%;
  height: 56px;
  border-radius: 5px;
  margin-top: 6px;
}
</style>
