// components/calendar/calendar.js
import Utils from '../utils';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前选中日期
    model: {
      type: String | Object,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    weekArr: ['一', '二', '三', '四', '五', '六', '日'],
    activeDate: '',
    dateNow: new Date(),
    currentYear: '',
    currentMonth: '',
    currentDate: '',
    currentWeek: '',
    currentMonthDays: [],
    blankDayItem: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 入口函数
     */
    onLoad() {
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
      this.setData({ currentMonthDays:  Utils.creatNewArray(1, Utils.getCurrentMonthDay(date))});
      const _date_day = new Date(Utils.getYear(date), (Utils.getMonth(date) - 1), 1).getDay();
      // console.log(new Date(Utils.getYear(date), (Utils.getMonth(date) - 1), 1).getDay());
      const blankNum = _date_day - 1;
      this.setData({ blankDayItem: blankNum ? Utils.creatNewArray(0, blankNum - 1) : [] });
      // console.log(this.data.blankDayItem);
    },

    /**
     * 点击日期
     * @param {object} event
     */
    dayClick(event) {
      // console.log(event);
      const _date = event.target.dataset.day;
      this.setData({ currentDate:  _date});
      // this.setCurrentStatus();
    },

    /**
     * 点击上个月
     */
    preMonth() {
      const _year = Utils.getYear(this.data.activeDate);
      const _month = Utils.getMonth(this.data.activeDate);
      this.setData({ activeDate: new Date(_year, _month - 2, 1) });
      this.setCurrentStatus(this.data.activeDate);
    },
    
    /**
     * 点击下个月
     */
    nextMonth() {
      const _year = Utils.getYear(this.data.activeDate);
      const _month = Utils.getMonth(this.data.activeDate);
      this.setData({ activeDate: new Date(_year, _month, 1) });
      this.setCurrentStatus(this.data.activeDate);
    },

    /**
     * 点击今天
     */
    backToday() {
      this.setData({ activeDate: new Date() });
      this.setCurrentStatus(this.data.activeDate);
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
