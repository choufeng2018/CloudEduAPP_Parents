<template>
	<div class="home-tabs">
		<q-tabs
			align="left"
			class="home-tabs-container text-teal"
		>
			<q-route-tab
				:key="index"
				:label="tabItem.title"
				:to="tabItem.link"
				v-for="(tabItem, index) in tabsList"
			/>
		</q-tabs>
		<div class="filter-by flex justify-start items-center">
			<div
				:class="{ 'filter__active': filterItem.isSelected }"
				:key="index"
				class="filter-by-item"
				v-for="(filterItem, index) in filterByList"
			>{{ filterItem.title }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeTabs',
	data() {
		return {
			tabsList: [
				{
					title: '附近门店',
					link: '/'
				},
				{
					title: '附近学校',
					link: '/'
				}
			],
			filterByList: [
				{
					title: '距离优先',
					isSelected: true
				},
				{
					title: '距离排序',
					isSelected: false
				},
				{
					title: '筛选',
					isSelected: false
				}
			]
		}
	}
}
</script>
<style lang="stylus" scoped>
.home-tabs {
  padding: 0 19px;
  margin-top: 16px;
}

.home-tabs-container {
  width: 100%;

  & > .q-tabs__content {
    flex: 0;

    & > .q-tab {
      padding: 0;
      min-height: 0;
      margin-right: 34px;
      flex: 0;

      & > .q-tab__content > .q-tabs-label {
        font-size: 16px;
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        font-family: PingFangSC-regular;
      }
    }
  }
}

.filter-by {
  margin-top: 24px;
  border-bottom: 1px solid rgba(187, 187, 187, 1);
  position: relative;
  padding-bottom: 10px;

  & > .filter-by-item {
    margin-right: 51px;
    color: rgba(191, 147, 147, 1);
    font-size: 12px;
    font-family: PingFangSC-regular;
  }

  & > .filter__active {
    color: rgba(85, 80, 80, 1);
  }

  & > .filter-by-item:nth-last-of-type(1) {
    position: absolute;
    right: 0;
    margin-right: 0;
  }
}
</style>

