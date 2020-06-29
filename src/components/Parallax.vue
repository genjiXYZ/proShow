<template>
  <div class="parallax" ref="parallax" v-intersect="onIntersect">
    <img class="top" ref="top" :src="top ||require('../assets/parallax/top.png')" alt />
    <img class="center" ref="center" :src="center || require('../assets/parallax/center.png')" alt />
    <img class="bottom" ref="bottom" :src="bottom ||require('../assets/parallax/bottom.png')" alt />
    <p class="title text-h3 text-md-h2 text-lg-h1" ref="title">Soldier76</p>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isRunning: false,
      top: process.env.VUE_APP_ParallaxTop,
      center: process.env.VUE_APP_ParallaxCenter,
      bottom: process.env.VUE_APP_ParallaxBottom
    };
  },

  methods: {
    ...mapMutations(["throttle"]),

    onIntersect(entries) {
      this.isIntersecting = entries[0].isIntersecting;
      // console.log("parallax" + this.isIntersecting);
      this.isIntersecting
        ? window.addEventListener("scroll", () => {
            this.throttle({ fn: this.move, flag: this.isRunning });
          })
        : window.removeEventListener("scroll", () => {
            this.throttle({ fn: this.move });
          });
    },


    move() {
      let scrolled_px = document.documentElement.scrollTop; //已经滚动了的 像素
      //   let scrolled_per =
      //     scrolled_px /
      //     (document.documentElement.scrollHeight -
      // 	  document.documentElement.clientHeight);

      //[0,1]
      let PerLocal = (scrolled_px / this.$refs.parallax.clientHeight).toFixed(
        3
      );

      let topY = PerLocal * 0.3 * 100;
      let centerY = PerLocal * 0.2 * 100;
      let bottomY = PerLocal * 0.1 * 100;

      let titleY = scrolled_px * 1;

      let topRatio = 1;
      let centerRatio = PerLocal * 0.15 + 1;
      let bottomRatio = PerLocal * 0.3 + 1;

      this.$refs.top.style.transform = `translate3d(0,${topY}%,0) scale(${topRatio})`;
      this.$refs.center.style.transform = `translate3d(0,${centerY}%,0) scale(${centerRatio})`;
      this.$refs.bottom.style.transform = `translate3d(0,${bottomY}%,0) scale(${bottomRatio})`;
      this.$refs.title.style.transform = `translate3d(-50%,${titleY}px ,0 ) `;
      this.isRunning = false;
    }
  },
  mounted() {}
};
</script>


<style lang="scss" scoped>
.parallax {
  position: relative;
  // padding-bottom: 56.25%;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;

  & > img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    transition: transform 1s ease-out;
    will-change: transform;
  }
  img:nth-child(3) {
    z-index: 4;
  }
  img:nth-child(2) {
    z-index: 2;
  }

  .title {
    position: absolute;
    font-family: piedra !important;

    left: 50%;
    bottom: 50%;

    transform: translate(-50%, 0);
    transform-style: preserve-3d;
    z-index: 3;

    opacity: 1;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>