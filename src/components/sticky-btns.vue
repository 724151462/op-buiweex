<template>
    <div class="banner-menu">
      <div class="banner-wrapper">
        <bui-image @click="toTask" style="height: 50px; width: 50px" class="bimg" src="/image/scan.png"></bui-image>
        <text @click="toTask" class="btn-item">待办任务</text>
      </div>
      <div class="banner-wrapper">
        <bui-image  @click="toSchedule" style="height: 50px; width: 50px" class="bimg" src="/image/schedule.png"></bui-image>
        <text  @click="toSchedule" class="btn-item">日程安排</text>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    toTask() {
      let url = this.$getContextPath() + "/todo-task.js";
      this.$push(url);
    },
    toSchedule() {
      let url = this.$getContextPath() + "/schedule.js";
      this.$push(url);
    },
  },
}
</script>

<style scoped>
.banner-menu {
  position: absolute;
  right: 20px;
  top: 30px;
  align-items: center;
  flex-direction: row;
}
.banner-wrapper {
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.btn-item {
  font-size: 18px;
  color: #fff;
}
</style>