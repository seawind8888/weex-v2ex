<template>
  <div class="wrapper">
    <div ref="slide" v-if="isSlide" class="slide-list-container">
      <div class="slide-list-header">
        <image class="slide-logo" src="http://tz88.com.cn/imgs/logo.png"></image>
      </div>
      <div class="slide-list-main">
        <div @click="tabChannel('all')" class="slide-list-item">
          <text class="slide-list-info">最新</text>
        </div>
        <div @click="tabChannel('job')" class="slide-list-item">
          <text class="slide-list-info">招聘</text>
        </div>
        <div @click="tabChannel('ask')" class="slide-list-item">
          <text class="slide-list-info">问答</text>
        </div>
        <div @click="tabChannel('good')" class="slide-list-item">
          <text class="slide-list-info">热门</text>
        </div>
      </div>
    </div>
    <div v-else class="slide-list-container"></div>
    <div>
      <ListHeader @pushEmit="slideList" :titleInfo="'最新'"></ListHeader>
    </div>
  </div>
</template>

<style scoped>
.slide-list-container {
  position: absolute;
  width: 500px;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 10
}

.slide-list-header {
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #343434;
}
</style>

<script>
import ListHeader from '../components/ListHeader.vue'
const animation = weex.requireModule('animation')
export default {
  components: {
    ListHeader
  },
  data() {
    return {
      isSlide: false
    }
  },
  methods: {
    tabChannel(type) {

    },
    slideList() {
      var self = this
      var pushEl = self.$refs.slide
      self.isSlide = true
      animation.transition(pushEl, {
        styles: {
          transform: 'translateX(500px)'
        },
        duration: 200,
      }, () => {

      })
    },
  }
}

</script>