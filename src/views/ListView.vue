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
      <list class="list" @loadmore="fetchMore" loadmoreoffset="50">
        <refresh @refresh="fetchData('latest')" :display="this.$store.state.isRefresh ? 'show' : 'hide'">
          <text class="refresh-info">正在加载 ...</text>
        </refresh>
        <cell class="list-single-cell" v-for="item in this.$store.state.listInfo">
          <div @click="gotoItem(item.id)">
            <div class="cell-header-container">
              <text class="cell-content">{{item.title}}</text>
              <image :src="'http:' + item.member.avatar_mini " class="cell-avatar" ></image>
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
      isSlide: false
    }
  },
  filters: {
    getLastTimeStr(time, isFromNow) {
      return utils.getLastTimeStr(time, isFromNow);
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
    fetchMore () {

    },
    fetchData (type) {
        this.$store.dispatch('FETCH_LIST_DATA', type)
    }
  },
  mounted () {
    this.fetchData('latest')
  }
}

</script>

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

</style>