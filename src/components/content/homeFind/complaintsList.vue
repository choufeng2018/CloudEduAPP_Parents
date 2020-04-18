<template>
  <div class="nearby-stores">
    <div :key="index" class="nearby-stores-card flex" v-for="(item, index) in studetHwList">
      <div class="nearby-stores-card--img">
        <img :src="item.avatar" alt />
      </div>
      <div class="nearby-stores-card--content">
        <p class="title">{{ item.name }}</p>
        <q-btn label="编辑" @click="getDetail(item.id)" />

        <!-- <div class="label-groups flex content-start items-center">
          <p
            :key="labelIndex"
            class="label-title"
            v-for="(labelItem, labelIndex) in item.labelList"
          >{{ labelItem.title }}</p>
        </div>
        <div class="footer-info flex justify-between items-end">
          <div class="footer-info-item">{{ item.addressName }}</div>
          <div class="footer-info-item">{{ item.distance }}</div>
        </div> -->
      </div>
    </div>
    <q-btn label="添加学生" @click="cardActions()" />
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import { GETUSEINFO_ACTION } from '../../../store/user/action-types.js'
import { getUserInfo, getMyStudentComplaintList } from '../../../service/user/user'
import { GETUSERINFO_MUTATION } from '../../../store/user/mutation-types.js'
export default {
  name: 'StudentList',
  data() {
    return {
      studetHwList: [],
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
  computed: {
    		...mapState('user', ['token'])
  },
  created() {
    console.log(localStorage.getItem('user'))
    this.getUserInfo()
    this.getMyStudentComplaintList()
  },
  components: {},
  methods: {
    ...mapMutations('user', [GETUSERINFO_MUTATION]),
    async getUserInfo() {
      try {
        const data = await getUserInfo()
        if (data.status===200) {
          this.info = data.data.user
        }
        console.log(this.info)
      } catch (error) {}
    },
    async getMyStudentComplaintList() {
      try {
        const data = await getMyStudentComplaintList()
        if (data.status===200) {
         this.studetHwList = data.data.rows
         console.log(this.studetHwList)
        }
      } catch (error) {}
    },
    getDetail(id) {
      this.$router.push({path:'/complaints',query:{id:id}})
    },
    cardActions(type) {
			this.$router.push({
				path: '/complaints'
			})
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

