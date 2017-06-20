<template>
    <div class="header-container">
        <div class="header-btn-container" @click="leftAction()">
            <image class="header-icon first-icon" src="https://ooo.0o0.ooo/2017/06/19/594785476b9e2.png"></image>
        </div>
        <text class="hedaer-info">{{titleInfo}}</text>
        <div class="header-btn-container last-btn" @click="rightAction()">
            <image class="header-icon" src="https://ooo.0o0.ooo/2017/06/19/59478507badfe.png"></image>
        </div>
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
.last-btn{
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
</style>
<script>
export default {
    props: ['titleInfo'],
    methods: {
        leftAction() {
            this.$emit('leftEmit')
        },
        rightAction() {
            this.$emit('rightEmit')
        }
    }
}
</script>

