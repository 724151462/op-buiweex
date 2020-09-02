<template>
  <div class="calendar-header clear">
    <div class="calendar-box" v-if="this.headOptions.type == 'combination'">
      <div class="calendar-content" :style="{'text-align': this.headStyle.combination}">
        <text class="calendar-prev" @click="handlePrevMonth">last</text>
        <text class="calendar-headDate"> {{this.headOptions.date}} </text>
        <text class="calendar-next" @click="handleNextMonth">next</text>
      </div>
      <text class="calendar-today" @click="handleToday()"> 今天 </text>
    </div>
    <div class="calendar-box" v-else>
      <text class="calendar-headDate"> {{this.headOptions.date}} </text>
      <text class="calendar-today dispersion-today" :style="{float: this.headStyle.todayBtn}" @click="handleToday()"> 今天 </text>
      <div class="calendar-content dispersion" :style="{float: this.headStyle.checkBtn}">
        <text class="calendar-prev" @click="handlePrevMonth">last</text>
        <text class="calendar-next" @click="handleNextMonth">next</text>
      </div>
     
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      headOptions: Object
    },
    data () {
      return {
        headStyle: ''
      }
    },
    mounted() {
      this.headStyle = this.headOptions.style;

    },
    methods: {
      // 上一个月
      handlePrevMonth () {
        this.$emit('handlePrevMonth');
      },
      // 下一个月
      handleNextMonth () {
        this.$emit('handleNextMonth');
      },
      // 回到今天
      handleToday () {
        this.$emit('handleToday');
      }
    }
  }
</script>

<style scoped>
  .calendar-header {
  margin-bottom: 23px;
  width: 750px
}
.calendar-box {
  position: relative;
  height: 62px;
  line-height: 62px;
}
.calendar-content {
  flex-direction: row;
  width: 750px
}
.calendar-prev,
.calendar-next {
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  background-size: contain;
  cursor: pointer;
}
.calendar-next {
  background-size: contain;
}
.dispersion {
  width: initial;
  display: inline;
}
.calendar-headDate {
  vertical-align: middle;
  margin: 0 12px;
  font-size: 18px;
  color: #424953;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.calendar-today {
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 30px;
  text-align: center;
  border: 1px solid #2061FF;
  border-radius: 4px;
  font-size: 14px;
  color: #2061FF;
  cursor: pointer;
}
.dispersion-today {
  position: inherit;
}
.calendar-center {
  margin: 0 auto;
}
.calendar-left {
  float: left;
}
.calendar-right {
  float: right;
}
</style>