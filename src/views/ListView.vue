<template>
  <div class="wrapper">
    <div :class="[platForm === 'Web'?'web-header':'']" class="header-container">
      <div class="header-btn-container" @click="slideShow()">
        <image class="header-icon first-icon" src="https://ooo.0o0.ooo/2017/06/19/594785476b9e2.png"></image>
      </div>
      <text class="hedaer-info">{{channelName}}</text>
      <div class="header-btn-container last-btn" @click="channelSlide()">
        <image class="header-icon" src="https://ooo.0o0.ooo/2017/06/19/59478507badfe.png"></image>
      </div>
    </div>
    <div ref="channel" class="channel-list-container">
      <text :class="[ channel === 'latest' ? 'channel-select':'' ]" @click="tabChannel('latest')" class="channel-item-info">最新</text>
      <text :class="[ channel === 'hot' ? 'channel-select':'' ]" @click="tabChannel('hot')" class="channel-item-info">最热</text>
      <text :class="[ channel === 'tech' ? 'channel-select':'' ]" @click="tabChannel('tech')" class="channel-item-info">技术</text>
      <text :class="[ channel === 'jobs' ? 'channel-select':'' ]" @click="tabChannel('jobs')" class="channel-item-info">酷工作</text>
      <text :class="[ channel === 'programmer' ? 'channel-select':'' ]" @click="tabChannel('programmer',true)" class="channel-item-info">程序员</text>
      <text :class="[ channel === 'ideas' ? 'channel-select':'' ]" @click="tabChannel('jobs')" class="channel-item-info">奇思妙想</text>
      <text :class="[ channel === 'qna' ? 'channel-select':'' ]" @click="tabChannel('qna')" class="channel-item-info">问与答</text>
      <text :class="[ channel === 'linux' ? 'channel-select':'' ]" @click="tabChannel('linux')" class="channel-item-info">Linux</text>
      <text :class="[ channel === 'php' ? 'channel-select':'' ]" @click="tabChannel('php')" class="channel-item-info">PHP</text>
      <text :class="[ channel === 'python' ? 'channel-select':'' ]" @click="tabChannel('python')" class="channel-item-info">Python</text>
    </div>
    <list :class="platForm === 'Web'?'list-container': ''"  ref="list" loadmoreoffset="50">
      <refresh @refresh="fetchData()" :display="refresh ? 'show' : 'hide'">
        <text class="refresh-info">正在加载 ...</text>
      </refresh>
      <cell @click="goToItem(item.id)" :key="item.id" class="list-single-cell" v-for="item in this.$store.state.listInfo">
        <div>
          <div class="cell-header-container">
            <text class="cell-content">{{item.title}}</text>
            <image :src="'http:' + item.member.avatar_normal " class="cell-avatar"></image>
          </div>
          <div class="cell-info-container">
            <text v-if="item.top" class="top-tag">置顶</text>
            <text class="time-info">{{ item.last_modified | getLastTimeStr }}</text>
            <div class="cell-block"></div>
            <div class="cell-end">
              <text class="auther-info">{{item.member.username}}</text>
              <text class="channel-info">{{item.node.title}}</text>
            </div>
          </div>
        </div>
      </cell>
    </list>
    <div v-if="platForm === 'android'"  ref="slideMask" class="mask"></div>
    <div v-if="platForm === 'iOS'" @click="slideHide()"  ref="slideMask" class="mask"></div>
    <div v-if="platForm === 'Web' && isSlideShow" @click="slideHide()" ref="slideMask" class="mask"></div>
    <!--<div v-if="isSlide"  class="mask mask-blcok"></div>-->
    <div ref="slideMenu" class="slide-list-container">
      <div class="slide-list-header">
        <image class="slide-header-icon" src="https://ooo.0o0.ooo/2017/06/19/594781900d2b2.png"></image>
      </div>
      <div class="slide-list-main">
        <div @click="goToListItem()" bubble="false" class="slide-list-item">
          <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/19/59477d6c90140.png"></image>
          <text class="slide-list-info">最新</text>
        </div>
        <div @click="goToListItem()" bubble="false" class="slide-list-item">
          <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/20/5948d51835a86.png"></image>
          <text class="slide-list-info">分类</text>
        </div>
        <div @click="goToListItem()" bubble="false" class="slide-list-item">
          <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/20/5948d518223b1.png"></image>
          <text class="slide-list-info">节点</text>
        </div>
        <div @click="goToListItem()" bubble="false" class="slide-list-item">
          <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/20/5948d5184aa2f.png"></image>
          <text class="slide-list-info">收藏</text>
        </div>
        <div @click="goToListItem()" bubble="false" class="slide-list-item">
          <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/20/5948d51834c2c.png"></image>
          <text class="slide-list-info">提醒</text>
        </div>
        <div @click="goToListItem()" bubble="false" class="slide-list-item">
          <image style="width:40px;height:40px" src="https://ooo.0o0.ooo/2017/06/20/5948d51839490.png"></image>
          <text class="slide-list-info">个人</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
var modal = weex.requireModule('modal')
export default {
  data() {
    return {
      isSlideShow: false,
      isMaskShow: false,
      isChannelShow: false,
      platForm: weex.config.env.platform
    }
  },
  computed: {
    channel() {
      return this.$store.state.channel
    },
    channelName() {
      return this.$store.state.channelName
    },
    refresh() {
      return this.$store.state.isRefresh
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
      this.isSlideShow = true
      animation.transition(maskEl, {
        styles: {
          opacity: 0.6
        },
        duration: 200,
      }, () => {

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
        this.isSlideShow = false
      })
    },
    channelSlide() {
      let listEl = this.$refs.list
      let channelEl = this.$refs.channel
      console.log(1)
      if (this.isSlideShow) {
        
        this.slideHide()
        return
      }
      if (this.isChannelShow) {
        animation.transition(listEl, {
          styles: {
            transform: 'translateX(0)'
          },
          duration: 200,
        }, () => {

        })
        animation.transition(channelEl, {
          styles: {
            transform: 'translateX(300px)'
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
      animation.transition(channelEl, {
        styles: {
          transform: 'translateX(0)'
        },
        duration: 200,
      }, () => {

      })
    },
    goToListItem() {
      modal.toast({
        message: '待开发',
        duration: 0.3
      })
    },
    goToItem(id) {
      if (this.isSlideShow) {
        this.slideHide()
        return
      }
      if (this.isChannelShow) {
        this.channelSlide()
        return
      }
      this.$router.push(`/show/${id}`)
    },
    fetchData(type) {
      this.$store.dispatch('FETCH_LIST_DATA', type)
    }
  },
  mounted() {
    this.fetchData('latest')
  }
}

</script>

<style scoped>
.header-container {
  height: 100px;
  width: 750px;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #dddddd
}
.web-header {
  position: fixed;
  z-index: 8
}


.last-btn {
  align-items: flex-end;
}

.hedaer-info {
  color: #000000;
  text-align: center;
  line-height: 100px;
  flex: 1;
  font-size: 32
}

.header-btn-container {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.header-icon {
  width: 40px;
  height: 40px
}

.first-icon {
  width: 36px;
  height: 36px;
}


.channel-list-container {
  position: absolute;
  top: 100px;
  bottom: 0;
  right: 0;
  width: 300px;
  transform: translateX(300px);
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
  margin-top: 100px;
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
  font-size: 30px;
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
  box-shadow: 10;
  z-index: 10000;
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
  z-index: 9999
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