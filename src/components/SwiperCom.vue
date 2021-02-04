<template>
  <div class="SwiperCom">
    <div class="swiper-container"
         ref="SwiperCom">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item, index) in dataSource"
             :key="index">
          <slot :dataItem="{ ...item, dataIndex: index }"></slot>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"
           v-show="!!pagination"></div>
      <!-- Add Arrows -->
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>-->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

export default {
  name: "SwiperCom",
  props: {
    dataSource: Array,
    autoplay: {
      type: Boolean,
      default: true,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    swiperOptions: {
      type: Object,
      default: () => ({}),
    },
    slidesPerView: {
      type: Number,
      default: 1,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "horizontal",
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    centeredSlides: {
      type: Boolean,
      default: false,
    },
    spaceBetween: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  data () {
    return {};
  },
  watch: {
    dataSource: {
      handler (val) {
        if (this.swiper) {
          this.swiper.destroy(false);
          this.swiper = null;
        }
        if (val.length > 0 && !this.swiper) {
          this.initSwiper();
        }
      },
      immediate: true,
    },
  },
  methods: {
    change (val) {
      console.log(val);
      if (val === "right") {
        this.swiper.slideNext();
      } else {
        this.swiper.slidePrev();
      }
    },
    initSwiper () {
      const self = this;
      this.$nextTick(() => {
        this.swiper = new Swiper(self.$refs.SwiperCom, {
          spaceBetween: self.spaceBetween,
          slidesPerView: self.slidesPerView,
          centeredSlides: self.centeredSlides,
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
          loop: self.loop,
          direction: self.direction,
          autoplay: self.autoplay
            ? {
              delay: 3000,
              stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换
              disableOnInteraction: false,
            }
            : false,
          pagination: self.pagination
            ? {
              el: ".swiper-pagination",
              clickable: true,
            }
            : false,
          navigation: self.navigation
            ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
            : false,
          ...self.swiperOptions,
        });
      });
    },
  },
};
</script>

<style lang="less">
.SwiperCom {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .swiper-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    // .swiper-wrapper {
    //   height: 100%;
    //   .swiper-slide {
    //     height: 100%;
    //   }
    // }
  }
}
</style>