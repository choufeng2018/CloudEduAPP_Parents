<template>
  <div class="form-group">
    <v-render-form :renderType="renderType" @request="request"></v-render-form>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import {
  GETUSEINFO_ACTION,
  ADDSTUDENTSCORE_ACTION,
  GETSTUDENTINFO_ACTION
} from '../../../store/user/action-types.js'
import { getUserInfo, getStudentScoreInfo } from '../../../service/user/user'
import { isRequired, withParam, phone } from 'assets/uitls/validate'
import { parseFormData, parseJsonData } from 'assets/uitls/parse'
export default {
  name: 'RenderForm',
  data() {
    return {
      form: null,
      disable: false,
      courseList: [],
      renderType: {
        course: {
          model: '',
          placeholder: '科目',
          refName: 'course',
          options: [],
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '科目不能为空')]
        },
        examtime: {
          model: '2020-03-04 12:12:12',
          type: 'text',
          placeholder: '考试时间',
          refName: 'examtime',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '选择考试时间')]
        },
        mark: {
          model: '56',
          type: 'text',
          placeholder: '分数',
          refName: 'mark',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '填写分数')]
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
    this.id = this.$route.query.id
    if (this.id) {
      this.getStudentScoreInfo(this.id)
    }
  },
  components: {
    'v-render-form': () => import('components/content/homeFind/RenderForm.vue')
  },
  methods: {
    ...mapActions('user', [ADDSTUDENTSCORE_ACTION]),
    async getStudentScoreInfo(id) {
      try {
        const data = await getStudentScoreInfo(id)
        // this.roles = data.data.roleList
        if (data.status === 200) {
          this.courseList = data.data.courseList
          this.courseList.forEach(item => {
            item.label = item.name
            item.value = item.id
          })
          this.renderType.course.options = this.courseList
          console.log(this.courseList)
        }
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
      data[ID] = this.id
      console.log(data)
      if (data.course) {
        data['courseId'] = data.course.value
        data['examtname'] = data.course.label
      }
      delete data.course
      let result = parseFormData(data)
      result = parseJsonData(result)
      console.log(result)
      this[ADDSTUDENTSCORE_ACTION](result).then(res => {
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
