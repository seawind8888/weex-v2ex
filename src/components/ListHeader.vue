<template>
    <div class="header-container">
        <image class="header-icon" @click="pushListEmit()" src="https://ooo.0o0.ooo/2017/06/16/5943a56ec91dd.png"></image>
        <text class="hedaer-info">{{titleInfo}}</text>
        <image class="header-icon" src="http://tz88.com.cn/imgs/edit.png"></image>
    </div>
</template>
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
.hedaer-info {
    color: #000000;
    text-align: center;
    line-height: 100px;
    flex:1;
    font-size: 32
}
.header-icon {
    width: 50px;
    height: 50px
}
</style>
<script>
    export default {
        props: ['titleInfo'],
        methods: {
            pushListEmit() {
                this.$emit('pushEmit')
            }
        }
    }
</script>

