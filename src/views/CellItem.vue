<template>
  <div class="wrapper">
    <div class="header-container">
      <div class="header-btn-container" @click="back()">
        <image class="header-icon first-icon" src="https://ooo.0o0.ooo/2017/06/27/5951fd9341fa5.png"></image>
      </div>
      <text class="hedaer-info">详情</text>
      <div class="header-btn-container last-btn">
      </div>
    </div>
    <scroller>
      <refresh @refresh="fetchData" :display="this.$store.state.isRefresh ? 'show' : 'hide'">
        <text class="refresh-info">正在加载 ...</text>
      </refresh>
      <div class="main-info">
        <text class="info-title">{{detail.title}}</text>
        <div class="user-info-container">
          <div class="avatar-block">
            <image :src="'http:' + detail.member.avatar_mini" class="user-avatar"></image>
          </div>
          <text class="user-info">{{detail.member.username}}</text>
          <div class="cell-block"></div>
          <text class="other-info">{{ detail.last_modified | getLastTimeStr }},{{detail.replies}}条回复</text>
        </div>
        <text class="info-content">{{detail.content}}</text>
        <div class="comment-container">
          <div class="comment-item-container" :key="item.id" v-for="item in this.$store.state.listComment">
          <div class="item-left">
            <image class="comment-user-avatar" :src="'http:' + item.member.avatar_normal"></image>
          </div>
          <div class="item-right">
            <div class="item-right-top">
              <text class="comment-user-name">{{item.member.username}}</text>
              <text class="comment-time">{{item.last_modified | getLastTimeStr}}</text>
            </div>
            <text class="comment-info">{{item.content}}</text>
          </div>
        </div>
        </div>     
      </div>
    </scroller>
  </div>
</template>
<script>
export default {
  computed: {
    detail() {
      return this.$store.state.listDetail
    },
  },
  created() {
    console.log(this.$route.params.id)
    this.fetchData()
    this.$store.dispatch('FETCH_COMMENT_INFO', this.$route.params.id)
  },
  methods: {
    fetchData() {
      this.$store.dispatch('FETCH_DETAIL_INFO', this.$route.params.id)
    },
    back() {
      this.$router.back()
    }
  }
}
</script>
<style>
.header-container {
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
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #dddddd
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

.refresh-info {
  width: 750px;
  color: #dddddd;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
}

.main-info {
  padding: 20px;
  overflow: scroll
}

.info-title {
  flex: 1;
  lines: 1;
  font-size: 32px;
  text-overflow: ellipsis;
  font-weight: 500;
  margin-bottom: 30px;
}

.user-info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10;
  font-size: 28px;
}

.avatar-block {
  margin-right: 10px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 4px
}

.user-info {
  margin-left: 10px;
  color: rgb(126, 126, 126)
}

.cell-block {
  flex: 1
}

.other-info {
  font-size: 30px;
  color: rgb(156, 156, 156)
}

.info-content {
  font-size: 30px;
  color: rgb(126, 126, 126);
  line-height: 50px;
  margin-bottom: 30px;
}
.comment-container {
  margin-top: 20px;
}

.comment-item-container {
  display: flex;
  flex-direction: row;
}

.item-left {
  display: flex;
  align-items: flex-start;
  padding-top: 4px;
  padding-right: 20px
}

.comment-user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.item-right {
  padding-bottom: 15px;
}
.item-right-top {
  display: flex;
  flex-direction: row;
  padding-bottom: 3px;
}

.comment-user-name {
  margin-right: 10px;
  font-size: 28px
}

.comment-time {
  color: rgb(222, 222, 222);
  font-size: 26px;
}

.comment-info {
  line-height: 50px;
  font-size: 28px;
  color: rgb(126, 126, 126);
}
</style>




