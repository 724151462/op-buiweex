<template>
  <div class="task-list">
    <app-content :sourceData="appList"></app-content>
  </div>
</template>

<script>
import appContent from '@/components/app-content'
export default {
  data() {
    return{
      appList: [{
          id: 1,
          name: "云课堂",
          icon: "m-ykt",
          num: 13
        },
        {
          id: 2,
          name: "移动OA",
          icon: "m-OA",
          num: 4
        },
        {
          id: 3,
          name: "邮件助手",
          icon: "m-yjzs",
          num: 6
        },]
    }
  },
  components: {
    appContent
  },
  created () {
  },

}
</script>

<style scoped>
.task-list{
  margin-top: 20px;
}
</style>