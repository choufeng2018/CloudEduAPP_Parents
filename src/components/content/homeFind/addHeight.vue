<template>
  <div class="form-group">
    <q-uploader :url="getUrl" />
    <v-render-form :renderType="renderType" @request="request"></v-render-form>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import {
  GETUSEINFO_ACTION,
  ADDSTUDENTHEIGHT_ACTION,
  EDITSTUDENTHEIGHT_ACTION,
  GETSTUDENTINFO_ACTION
} from '../../../store/user/action-types.js'
import {
  getUserInfo,
  getStudentHwInfo,
  getSignedUrl
} from '../../../service/user/user'
import { isRequired, withParam, phone } from 'assets/uitls/validate'
import { parseFormData, parseJsonData } from 'assets/uitls/parse'
export default {
  name: 'RenderForm',
  data() {
    return {
      form: null,
      disable: false,
      renderType: {
        height: {
          model: '',
          type: 'text',
          placeholder: '身高',
          refName: 'height',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '身高不能为空')]
        },
        weight: {
          model: '',
          type: 'text',
          placeholder: '体重',
          refName: 'weight',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '体重不能为空')]
        },
        createTime: {
          model: '2020-03-04',
          type: 'text',
          placeholder: '测量时间',
          refName: 'createTime',
          addCloseIcon: 'close',
          rule: [val => isRequired(val, '选择测量时间')]
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
      this.getStudentHwInfo(this.id)
    }
  },
  components: {
    'v-render-form': () => import('components/content/homeFind/RenderForm.vue')
  },
  methods: {
    ...mapActions('user', [ADDSTUDENTHEIGHT_ACTION]),
    ...mapActions('user', [EDITSTUDENTHEIGHT_ACTION]),
    getUrl(file) {
      console.log(file[0])
      const formData = new FormData()
      formData.append('file', file[0])
      formData.append('type', 'info')
      const response = getSignedUrl(formData) // 你的API向一个计算的服务器请求调用
      console.log(response)
    },
    async getStudentHwInfo(id) {
      try {
        const data = await getStudentHwInfo(id)
        if (data.data.code === 200) {
          this.form = data.data.data
        }
        console.log(this.form)
      } catch (error) {}
    },
 
    async getSignedUrl(file) {
      try {
     
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
      let result = parseFormData(data)
      result = parseJsonData(result)
      console.log(result)
      this[EDITSTUDENTHEIGHT_ACTION](result).then(res => {
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
