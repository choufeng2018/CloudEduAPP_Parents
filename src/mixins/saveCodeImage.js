export default {
  methods: {
    changeCodeImage(data) {
      this.$set(this.renderType.code, 'img', data.img)
      this.$set(this.renderType.code, 'uuid', data.uuid)
    }
  }
}
