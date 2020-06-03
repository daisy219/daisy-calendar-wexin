# daisy-calendar

自定义日历小程序组件

* 支持配置选中日期背景色和特殊日期字体颜色
* 自定义选中日期和特殊标识日期
* 上个月和下个月切换及切换回当前日期
* 各点击事件都有事件派发

## 使用

* git clone整个项目，里面src\calendar是组件源码，也没几行，直接拿来放到自己项目里就行，有啥想自定义的就可以随心所欲的改了~

* 通过npm安装。还没发布，等等发布了再说~

## 属性及方法
### 属性

#### model - { string } 
      
    当前选中日期
      
    exp: '2020/6/2'
    
    默认：本地当前日期
      
    
    友情提示：时间格式最好不要用短横线（2020-6-2），不兼容ios。


#### main-color - { string }

    选中日期的背景色，exp: '#636FA4'
    
    默认：'#636FA4'

#### special-date - { string[] }

    需要特殊标记的日期
    
    exp: ['2020/6/2', '2020/3/2']

#### special-font-color - { string }

    特殊标记日期的字体颜色

    默认：'#ff9472'

### 方法

#### dayTouch
    点击某一天的时候触发
    参数.detail
    date - 当前时间
    dayText - 当前日
    isSpecial - 当前时间是不是特殊日期
    
#### preMonth
    点击上个月的时候触发
    参数
    detail - 当前选中日期

#### nextMonth
    点击下个月的时候触发
    参数
    detail - 当前选中日期

#### backToday
    点击今天的时候触发
    参数
    detail - 当前选中日期