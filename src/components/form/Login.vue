<template>
	<div class="login">
		<q-avatar
			class="shadow-6 user-avatar"
			size="100px"
		>
			<img src="https://cdn.quasar.dev/img/avatar.png">
		</q-avatar>
		<p class="platform-name">云托管</p>
		<v-render-form
			:renderType="renderType"
			@codeImage="changeCodeImage"
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
	password
} from 'assets/uitls/validate'
import { uid } from 'quasar'
import { parseFormData } from 'assets/uitls/parse'
import { mapActions } from 'vuex'
import { LOGIN_ACTION } from '../../store/user/action-types.js'
import saveCodeImageMixin from '../../mixins/saveCodeImage.js'
export default {
	name: 'Login',
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
				code: {
					model: '',
					type: 'text',
					placeholder: '验证码',
					refName: 'code',
					addCloseIcon: 'close',
					rule: [
						val => isRequired(val, '验证码不能为空'),
						val => withParam(val, 4, '验证码只能输入5位')
						// val => isNum(val, '验证码只能为数字')
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
						val => fillMaxLength(val, 16, '密码不能超于16位')
						// val => password(val, '密码需要包含数字、英文')
					]
				},
				btn: {
					label: '立即登录',
					color: 'form__submit',
					textColor: 'form__text'
				}
			}
		}
	},
	mixins: [saveCodeImageMixin],
	methods: {
		...mapActions('user', [LOGIN_ACTION]),
		async request({ keys, refs }) {
			const data = {}
			const CODE_KEY = 'uuid'
			keys.forEach((key, index) => {
				if (!!this.renderType[key][CODE_KEY])
					data[CODE_KEY] = this.renderType[key][CODE_KEY]
				data[key] = refs[key][0].value
			})
			const result = parseFormData(data)
			this[LOGIN_ACTION](result).then(res => {
				if (res.data.code !== 200) {
					this.$q.notify({
						message: res.data.msg,
						timeout: 1500
					})
				} else {
					this.$router.push({
						path: '/'
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
