<template>
  <div class="news-tabs-container">
    <bui-tabbar
      background="#fff"
      selectedBackground="#fff"
      :tabItems="tabItems"
      showSelectedLine="true"
      @change="onItemChange"
      v-model="curTab"
      titleSize="30px"
    ></bui-tabbar>
    <slider class="slider" @change="onSliderChange" :index="curTab">
      <div class="slider-item">
        <div class="newslist-container">
          <div class="newslist-left">
            <text class="newslist-title">公安部直属机关大力推进节约型机关建设</text>
            <text class="newslist-time">2020-11-23 11:20:30</text>
          </div>
          <bui-image class="newslist-img" src="/image/news.png"></bui-image>
        </div>
        <div class="newslist-container">
          <div class="newslist-left">
            <text class="newslist-title">公安部直属机关大力推进节约型机关建设</text>
            <text class="newslist-time">2020-11-23 11:20:30</text>
          </div>
          <bui-image class="newslist-img" src="/image/news.png"></bui-image>
        </div>
      </div>
      <div class="slider-item">
        <text class="h1">tab1</text>
      </div>
      <div class="slider-item">
        <text class="h1">tab2</text>
      </div>
      <div class="slider-item">
        <text class="h1">tab3</text>
      </div>
    </slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTab: 1,
      tabItems: [
        {
          title: "公安要闻",
        },
        {
          title: "领导活动",
        },
        {
          title: "重要文件",
        }
      ],
    };
  },
  methods: {
    tabsChange(index) {
      this.curTab = index;
      this.$toast(this.curTab);
    },
    onItemChange(index) {},
    onSliderChange(e) {
      var index = e.index;
      this.curTab = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.news-tabs-container {
  padding: 20px;
  background-color: #fff;
}
.news-tabs-con {
  flex-direction: row;
}
.tab-active {
  border-bottom: 4px solid #0e6fff;
  color: #0e6fff;
}
.newslist-container {
  padding: 20px 0;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #f4f5f7;
}
.newslist-left {
  position: relative;
}
.newslist-title {
  width: 400px;
  font-size: 26px;
  color: #42526e;
}
.newslist-time {
  position: absolute;
  bottom: 0;
  font-size: 20px;
  color: #7a869a;
}
.newslist-img {
  height: 152px;
  width: 258px;
}
</style>