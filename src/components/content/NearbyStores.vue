<template>
	<div class="nearby-stores">
		<div
			:key="index"
			class="nearby-stores-card flex"
			v-for="(nearbyStoresItem, index) in nearbyStoresList"
		>
			<div class="nearby-stores-card--img">
				<img
					:src="nearbyStoresItem.imgUrl"
					alt
				>
			</div>
			<div class="nearby-stores-card--content">
				<p class="title">{{ nearbyStoresItem.title }}</p>
				<div class="label-groups flex content-start items-center">
					<p
						:key="labelIndex"
						class="label-title"
						v-for="(labelItem, labelIndex) in nearbyStoresItem.labelList"
					>{{ labelItem.title }}</p>
				</div>
				<div class="footer-info flex justify-between items-end">
					<div class="footer-info-item">{{ nearbyStoresItem.addressName }}</div>
					<div class="footer-info-item">{{ nearbyStoresItem.distance }}</div>
				</div>
			</div>
		</div>
		<v-improve-information
			:isImproveInformation="isExistNickname"
			:modelConfig="modelConfig"
			@executeEvent="executeEvent"
		></v-improve-information>
	</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import { IS_EXIST_NICKNAME_MUTATION } from '../../store/user/mutation-types.js'
export default {
	name: 'NearbyStores',
	data() {
		return {
			nearbyStoresList: [
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				},
				{
					imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
					title: '星期六水上儿童乐园',
					addressName: '远洋山水',
					distance: '10.52km',
					labelList: [
						{
							title: '语文'
						},
						{
							title: '数学'
						},
						{
							title: '英语'
						}
					]
				}
			],
			modelConfig: {
				title: '完善资料，让老师更好的发现你',
				actions: {
					cancel: {
						label: '取消',
						textColor: 'dark',
						event: 'cancel'
					},
					perfectNow: {
						label: '立即完善',
						textColor: 'primary',
						event: 'ok'
					}
				}
			}
		}
	},
	computed: {
		...mapState('user', ['isExistNickname'])
	},
	components: {
		'v-improve-information': () => import('components/modal/ImproveInformation.vue')
	},
	methods: {
		...mapMutations('user', [IS_EXIST_NICKNAME_MUTATION]),
		executeEvent(type) {
			this[type]()
		},
		cancel() {
			this[IS_EXIST_NICKNAME_MUTATION](false)
		}
	}
}
</script>
<style lang="stylus" scoped>
.nearby-stores {
  width: 100%;
  padding: 24px 19px 24px 19px;
}

.nearby-stores-card {
  width: 100%;
  min-height: 90px;
  margin-bottom: 24px;
}

.nearby-stores-card--content {
  flex: 1;
  padding: 13px 17px 7px 17px;
  border-radius: 0 6px 6px 0;
  background-color: rgba(249, 249, 249, 1);

  & > .title {
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    font-family: PingFangSC-regular;
    margin: 0 0 2px 0;
    padding: 0;
  }

  & > .label-groups {
    & > .label-title {
      padding: 1px 5px;
      margin: 0 7px 0 0;
      border-radius: 3px;
      background-color: rgba(215, 37, 37, 1);
      text-align: center;
      border: 1px solid rgba(215, 37, 37, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 10px;
      font-family: PingFangSC-regular;
    }
  }
}

.nearby-stores-card--img {
  height: 90px;
  border-radius: 6px 0px 0px 6px;

  & > img {
    width: 108px;
    height: 90px;
    border-radius: 6px 0px 0px 6px;
  }
}

.footer-info-item {
  color: rgba(210, 192, 192, 1);
  font-size: 10px;
  font-family: PingFangSC-regular;
  margin-top: 7px;
}
</style>

