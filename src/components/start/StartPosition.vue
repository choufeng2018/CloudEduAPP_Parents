<template>
	<div class="start-position">
		<p class="start-positio__title">请选择以下类别</p>
		<div class="start-position__selected">
			<div
				:class="{'active': item.selected}"
				:key="index"
				@click="setCategory(item)"
				class="selected-item relative-position flex items-center justify-start"
				v-for="(item, index) in getRoleComputed"
				v-ripple
			>
				<img
					:src="item.imgUrl"
					alt
				>
				<div class="selected-item__title flex justify-center items-center">
					<p class="text-center">{{ item.roleName }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { ROLE_LIST_ACTION } from '../../store/user/action-types'
import { IS_STARTED } from '../../store/start/mutation-types.js'
import { SAVE_ROLE_ID_MUTATION } from '../../store/user/mutation-types.js'
import { getRoleList } from '../../service/user/user'
export default {
	name: 'StartPosition',
	data() {
		return {
			roles: [],
			timer: null
		}
	},
	created() {
		this.getRoles()
	},
	computed: {
		getRoleComputed() {
			const imgs = [
				{ url: 'https://cdn.quasar.dev/img/mountains.jpg', key: 3 },
				{ url: 'https://cdn.quasar.dev/img/mountains.jpg', key: 2 },
				{ url: 'https://cdn.quasar.dev/img/mountains.jpg', key: 4 },
				{ url: 'https://cdn.quasar.dev/img/mountains.jpg', key: 5 },
				{ url: 'https://cdn.quasar.dev/img/mountains.jpg', key: 6 }
			]
			this.roles = this.roles.map((item, index) => {
				if (item.roleId === imgs[index].key) {
					return {
						roleName: item.roleName,
						roleId: item.roleId,
						roleKey: item.roleKey,
						selected: index === 0 ? true : false,
						imgUrl: item.roleId === imgs[index].key ? imgs[index].url : ''
					}
				}
			})
			console.log(this.roles)
			return this.roles
		}
	},
	methods: {
		...mapMutations('start', [IS_STARTED]),
		...mapMutations('user', [SAVE_ROLE_ID_MUTATION]),
		async getRoles() {
			try {
				const data = await getRoleList()
				this.roles = data.data.roleList
			} catch (error) {}
		},
		setCategory(item) {
			this.roles.forEach(val => (val.selected = false))
			item.selected = true
			this[SAVE_ROLE_ID_MUTATION](item.roleId)
			this.$q.loading.show({
				message: '正在跳转注册页面，请稍后...'
			})
			this.timer = setTimeout(() => {
				this.$q.loading.hide()
				this.$router.push({
					path: '/register'
				})
				this.timer = void 0
				setTimeout(() => {
					this[IS_STARTED](true)
				}, 1000)
			}, 3000)
		}
	},
	beforeDestroy() {
		if (this.timer !== void 0) {
			clearTimeout(this.timer)
		}
	}
}
</script>

<style lang='stylus' scoped>
.start-position {
  & .start-positio__title {
    margin: 75px 31px 51px 31px;
    padding: 0;
    color: rgba(16, 16, 16, 1);
    font-size: 22px;
    font-family: PingFangSC-regular;
  }

  & > .start-position__selected {
    padding: 0 31px;
    width: 100%;

    & > .active {
      border: 1px dashed rgba(6, 61, 183, 1) !important;

      & > img {
        border-right: 1px dashed rgba(6, 61, 183, 1) !important;
      }
    }

    & > .selected-item:nth-last-of-type(1) {
      margin-bottom: 0;
    }

    & > .selected-item {
      background: #eeeeee;
      width: 100%;
      min-height: 78px;
      margin-bottom: 40px;
      border-radius: 15px 15px 15px 15px;
      background-color: rgba(251, 251, 251, 1);
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      font-family: Arial;
      border: 1px solid rgba(255, 255, 255, 0);

      & > .selected-item__title {
        flex: 1;

        & > p {
          margin: 0;
          padding: 0;
          color: rgba(16, 16, 16, 1);
          font-size: 17px;
          font-family: PingFangSC-regular;
        }
      }

      & > img {
        max-width: 114px;
        height: 78px;
        border-radius: 15px 0 0 15px;
      }
    }
  }
}
</style>
