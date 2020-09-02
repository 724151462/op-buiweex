<template>
  <div>
    <div class="title-wrapper">
      <text class="title-count">快捷功能</text>
    </div>
    <div class="q-container">
      <div class="q-wrapper">
        <div class="q-content">
          <image @click="paiClick" class="q-img" src="/image/pai.png" alt />
        </div>
        <div class="q-content">
          <image @click="readClick" class="q-img" src="/image/read.png" alt />
        </div>
        <div class="q-content">
          <image @click="scanClick" class="q-img" src="/image/scan1.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    paiClick() {
      let url = this.$getContextPath() + "/paiyipai.js";
      this.$push(url);
    },
    readClick() {
      this.$toast("功能开发中，敬请期待...")
    },
    scanClick() {
      let url = this.$getContextPath() + "/scan.js";
      this.$push(url);
    }
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
.text-area {
  justify-content: center;
}

.title {
  font-size: 36px;
  color: #8f8f94;
}
.q-container {
  background-color: #fff;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.q-wrapper {
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
}
.q-img {
  height: 80px;
  width: 195px;
}
</style>