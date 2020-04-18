<template>
  <div class="form-group">
    <q-form @submit.prevent="submitForm">
      <div :key="index" class="form-group-module" v-for="(value, key, index) in renderType">
        <q-input
          :label="value.placeholder"
          :ref="value.refName"
          :rules="value.rule"
          :type="value.type"
          class="form-group-item no-shadow"
          color="blank"
          outlined
          v-if="value.type==='text'"
          v-model="value.model"
        >
          <template v-slot:append v-if="value.refName==='birthday'">
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="value.model" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-select
          :label="value.placeholder"
          :ref="value.refName"
          :rules="value.rule"
          :type="value.type"
          class="form-group-item no-shadow"
          color="blank"
          outlined
          v-if="value.options"
          v-model="value.model"
          :options="value.options"
        />

        <q-btn
          :color="value.color"
          :text-color="value.textColor"
          class="login__submit"
          dark-percentage
          no-caps
          type="submit"
          v-close-popup
          v-if="!value.type"
        >{{ value.label }}</q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RenderForm',
  data() {
    return {
      disable: false
    }
  },
  props: {
    renderType: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters('user', ['authStatus'])
  },
  created() {},
  methods: {
    submitForm() {
      const values = Object.values(this.renderType)
      const collectHasError = []
      values.pop()
      values.forEach(item => {
        this.$refs[item.refName][0].validate()
        collectHasError.push(this.$refs[item.refName][0].hasError)
      })
      const filterHasError = collectHasError.filter(item => item === true)
      console.log(collectHasError)
      if (filterHasError.length <= 0) this.submitTask()
    },
    submitTask() {
      const keys = Object.keys(this.$refs)
      this.$emit('request', { keys, refs: this.$refs })
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
