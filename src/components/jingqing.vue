<template>
  <div>
    <div class="title-wrapper">
      <text class="title-count">警情动态(3)</text>
    </div>
    <div class="jq-container">
      <div class="jq-wrapper">
        <div class="jq-title">
          <bui-image src="/image/t-bg1.png" class="title-bg">
            
          </bui-image>
					<text class="title-text">线索流转</text>
        </div>
        <div class="jq-main">
          <div class="main-left">
            <text>2020-11-10 11:44:23</text>
            <text class="main-content">这是内容</text>
          </div>
          <!-- <div class="main-right">
					<van-button class="handle-btn" color="#42526E" plain size="mini">忽略</van-button>
					<van-button class="ignore-btn" type="info" size="mini">处理</van-button>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { WxcButton } from 'weex-ui';
// import {Button} from 'Vant'
export default {
  data() {
    return {};
  },
  components: {
    // WxcButton
    // Button
  },
  props: {
    jqList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.title-wrapper {
  background-color: #fff;
  padding: 20px;
}
.title-count {
  font-size: 30px;
  font-weight: bold;
}
.jq-container {
  margin-bottom: 20px;
  padding: 20px;
  padding-top: 0;
  background-color: #fff;
}
.jq-wrapper {
  flex-direction: column;
  background-color: #f4f5f7;
  border-radius: 20px;
  padding: 20px;
}
.jq-title {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;
  height: 50px;
  margin-top: -20px;
  margin-left: -20px;
}
.title-bg {
  position: relative;
  height: 50px;
  width: 180px;
}
.title-text {
  position: absolute;
  color: #fff;
  top: 3px;
  left: 20px;
  font-size: 30px;
}
.jq-wrapper > .jq-main {
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.main-left {
  color: #b7bdce;
}
.main-left > text {
  color: #7a869a;
  font-size: 18px;
}
.main-content {
  color: #42526e;
  font-size: 20px;
}
.main-right {
  flex-direction: row;
  align-items: center;
}
.handle-btn {
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #bec3d2 !important;
}
.handle-btn > text {
  color: #42526e;
  font-size: 14px;
  padding: 0 10px;
}
.ignore-btn {
  border-radius: 10px;
}
.ignore-btn > text {
  color: #fff;
  font-size: 14px;
  padding: 0 10px;
}
.main-right > button {
  margin-right: 6upx;
}
</style>
