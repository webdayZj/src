<template>
  <div class="Home">
    <div class="weater-top">
      <div class="left">
        <div class="adders">太原</div>
        <div class="time">
          <span>{{upTime}}</span>
          <span class="date">{{upDate}}</span>
        </div>
      </div>
      <div class="right">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>
    <div class="weater-info">
      <p>今日天气</p>
      <div class="temperature">
        <img src="../assets/多云.png" alt=""
          v-if=" ['少云' , '晴间多云','多云', '有风', '平静', '微风', '和风', '清风', '强风/劲风', '疾风', '大风', '烈风', '风暴', '狂暴风', '飓风', '热带风暴'].includes(weaterData.weather)  ">
        <img src="../assets/阵雨.png" alt="" v-if="weaterData.weather === '阵雨' ">
        <img src="../assets/阵雪.png" alt="" v-if="weaterData.weather === '阵雪' ">
        <img src="../assets/晴.png" alt="" v-if="['晴','热'].includes(weaterData.weather) ">
        <img src="../assets/阴.png" alt="" v-if=" ['阴'].includes(weaterData.weather)">
        <img src="../assets/小雨.png" alt="" v-if="['小雨','雨', '小雨-中雨' ,'冻雨' ].includes(weaterData.weather)">
        <img src="../assets/小雪.png" alt="" v-if="['雪','小雪','中雪','小雪-中雪','中雪-大雪'].includes(weaterData.weather)  ">
        <img src="../assets/中雨.png" alt="" v-if="['中雨', '中雨-大雨'].includes(weaterData.weather) ">
        <img src="../assets/特大暴雨.png" alt=""
          v-if="['大暴雨', '特大暴雨', '强阵雨', '极端降雨','大雨-暴雨', '暴雨-大暴雨','大暴雨-特大暴雨'].includes(weaterData.weather)">
        <img src="../assets/雾.png" alt="" v-if="['雾','浓雾','强浓雾','轻雾','大雾','特强浓雾'].includes(weaterData.weather) ">
        <img src="../assets/霾.png" alt="" v-if="['霾', '中度霾', '重度霾', '严重霾'].includes(weaterData.weather)">
        <img src="../assets/雷阵雨.png" alt="" v-if="['雷阵雨', '雷阵雨并伴有冰雹', '强雷阵雨'].includes(weaterData.weather)">
        <img src="../assets/暴雪.png" alt="" v-if="['大雪', '暴雪', '大雪-暴雪'].includes(weaterData.weather) ">
        <img src="../assets/浮尘.png" alt="" v-if="['浮尘','扬沙'].includes(weaterData.weather) ">
        <img src="../assets/沙尘暴.png" alt="" v-if="['沙尘暴', '强沙尘暴','龙卷风'].includes(weaterData.weather) ">
        <img src="../assets/雨夹雪.png" alt="" v-if="['雨雪天气', '雨夹雪','阵雨夹雪'].includes(weaterData.weather) ">
        <img src="../assets/未知天气.png" alt="" v-if="['未知' , '冷'].includes(weaterData.weather) ">
        <span class="number"> {{weaterData.temperature}} <i>°C</i> </span>
        <div class="introduce">{{weaterData.weather}}</div>
      </div>
      <div class="feng">
        <div class="fengli">
          <img src="../assets/fengli.png" alt="">
          <span>风力:{{weaterData.windpower}}级</span>
        </div>
        <div class="fengxiang">
          <img src="../assets/fengxiang.png" alt="">
          <span>风向:{{weaterData.winddirection}}</span>
        </div>
      </div>
    </div>
    <div class="rate">
      <div class="rate-item" v-for="(rate,index) in testData" :key="index">
        <div class="title">{{rate.title}}</div>
        <div class="contentData">
          <div class="content" v-for="(item,index) in rate.children" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="money">{{item.money}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="update">更新日期：{{upDate}}</div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getWeater } from '@/services/global'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      weaterData: {},
      testData: [
        {
          title: '英镑（GBP）',
          children: [
            {
              name: '现汇买入价',
              money: '888'
            },
            {
              name: '现汇买入价',
              money: '888'
            },
            {
              name: '现汇买入价',
              money: '888'
            },
            {
              name: '现汇买入价',
              money: '888'
            }
          ]
        },
        {
          title: '英镑（GBP）1',
          children: [
            {
              name: '现汇买入价',
              money: '888'
            },
            {
              name: '现汇买入价',
              money: '888'
            },
            {
              name: '现汇买入价',
              money: '888'
            },
            {
              name: '现汇买入价',
              money: '888'
            }
          ]
        },
        {
          title: '英镑（GBP）2',
          children: [
            {
              name: '现汇买入价',
              money: '888'
            }
          ]
        }
      ],
      upTime: '',
      upDate: '',
      weaterUp: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.upDate = dayjs().format('YYYY/MM/DD')
    this.timer = setInterval(() => {
      this.upTime = dayjs().format('HH:mm')
    }, 1000)
    // 每小时刷新天气信息
    this.weaterUp = setInterval(() => {
      this.getDayWeater()
    }, 60 * 60 * 1000)
    this.getDayWeater()
  },
  beforeDestroy() {
    /* 离开页面前销毁定时器 */
    if (this.timer) {
      clearInterval(this.timer)
    }
    if (this.weaterUp) {
      clearInterval(this.weaterUp)
    }
  },
  methods: {
    getDayWeater() {
      getWeater('太原').then(res => {
        console.log(res)
        this.weaterData = res.lives[0]
      })
    }
  }
}
</script>

