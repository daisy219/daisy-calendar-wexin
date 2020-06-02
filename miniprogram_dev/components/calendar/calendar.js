// components/calendar/calendar.js
import Utils from '../utils';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前选中日期
    model: {
      type: String | Number,
      value: Date.now()
    },
    mainColor: {
      type: String,
      value: '#636FA4'
    },
    // 状态特殊的日期
    specialDate: {
      type: Array,
      value: []
    },
    // 状态特殊的日期的字体颜色
    specialFontColor: {
      type: String,
      value: '#ff9472'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    weekArr: ['一', '二', '三', '四', '五', '六', '日'],
    activeDate: '',
    currentYear: '',
    currentMonth: '',
    currentDate: '',
    currentWeek: '',
    currentMonthDays: [],
    blankDayItem: [],
    specialDateStringArr: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 入口函数
     */
    onLoad() {
      this.setData({ specialDateStringArr: this.properties.specialDate.map(a => new Date(a).toLocaleDateString()) });
      this.setData({ activeDate: this.properties.model });
      this.setCurrentStatus(this.data.activeDate);
    },

    /**
     * 设置当前展示情况
     * @param {date} date
     */
    setCurrentStatus(date) {
      this.setData({ currentYear: Utils.getYear(date) });
      this.setData({ currentMonth: Utils.getMonth(date) });
      this.setData({ currentDate: Utils.getDate(date)});
      const dayArr = Utils.creatNewArray(1, Utils.getCurrentMonthDay(date));
      
      this.setData({ currentMonthDays:
        dayArr.map(a => {
          return {
            date: new Date(this.data.currentYear, this.data.currentMonth - 1, a).toLocaleDateString(),
            dayText: a,
            special: this.data.specialDateStringArr.includes(new Date(this.data.currentYear, this.data.currentMonth - 1, a).toLocaleDateString())
          }
        })
      });
      // 计算每个月1号周几开始
      const _date_day = new Date(Utils.getYear(date), (Utils.getMonth(date) - 1), 1).getDay();
      const blankNum = _date_day - 1;
      this.setData({ blankDayItem: blankNum ? Utils.creatNewArray(0, blankNum - 1) : [] });
    },

    /**
     * 点击日期
     * @param {object} event
     */
    dayClick(event) {
      const _date = event.target.dataset.day;
      this.setData({ currentDate: _date});
      const params = {
        date: event.target.dataset.date,
        dayText: event.target.dataset.day,
        isSpecial: event.target.dataset.special,
      }
      this.triggerEvent('dayTouch', params);
    },

    /**
     * 点击上个月
     */
    preMonth() {
      const _year = Utils.getYear(this.data.activeDate);
      const _month = Utils.getMonth(this.data.activeDate);
      this.setData({ activeDate: new Date(_year, _month - 2, 1) });
      this.setCurrentStatus(this.data.activeDate);
      this.triggerEvent('preMonth', this.data.activeDate);
    },
    
    /**
     * 点击下个月
     */
    nextMonth() {
      const _year = Utils.getYear(this.data.activeDate);
      const _month = Utils.getMonth(this.data.activeDate);
      this.setData({ activeDate: new Date(_year, _month, 1) });
      this.setCurrentStatus(this.data.activeDate);
      this.triggerEvent('nextMonth', this.data.activeDate);
    },

    /**
     * 点击今天
     */
    backToday() {
      this.setData({ activeDate: new Date() });
      this.setCurrentStatus(this.data.activeDate);
      this.triggerEvent('backToday', this.data.activeDate);
    }
  },
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function() {
      this.onLoad();
    },
  }
})
