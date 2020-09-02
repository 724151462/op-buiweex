<template>
  <div>
    <slot></slot>
    <div class="app-con">
      <div class="app-wrapper" v-for="(item, index) in appList" :key="index">
        <bui-image class="app-img" :src="appIcon(item)" width="70px" height="70px"></bui-image>
        <text class="app-name">{{item.name}}</text>
        <div class="app-badge" v-if="item.num">
          <text class="badge-bum">{{item.num}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appList: [{ name: 1 }],
    };
  },
  methods: {
    appIcon(item) {
      return `/image/${item.icon}.png`;
    },
  },
  watch: {
    sourceData: {
      handler(val) {
        console.log(val);
        this.appList = val;
      },
      immediate: true,
    },
  },
  props: {
    sourceData: {
      type: Array,
      default: [],
    },
  },
  mounted() {},
};
</script>

<style scoped>
.app-con {
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ffffff;
  margin-bottom: 20px;
}
.app-wrapper {
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  width: 187px;
  position: relative;
}
.app-name {
  font-size: 24px;
}
.app-badge{
  position: absolute;
  top: -10px;
  right: 50px;
  height: 30px;
  width: 30px;
  background-color: #F85669;
  border-radius: 50px;
}
.badge-bum{
  color: #ffffff;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  width: 30px;
  text-align: center;
}
</style>
