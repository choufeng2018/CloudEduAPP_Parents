<template>
  <div class="form-group">
    <v-render-form :renderType="renderType" @request="request"></v-render-form>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import {
  GETUSEINFO_ACTION,
  ADDSTUDENT_ACTION
} from '../../../store/user/action-types.js'
import { getUserInfo } from '../../../service/user/user'

import { isRequired, withParam, phone } from 'assets/uitls/validate'
import { parseFormData, parseJsonData } from 'assets/uitls/parse'
export default {
  name: 'RenderForm',
  data() {
    return {
      form: null,
      userInfo: {},
      disable: false,
      renderType: {
        aidPerson: {
          model: '',
          type: 'text',
          placeholder: '紧急联系人',
          refName: 'aidPerson',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '紧急联系人不能为空')]
        },
        aidPhone: {
          model: '',
          type: 'text',
          placeholder: '紧急联系人联系方式',
          refName: 'aidPhone',
          addCloseIcon: 'close',
          rule: [
            val => isRequired(val, '紧急联系人联系方式不能为空'),
            val => withParam(val, 11, '手机号只能输入11位'),
            val => phone(val, '请正确输入手机号')
          ]
        },
        birthday: {
          model: '2020/03/04',
          type: 'text',
          placeholder: '出生日期',
          refName: 'birthday',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '选择出生日期')]
        },
        // gendel: {
        //   model: '',
        //   options: [
        //     { label: '男', value: 'boy' },
        //     { label: '女', value: 'girle' }
        //   ],
        //   placeholder: '性别',
        //   refName: 'gendel',
        //   type: 'gendel',
        //   addCloseIcon: 'close',
        //   rule: [val => isRequired(val, '选择性别')]
        // },
        name: {
          model: '',
          type: 'text',
          placeholder: '学生名称',
          refName: 'name',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '学生名称不能为空')]
        },
        school: {
          model: '',
          type: 'text',
          placeholder: '学生就读所在学校',
          refName: 'school',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '学生就读所在学校不能为空')]
        },
        schoolArea: {
          model: '',
          type: 'text',
          placeholder: '学生就读学校',
          refName: 'schoolArea',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '学生就读学校不能为空')]
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
    this.getUserInfo()
  },
  components: {
    'v-render-form': () => import('components/content/homeFind/RenderForm.vue')
  },
  methods: {
    ...mapActions('user', [ADDSTUDENT_ACTION]),
    async getUserInfo() {
      try {
        const data = await getUserInfo()
        this.userInfo = data.data.user
        console.log(this.userInfo)
        // this.roles = data.data.roleList
      } catch (error) {}
    },
    async request({ keys, refs }) {
      const data = {}
      const CREATE_BY_ID = 'createById'
      keys.forEach((key, index) => {
        data[key] = refs[key][0].value
      })
      data[CREATE_BY_ID] = this.userInfo.userId
      const result = parseFormData(data)
      console.log(parseJsonData(result))
      this[ADDSTUDENT_ACTION](parseJsonData(result)).then(res => {
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