<style lang="less">
.Home {
  width: 100%;
  height: 100%;
  padding: 50px 60px 0 68px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  background: url('../assets/weater-bj.png') no-repeat;
  object-fit: cover;
  position: relative;
  .weater-top {
    display: flex;
    justify-content: space-between;
    .left {
      .adders {
        font-size: 60px;
        font-weight: bold;
        color: #453c39;
        line-height: 90px;
        margin-bottom: 31px;
      }
      .time {
        font-size: 33px;
        font-weight: bold;
        color: #453c39;
        line-height: 50px;
        .date {
          font-size: 21px;
          margin-left: 21px;
          color: #453c39;
          line-height: 32px;
        }
      }
    }
    .right {
      width: 331px;
      height: 68px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
  .weater-info {
    margin-top: 76px;
    p {
      font-size: 40px;
      color: #453c39;
      line-height: 60px;
      text-align: center;
    }
    .temperature {
      margin-top: 74px;
      margin-left: 220px;
      position: relative;
      img {
        width: 320px;
        height: 320px;
        object-fit: cover;
        vertical-align: middle;
      }
      .number {
        font-size: 90px;
        font-weight: bold;
        color: #40372e;
        position: relative;
        i {
          position: absolute;
          top: 0;
          right: -50px;
          font-size: 53px;
          color: #bcbcbc;
          font-style: normal;
        }
      }
      .introduce {
        position: absolute;
        top: 207px;
        left: 363px;
        font-size: 30px;
        font-weight: 400;
        color: #737171;
      }
    }
  }
  .feng {
    display: flex;
    justify-content: space-evenly;
    font-size: 21px;
    font-weight: 600;
    color: #737171;
    margin-bottom: 129px;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  .rate {
    .rate-item {
      .title {
        font-size: 36px;
        font-weight: bold;
        color: #453c39;
        margin-bottom: 40px;
      }
      .contentData {
        display: flex;
        .content {
          width: 200px;
          height: 151px;
          background: url('../assets/info.png') no-repeat;
          background-size: cover;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-right: 51px;
          margin-bottom: 65px;

          .name {
            font-size: 22px;
            color: #737171;
            margin-bottom: 12px;
          }
          .money {
            font-size: 40px;
            font-weight: bold;
            color: #ef5252;
          }
        }
      }
    }
  }
  .update {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
