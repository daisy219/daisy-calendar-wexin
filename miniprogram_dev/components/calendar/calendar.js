module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前选中日期
    model: {
      type: String,
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
    onLoad: function onLoad() {
      this.setData({
        specialDateStringArr: this.properties.specialDate.map(function (a) {
          return new Date(a).toLocaleDateString();
        })
      });
      this.setData({
        activeDate: this.properties.model
      });
      this.setCurrentStatus(this.data.activeDate);
    },


    /**
     * 设置当前展示情况
     * @param {date} date
     */
    setCurrentStatus: function setCurrentStatus(date) {
      var _this = this;

      this.setData({ currentYear: _utils2.default.getYear(date) });
      this.setData({ currentMonth: _utils2.default.getMonth(date) });
      this.setData({ currentDate: _utils2.default.getDate(date) });
      var dayArr = _utils2.default.creatNewArray(1, _utils2.default.getCurrentMonthDay(date));

      this.setData({
        currentMonthDays: dayArr.map(function (a) {
          return {
            date: new Date(_this.data.currentYear, _this.data.currentMonth - 1, a).toLocaleDateString(),
            dayText: a,
            special: _this.data.specialDateStringArr.includes(new Date(_this.data.currentYear, _this.data.currentMonth - 1, a).toLocaleDateString())
          };
        })
      });
      // 计算每个月1号周几开始
      var _dateDay = new Date(_utils2.default.getYear(date), _utils2.default.getMonth(date) - 1, 1).getDay();
      var blankNum = _dateDay - 1;
      this.setData({ blankDayItem: blankNum ? _utils2.default.creatNewArray(0, blankNum - 1) : [] });
    },


    /**
     * 点击日期
     * @param {object} event
     */
    dayClick: function dayClick(event) {
      var _date = event.target.dataset.day;
      this.setData({ currentDate: _date });
      var params = {
        date: event.target.dataset.date,
        dayText: event.target.dataset.day,
        isSpecial: event.target.dataset.special
      };
      this.triggerEvent('dayTouch', params);
    },


    /**
     * 点击上个月
     */
    preMonth: function preMonth() {
      var _year = _utils2.default.getYear(this.data.activeDate);
      var _month = _utils2.default.getMonth(this.data.activeDate);
      this.setData({ activeDate: new Date(_year, _month - 2, 1) });
      this.setCurrentStatus(this.data.activeDate);
      this.triggerEvent('preMonth', this.data.activeDate);
    },


    /**
     * 点击下个月
     */
    nextMonth: function nextMonth() {
      var _year = _utils2.default.getYear(this.data.activeDate);
      var _month = _utils2.default.getMonth(this.data.activeDate);
      this.setData({ activeDate: new Date(_year, _month, 1) });
      this.setCurrentStatus(this.data.activeDate);
      this.triggerEvent('nextMonth', this.data.activeDate);
    },


    /**
     * 点击今天
     */
    backToday: function backToday() {
      this.setData({ activeDate: new Date() });
      this.setCurrentStatus(this.data.activeDate);
      this.triggerEvent('backToday', this.data.activeDate);
    }
  },
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function attached() {
      this.onLoad();
    }
  }
}); // components/calendar/calendar.js

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  getFlag: function getFlag() {
    return true;
  },

  /** 获取date所在年
   * @param { date | stirng } date
   */
  getYear: function getYear(date) {
    var _date = new Date(date);
    return _date.getFullYear();
  },

  /**
   * 获取date所在月
   * @param { data | string } date
   */
  getMonth: function getMonth(date) {
    var _date = new Date(date);
    return _date.getMonth() + 1;
  },


  /**
   * 获取date所在日
   * @param { data | string } date
   */
  getDate: function getDate(date) {
    var _date = new Date(date);
    return _date.getDate();
  },


  /**
   * 获取date所在月有多少天
   * @param { date | stirng } date
   */
  getCurrentMonthDay: function getCurrentMonthDay(date) {
    var _date = new Date(date);
    var curYear = _date.getFullYear();
    var curMonth = _date.getMonth() + 1;
    return new Date(curYear, curMonth, 0).getDate();
  },

  /** 创建数字区间数组
   * @param {number} start - 开始数
   * @param {number} end - 结束数
   */
  creatNewArray: function creatNewArray(start, end) {
    var arr = [];
    for (var i = start; i < end + 1; i++) {
      arr.push(i);
    }
    return arr;
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=calendar.js.map