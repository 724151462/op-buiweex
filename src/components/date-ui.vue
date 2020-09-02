<template>
  <div>
    <calendarHeader 
      :headOptions="headOptions" 
      @handlePrevMonth = 'handlePrevMonth'
      @handleNextMonth = 'handleNextMonth'
      @handleToday = 'handleToday'
    />
    <ul class="calendar-week clear">
      <li v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{item}}</li>
    </ul>
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
const englishMonth = (month) => {
  let engMonth;

  englishMonthList.map(() => {
    engMonth = englishMonthList[month]
  });

  return engMonth
}
const englishMonthList = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月'
];
const getDate = (year, month, day) => {
  return new Date(year, month, day);
}
export default {
  data () {
    let {year, month, day} = getNewDate(new Date());
    return {
      calendarTitleArr: [
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '日'
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
    dayStyle: function () {
        return {
          textAlign: this.options.viewStyle.day,
        }
      },
    visibleCalendar() {
        let calendatArr = [];
        let {year, month, day} = getNewDate(getDate(this.time.year, this.time.month, 1));
        
        let currentFirstDay = getDate(year, month, 1);

        // 获取当前月第一天星期几
        let weekDay = currentFirstDay.getDay();
        let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;

        let monthDayNum;
        if (weekDay == 5 || weekDay == 6){
          monthDayNum = 42
        }else {
          monthDayNum = 35
        };
        for (let i = 0; i < monthDayNum; i++) {
          calendatArr.push({
            date: new Date(startTime + i * 24 * 60 * 60 * 1000),
            year: year,
            month: month + 1,
            day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
            clickDay: false,
          })
        };
        
        this.headOptions.date = `${englishMonth(month)} ${year}`;
        return calendatArr
      }
  },
  components: {
      calendarHeader
    },
  methods: {
    // 点击回到今天
    handleToday () {
      this.time = getNewDate(new Date());
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
        let prevMonth = getDate(this.time.year,this.time.month,1);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        this.time = getNewDate(prevMonth);
        this.headOptions.date = `${englishMonth(this.time.month)} ${this.time.year}`;
        this.$emit('handlePrevMonth');
      },
      // 下一个月
      handleNextMonth () {
        let nextMonth = getDate(this.time.year,this.time.month,1); 
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        this.time = getNewDate(nextMonth);
        this.headOptions.date = `${englishMonth(this.time.month)} ${this.time.year}`;
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

<style lang="scss">
.calendar-view{
  flex-direction: row;
  flex-wrap: wrap;
  .date-view{
    background-color:#000;
  }
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
.calendar-week {
  width: 750px;
  height: 46px;
  line-height: 46px;
  border: 1px solid #E4E7EA;
  border-right: none;
  flex-direction: row;
}
.week-item {
  
  width: 107px;
  text-align: center;
  font-size: 14px;
  color: #424953;
  border-right: 1px solid #E4E7EA;
  font-weight: 600;
}
</style>