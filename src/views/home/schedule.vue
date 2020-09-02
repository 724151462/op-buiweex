<template>
  <scroller>
    <dateUi :options="calendarArr" 
      class="calendar" 
      @handleClickDay="handleClickDay" 
      @handlePrevMonth="handlePrevMonth"
      @handleNextMonth="handleNextMonth"></dateUi>
    
  </scroller>
  
</template>

<script>
import dateUi from '../../components/date-ui'
export default {
  watch: {
  },
  data () {
    return {
      calendarArr: {
          type: 'combination',
          headStyle: {
            todayBtn: 'right',
            combination: 'center',
            checkBtn: 'right',
          },
          viewStyle: {
            day: 'right'
          },
          calendarData: []
        },
    }
  },
  components: {
    dateUi
  },
  methods: {
    handleClickDay () {

    },
    handlePrevMonth () {

    },
    handleNextMonth () {
      
    }
  }
}
</script>

<style>

</style>
