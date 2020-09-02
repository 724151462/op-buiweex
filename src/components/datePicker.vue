<template>
  <div>
    <!-- <calendarHeader 
      :headOptions="headOptions" 
      @handlePrevMonth = 'handlePrevMonth'
      @handleNextMonth = 'handleNextMonth'
      @handleToday = 'handleToday'
    /> -->
    <!-- <ul class="calendar-week clear">
      <li v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{item}}</li>
    </ul> -->
    <ul class="calendar-view clear">
      <li v-for="(item, index) in visibleCalendar" 
        :key="index" 
        class="date-view"
        :class="[
          isCurrentDay(item.date) == true ? 'todayBg' : '',
          !isCurrentMonth(item.date) == true ? 'month-class' : ''
        ]"
        @click="handleClickDay(item, index)"
      >
        <span class="date-day" 
          :style="dayStyle" 
          :class="[{'opacity-class': !isCurrentMonth(item.date)}]"
        >
          {{item.day}}
        </span>
        <span class="calendar-num">
          {{item.calendarNum}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import calendarHeader from './canlendar-head.vue';
const getNewDate =  (date) => {
 let year = date.getFullYear();
 let month = date.getMonth();
 let day = date.getDate();
 return {year, month, day};
}
const englishMonthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];
const getDate = (year, month, day) => {
  return new Date(year, month, day);
}
export default {
  data () {
    let {year, month, day} = getNewDate(new Date());
    return {
      calendarTitleArr: [
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
        'SUN '
      ],
      time: {year, month, day},
      calendarList: [],
      headOptions: {
        type: this.options.type,
        style: this.options.headStyle,
        date: '',
      },
    }
  },
  props: {
    options: Object
  },
  computed: {
    dayStyle : function () {
        return {
          textAlign: this.options.viewStyle.day,
        }
      },
    visibleCalendar: function () {
        let calendatArr = [];
        // 先得到当前的年，月，日
        let {year, month, day} = getNewDate(getDate(this.time.year, this.time.month, 1));
        
        // 获取当月的第一天 得到2019-5-1
        let currentFirstDay = getDate(year, month, 1);
        
        // 获取第一天是星期几 得到 3
        let weekDay = currentFirstDay.getDay();
        
        // 用当月的第一天减去 周几前面几天 这样就能得到上个月开始的天数 （当前月1号是周三，那么周一就是上个月的最后两天）
        let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;
        
        // 然后得到所有的日期
        for (let i = 0; i < 42; i++) {
          calendatArr.push({
            date: new Date(startTime + i * 24 * 60 * 60 * 1000),
            year: year,
            month: month + 1,
            day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate()
          })
        };
        return calendatArr
    },
  },
  components: {
      calendarHeader
    },
  methods: {
    // 点击回到今天
    handleToday () {
      this.time = utils.getNewDate(new Date());
      this.returnDate();
      this.$emit('handleToday');
    },
    // 点击某一天
    handleClickDay (item) {
      this.$forceUpdate();
      this.$emit('handleClickDay', item);
      this.calendarList.map( x => { 
        x.clickDay = false;
      });
      this.$set(item, 'clickDay', true);
    },
    // 是否是当前月
      isCurrentMonth (date) {
        let {year: currentYear, month: currentMonth} = getNewDate(getDate(this.time.year, this.time.month, 1));
        let {year, month} = getNewDate(date);
        return currentYear == year && currentMonth == month
      },
    // 是否是今天 
      isCurrentDay (date) {
        let {year: currentYear, month: currentMonth, day: currentDay} = getNewDate(new Date());
        let {year, month, day} = getNewDate(date);
        return currentYear == year && currentMonth == month && currentDay == day;
      },
      // 上一个月
      handlePrevMonth () {
        let prevMonth = utils.getDate(this.time.year,this.time.month,1);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        this.time = utils.getNewDate(prevMonth);
        this.headOptions.date = `${utils.englishMonth(this.time.month)} ${this.time.year}`;
        this.$emit('handlePrevMonth');
      },
      // 下一个月
      handleNextMonth () {
        let nextMonth = utils.getDate(this.time.year,this.time.month,1); 
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        this.time = utils.getNewDate(nextMonth);
        this.headOptions.date = `${utils.englishMonth(this.time.month)} ${this.time.year}`;
        this.$emit('handleNextMonth');
      },
  },
  components: {
    // Calendar
    calendarHeader
  },
  created () {
    // this.renderCalendar();
    this.calendarList = this.visibleCalendar;
    this.calendarType = this.options.calendarType;
    console.log(this.visibleCalendar)
  },

}
</script>

<style>
.calendar-view{
  height: 300px;
  width: 750px;
  background-color: red;
  flex-direction: row;
  flex-wrap: wrap;
}
.date-view{
  width: 107px;
}
.todayBg {
  background: red;
}
.month-class {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>