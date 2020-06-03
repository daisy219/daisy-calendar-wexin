
Component({
  properties: {
    model: {
      type: String,
      value: new Date().toLocaleDateString()
    },
    mainColor: {
      type: String,
      value: '#636FA4'
    },
    specialDate: {
      type: Array,
      value: []
    },
    specialFontColor: {
      type: String,
      value: '#ff9472'
    }
  },
  methods: {
    /** 点击日期 */
    dayTouch: function (val) {
      this.triggerEvent('dayTouch', val.detail);
    },

    /** 点击上个月 */
    preMonth: function (val) {
      this.triggerEvent('preMonth', val.detail);
    },

    /** 点击下个月 */
    nextMonth: function (val) {
      this.triggerEvent('nextMonth', val.detail);
    },

    /** 点击今天 */
    backToday: function (val) {
      this.triggerEvent('backToday', val.detail);
    }
  }
});
