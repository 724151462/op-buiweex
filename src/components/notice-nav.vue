<template>
  <div class="notice-container">
    <div class="notice-wrapper">
      <div class="notice-left">
        <bui-image class="notice-img" resize="contain" src="/image/notice.png"></bui-image>
        <div class="msg-box">
					<slider class="slider" interval="3000" auto-play="true">
						<div class="frame" v-for="(msg, index) in noticeList" :key="index">
							<text>{{msg.content}}</text>
						</div>
					</slider>
				</div>
      </div>
      <bui-image style="height: 70px;width: 70px" class="arrow" src="/image/arrow.png"></bui-image>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
  data() {
    return {
    };
  },
  created() {
    setInterval(this.scroll, 1000);
  },

  props: {
    noticeList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.notice-container {
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
}
.notice-img {
  width: 208px;
  height: 80px;
}
text {
  font-size: 24px;
}
.notice-wrapper {
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}
.notice-left {
  align-items: center;
  flex-direction: row;
}
.notice-img {
  width: 200px;
	height: 70px;
}
.arrow {
  height: 50px;
  width: 50px;
}

.msg-box{
    width: 470px;
    height: 32px;
    overflow: hidden;
    // padding-left: 30px;
}
</style>
