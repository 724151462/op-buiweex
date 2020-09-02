<template>
  <div class="scan-container">
    <bui-image class="back" src="/image/back.png"></bui-image>
    <div class="scan-type">
      <div :class="['type-item', curScanType == 0 ? 'item-active': '']" @click="selectType(0)">
        <bui-image src="/image/photo.png" class="item-img"></bui-image>
        <text class="item-text">照片</text>
      </div>
      <div :class="['type-item', curScanType == 1 ? 'item-active': '']" @click="selectType(1)">
        <bui-image src="/image/video.png" class="item-img"></bui-image>
        <text class="item-text">视频</text>
      </div>
      <div :class="['type-item', curScanType == 2 ? 'item-active': '']"@click="selectType(2)" >
        <bui-image src="/image/face.png" class="item-img"></bui-image>
        <text class="item-text">人脸</text>
      </div>
    </div>
    <div class="popup-type">
      <div style="align-items: center;height: 260px" v-if="showDropdown">
        <ul class="popup-list">
          <li @click="selectAddr(item)" :class="['addr-li', item.val == curAddr.val ? 'addr-active' : '']" v-for="(item, index) in addrList" :key="index">
            <div class="checkbox">
              <bui-icon v-if="item.val == curAddr.val" name="ion-checkmark-round" color="#0E6FFF" size=40></bui-icon>
            </div>
            <text class="li-addr-name">{{item.name}}</text>
          </li>
        </ul>
        <bui-icon name="ion-android-arrow-dropdown" color="#303033" style="margin-top: -20px" :size="50"></bui-icon>
      </div>
      <div class="cur-addr" @click="open">
        <text class="addr-name">{{curAddr.name}}</text>
        <bui-icon style="margin-right: 5px" v-if="showDropdown == false" name="ion-android-arrow-dropdown" :size="50"></bui-icon>
        <bui-icon style="margin-right: 5px" v-else name="ion-android-arrow-dropup" :size="50"></bui-icon>
      </div>
    </div>
    <div class="type-item type-item-photo">
        <bui-image src="/image/xiangce.png" class="item-img"></bui-image>
        <text class="item-text">相册</text>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDropdown: false,
      curScanType: 0,
      curAddr: {
        name: ''
      },
      addrList: [
        {name: '（福州）标准地址应用', val: 1},
        {name: '（系统）二维码识别内容', val: 2},
        {name: '（省厅）标准地址应用', val: 3},
        {name: '（默认）标准地址APP', val: 4},
      ]
    }
  },
  methods: {
    selectAddr (item) { 
      this.curAddr = item
      this.showDropdown = false
    },
    open() {
      this.showDropdown = !this.showDropdown;
    },
    selectType(val) {
      this.curScanType = val
    }
  },
  
  created () {
    this.curAddr = this.addrList[0]
  },
}
</script>

<style scoped>
.back{
  height: 60px;
  width: 80px;
}
.scan-type{
  position: absolute;
  bottom: 20px;
  left: 20px;
  /* background-color: red; */
}
.type-item{
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100px;
  width: 100px;
  border-radius: 200px;
  background-color: rgba(0, 0, 0, .5);
  margin: 10px 0
}
.type-item-photo{
  position: absolute;
  right: 20px;
  bottom: 40px;
}
.item-active{
  background-color: #0E6FFF;
}
.item-img{
  height: 40px;
  width: 40px;
}
.item-text{
  color: #fff;
  font-size: 20px;
}
.popup-type{
  position: absolute;
  bottom: 20px;
  left: 200px;
}
.cur-addr{
  background-color: rgba(0, 0, 0, .8);
  border-radius: 50px;
  width: 400px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.addr-li{
  flex-direction: row;
  align-items: center;
  height: 60px;
}
.addr-active{
  background-color: #59595D;
}
.li-addr-name,.addr-name{
  color: #fff;
}
.popup-list{
  width: 400px;
  background-color: #303033;
  overflow: hidden;
  border-radius: 20px;
}
.checkbox{
  width: 30px;
  height: 50px;
}
</style>