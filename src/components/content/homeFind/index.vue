<template>
  <div class="home-tabs">
    <div :key="index" v-for="(item, index) in fidIconList" class="icon-posi">
      <div class="nearby-stores-card--img" @click="handleGoto(item.url)">
        <img :src="item.imgUrl" alt class="img-icon" />
        <p class="label-title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTabs',
  data() {
    return {
      fidIconList: [
        {
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '添加身高体重',
          url: 'heightList'
        },
        {
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '添加成绩',
          url: 'gradeList'
        },
        {
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '请假',
          url: 'leaveList'
        },
        {
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '錯題本',
          url: 'mistakeList'
        },
        {
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '投诉',
          url: 'complaintsList'
        },
        {
          imgUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
          title: '作业',
          url: 'hworkList'
        }
      ]
    }
  },
  methods: {
    handleGoto(url) {
      this.$router.push({
        path: '/' + url
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.home-tabs {
  width: 100%;
  flex-flow: wrap;
  padding: 0 19px;
  margin-top: 16px;
  display: flex;
  position: absolute;
  top: 30%;

  .icon-posi {
    position: relative;
    margin: 0 auto;

    .nearby-stores-card--img {
      width: 86px;
      margin-left: 10px;

      .img-icon {
        position: relative;
        left: 16px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }

      .label-title {
        color: #333;
        font-size: 12px;
        text-align: center;
      }
    }
  }
}
</style>

