<template>
  <div class="form-group">
    <v-render-form :renderType="renderType" @request="request"></v-render-form>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import {
  ADDSTUDENTLEAVE_ACTION,
  GETSTUDENTINFO_ACTION
} from '../../../store/homeWork/action-types.js'
import { getUserInfo, getStudentLeaveInfo } from '../../../service/user/user'
import { isRequired, withParam, phone } from 'assets/uitls/validate'
import { parseFormData, parseJsonData } from 'assets/uitls/parse'
export default {
  name: 'RenderForm',
  data() {
    return {
      form: null,
      disable: false,
      renderType: {
        leaveStartTime: {
          model: '2020-03-04 11:11:11',
          type: 'text',
          placeholder: '开始时间',
          refName: 'leaveStartTime',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '选择开始时间')]
        },
        leaveEndTime: {
          model: '2020-03-04 11:11:11',
          type: 'text',
          placeholder: '截止时间',
          refName: 'leaveEndTime',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '选择截止时间')]
        },
        reason: {
          model: '',
          type: 'text',
          placeholder: '请假原因',
          refName: 'reason',
          addCloseIcon: 'close'
        },
        btn: {
          label: '添加',
          color: 'form__submit',
          textColor: 'form__text'
        }
      }
    }
  },

  computed: {},
  created() {
    console.log()
    this.id = this.$route.query.id
    if (this.id) {
      this.getStudentLeaveInfo(this.id)
    }
  },
  components: {
    'v-render-form': () => import('components/content/homeFind/RenderForm.vue')
  },
  methods: {
    ...mapActions('user', [ADDSTUDENTLEAVE_ACTION]),
    async getStudentLeaveInfo(id) {
      try {
        const data = await getStudentLeaveInfo(id)
        // this.roles = data.data.roleList
      } catch (error) {}
    },
    async request({ keys, refs }) {
      const data = {}
      const CREATE_BY_ID = 'createById'
      const ID = 'id'
      keys.forEach((key, index) => {
        data[key] = refs[key][0].value
      })
      this.userInfo = JSON.parse(localStorage.getItem('user'))
      data[CREATE_BY_ID] = this.userInfo.userId
      console.log(this.userInfo)
      data[ID] = this.id
      let result = parseFormData(data)
      result = parseJsonData(result)
      console.log(result)
      this[ADDSTUDENTLEAVE_ACTION](result).then(res => {
        if (res.data.code !== 200) {
          this.$q.notify({
            message: res.data.msg,
            timeout: 1500
          })
        } else {
          this.$q.notify({
            message: '添加成功',
            timeout: 1500
          })
          // this.$router.push({
          //   path: '/'
          // })
        }
      })
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
