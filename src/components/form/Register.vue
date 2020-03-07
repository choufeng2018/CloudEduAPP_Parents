<template>
	<div class="register">
		<q-avatar
			class="shadow-6 user-avatar"
			size="100px"
		>
			<img src="https://cdn.quasar.dev/img/avatar.png">
		</q-avatar>
		<p class="platform-name">云托管</p>
		<v-render-form
			:renderType="renderType"
			@request="request"
		></v-render-form>
	</div>
</template>

<script>
import {
	isRequired,
	fillMinLength,
	fillMaxLength,
	phone,
	withParam,
	isNum,
	password,
	somePassword
} from 'assets/uitls/validate'
import saveCodeImageMixin from '../../mixins/saveCodeImage.js'
import { parseFormData } from 'assets/uitls/parse'
import { REGISTER_ACTION } from '../../store/user/action-types.js'
import { mapActions, mapState } from 'vuex'
export default {
	name: 'Register',
	data() {
		return {
			renderType: {
				userName: {
					model: '13892341567',
					type: 'text',
					placeholder: '手机号',
					refName: 'userName',
					addCloseIcon: 'close',
					rule: [
						val => isRequired(val, '手机号不能为空'),
						val => withParam(val, 11, '手机号只能输入11位'),
						val => phone(val, '请正确输入手机号')
					]
				},
				password: {
					model: '123456',
					type: 'password',
					placeholder: '密码',
					refName: 'password',
					addCloseIcon: 'close',
					rule: [
						val => isRequired(val, '密码不能为空'),
						val => fillMinLength(val, 6, '密码不能少于6位'),
						val => fillMaxLength(val, 16, '密码不能超于16位'),
						// val => password(val, '密码需要包含数字、英文')
						val =>
							somePassword(
								val,
								this.renderType.confirmPassword.model,
								'两次密码输入不一致'
							)
					]
				},
				confirmPassword: {
					model: '123456',
					type: 'password',
					placeholder: '确认密码',
					refName: 'confirmPassword',
					addCloseIcon: 'close',
					rule: [
						val =>
							somePassword(val, this.renderType.password.model, '两次密码输入不一致')
					]
				},
				btn: {
					label: '立即注册',
					color: 'form__submit',
					textColor: 'form__text'
				}
			}
		}
	},
	computed: {
		...mapState('user', ['roleId'])
	},
	methods: {
		...mapActions('user', [REGISTER_ACTION]),
		async request({ keys, refs }) {
			const data = {}
			const ROLE_ID_KEY = 'roleIds'
			const includeArray = ['userName', 'password']
			keys.forEach((key, index) => {
				if (includeArray.includes(this.renderType[key].refName)) {
					data[key] = refs[key][0].value
				}
			})
			data[ROLE_ID_KEY] = [parseInt(this.roleId)]
			const result = parseFormData(data)
			this[REGISTER_ACTION](result).then(res => {
				if (res.data.code !== 200) {
					this.$q.notify({
						message: res.data.msg,
						timeout: 1500
					})
				} else {
					this.$router.push({
						path: '/login'
					})
				}
			})
		}
	},
	components: {
		'v-render-form': () => import('components/form/RenderForm.vue')
	}
}
</script>

<style lang='stylus' scoped>
.user-avatar {
  margin: 56px auto 0 auto;
  display: block;
}

.platform-name {
  color: rgba(123, 94, 94, 1);
  font-size: 25px;
  letter-spacing: 12px;
  text-align: center;
  font-family: PingFangSC-bold;
  margin: 19px 0 49px 0;
}
</style>
