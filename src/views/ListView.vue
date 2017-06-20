<template>
  <div class="wrapper">
    <div>
      <ListHeader @leftEmit="slideShow()" @rightEmit="channelSlide()" :titleInfo="'最新'"></ListHeader>
      <div v-if="this.$store.state.isRefresh ? false : true" class="channel-list-container">
        <text :class="[ this.$store.state.channelName === '最新' ? 'channel-select':'' ]" @click="tabChannel('latest')" class="channel-item-info">最新</text>
        <text :class="[ this.$store.state.channelName === '最热' ? 'channel-select':'' ]" @click="tabChannel('hot')" class="channel-item-info">最热</text>
      </div>
      <list ref="list" loadmoreoffset="50">
        <refresh @refresh="fetchData('latest')" :display="this.$store.state.isRefresh ? 'show' : 'hide'">
          <text class="refresh-info">正在加载 ...</text>
        </refresh>
        <cell @click="gotoItem()" class="list-single-cell" v-for="item in this.$store.state.listInfo">
          <div>
            <div class="cell-header-container">
              <text class="cell-content">{{item.title}}</text>
              <image :src="'http:' + item.member.avatar_mini " class="cell-avatar"></image>
            </div>
            <div class="cell-info-container">
              <text v-if="item.top" class="top-tag">置顶</text>
              <text class="time-info">{{ item.last_modified | getLastTimeStr(item.last_modified) }}</text>
              <div class="cell-block"></div>
              <div class="cell-end">
                <text class="auther-info">{{item.member.username}}</text>
                <text class="channel-info">{{item.node.title}}</text>
              </div>
            </div>
          </div>
        </cell>
      </list>
      <div ref="slideMask" class="mask"></div>
      <div v-if="isSlide" @click="slideHide()" class="mask mask-blcok"></div>
      <div ref="slideMenu" class="slide-list-container">
        <div class="slide-list-header">
          <image class="slide-header-icon" src="https://ooo.0o0.ooo/2017/06/19/594781900d2b2.png"></image>
        </div>
        <div class="slide-list-main">
          <div class="slide-list-item">
            <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/19/59477d6c90140.png"></image>
            <text class="slide-list-info">最新</text>
          </div>
          <div class="slide-list-item">
            <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/19/594780e7ea2b1.png"></image>
            <text class="slide-list-info">最热</text>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import utils from '../common/utils.js'
import ListHeader from '../components/ListHeader.vue'
const animation = weex.requireModule('animation')
export default {
  components: {
    ListHeader
  },
  data() {
    return {
      isSlide: false,
      isChannelShow: false
    }
  },
  filters: {
    getLastTimeStr(time, isFromNow) {
      return utils.getLastTimeStr(time, isFromNow);
    }
  },
  methods: {
    tabChannel(type) {
      return new Promise((resolve, reject) => {
        resolve()
        this.channelSlide()
      }).then(() => {
        this.fetchData(type)
      })
    },
    slideShow(e) {
      let maskEl = this.$refs.slideMask
      let slideEl = this.$refs.slideMenu
      animation.transition(maskEl, {
        styles: {
          opacity: 0.6
        },
        duration: 200,
      }, () => {
        this.isSlide = true
      })
      animation.transition(slideEl, {
        styles: {
          transform: 'translateX(450px)'
        },
        duration: 200,
      }, () => {

      })
    },
    slideHide() {
      this.isSlide = false
      let maskEl = this.$refs.slideMask
      let slideEl = this.$refs.slideMenu
      animation.transition(maskEl, {
        styles: {
          opacity: 0
        },
        duration: 200,
      }, () => {

      })
      animation.transition(slideEl, {
        styles: {
          transform: 'translateX(0)'
        },
        duration: 200,
      }, () => {

      })
    },
    channelSlide() {
      let listEl = this.$refs.list
      if (this.isChannelShow) {
        animation.transition(listEl, {
          styles: {
            transform: 'translateX(0)'
          },
          duration: 200,
        }, () => {

        })
        this.isChannelShow = false
        return
      }
      this.isChannelShow = true
      animation.transition(listEl, {
        styles: {
          transform: 'translateX(-300px)'
        },
        duration: 200,
      }, () => {

      })
    },
    gotoItem() {
    },
    fetchData(type) {
      console.log(type)
      this.$store.dispatch('FETCH_LIST_DATA', type)
    }
  },
  mounted() {
    this.fetchData('latest')
  }
}

</script>

<style scoped>
.channel-list-container {
  position: absolute;
  top: 100px;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: rgb(242, 242, 242)
}

.channel-item-container {
  width: 300px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 40px;
}

.channel-item-info {
  width: 300px;
  height: 80px;
  line-height: 80px;
  padding-left: 40px;
  font-size: 32px;
  color: rgb(126, 126, 126)
}

.channel-select {
  color: rgb(83, 187, 224);
  background-color: #e9e9e9
}

.refresh-info {
  width: 750px;
  color: #dddddd;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
}

.list-container {
  display: flex;
  border-color: #000000;
  box-shadow: -2px 0 4px #888888;
  border-left-width: 1;
  border-color: rgb(37, 37, 37);
}

.list-single-cell {
  padding: 20;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-color: rgb(191, 191, 191);
  border-bottom-width: 1px
}

.cell-header-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cell-content {
  flex: 1;
  lines: 1;
  font-size: 32;
  text-overflow: ellipsis
}

.cell-avatar {
  width: 70px;
  height: 70px;
  border-radius: 5px;
  padding: 10px;
}

.cell-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10;
  font-size: 26;
}

.time-info {
  color: rgb(156, 156, 156)
}

.top-tag {
  color: #ffffff;
  background-color: rgb(128, 196, 102);
  padding-left: 6;
  padding-right: 6;
  padding-top: 4;
  padding-bottom: 4;
  margin-right: 6;
  font-size: 26;
  border-radius: 4
}

.cell-block {
  flex: 1;
}

.cell-end {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.auther-info {
  color: rgb(126, 126, 126)
}

.channel-info {
  background-color: rgb(242, 242, 242);
  color: rgb(191, 191, 191);
  margin-left: 10px;
}

.slide-list-container {
  position: fixed;
  background-color: #ffffff;
  width: 450px;
  left: -450px;
  top: 0;
  bottom: 0;
  box-shadow: 10
}

.slide-list-header {
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 70px;
  padding-right: 20px;
  border-bottom-width: 1px;
  border-color: #dddddd;
  border-right-width: 1px;
}

.slide-header-icon {
  width: 100px;
  height: 100px;
}

.mask {
  position: fixed;
  opacity: 0;
  background-color: #000000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.mask-blcok {
  background-color: none
}

.slide-list-main {
  display: flex
}

.slide-list-item {
  width: 450px;
  height: 110px;
  padding-left: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row
}

.slide-list-info {
  font-size: 32px;
  padding-left: 50px;
  color: rgb(126, 126, 126)
}

.first-info {
  padding-left: 60px
}

.slide-info-icon {
  width: 50px;
  height: 50px
}
</style>