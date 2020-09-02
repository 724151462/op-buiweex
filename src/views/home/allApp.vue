<template>
  <div>
    <bui-image src="/image/appBg.png" class="app-bg"></bui-image>
    <div class="search-myapp">
      <div class="app-search">
        <bui-image class="back" src="/image/back.png"></bui-image>
        <div>
          <input class="s-input" type="text" placeholder="搜索" />
        </div>
      </div>
      <div class="app-mine">
        <div class="mine-title">
          <text>我的应用</text>
          <text>编辑</text>
        </div>
        <div class="mine-content">
          <div v-for="(item, index) in myapps" :key="index">
            <bui-image :src="appIcon(item)" width="70px" height="70px"></bui-image>
          </div>
        </div>
      </div>
    </div>
    <scroller></scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myapps: [
        {
          id: 4,
          name: "境外人员采集",
          icon: "m-jwry",
        },
        {
          id: 5,
          name: "移动交管",
          icon: "m-ydjg",
        },
        {
          id: 6,
          name: "线索采集",
          icon: "m-xscj",
        },
        {
          id: 7,
          name: "合成作战",
          icon: "m-hczz",
        },
        {
          id: 8,
          name: "全部",
          icon: "m-all",
        },
      ],
    };
  },
  methods: {
    appIcon(item) {
      return `/image/${item.icon}.png`;
    },
  },
  created() {},
};
</script>

<style>
.search-myapp {
  
}
.app-search {
  margin-top: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.app-bg{
  height: 300px;
  width: 750px;
  position: absolute;
  top: 0;
  left: 0;
}
.back{
  height: 40px;
  width: 60px;
}
.s-input {
  background-color: rgba(255, 255, 255, .5);
  color: #fff;
  width: 600px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  margin-left: 10px;
}
.app-mine {
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
}
.mine-title {
  padding: 10px;
  flex-direction: row;
}
.mine-content {
  flex-direction: row;
}
</style>