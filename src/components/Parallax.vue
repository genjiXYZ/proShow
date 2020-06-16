<template>
  <div class="parallax" ref="parallax" v-intersect="onIntersect">
    <img class="top" ref="top" :src="top ||require('../assets/parallax/top.png')" alt />
    <img class="center" ref="center" :src="center || require('../assets/parallax/center.png')" alt />
    <img class="bottom" ref="bottom" :src="bottom ||require('../assets/parallax/bottom.png')" alt />
    <p class="title" ref="title">Soldier76's father</p>
  </div>
</template>


<script>
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
    onIntersect(entries) {
      this.isIntersecting = entries[0].isIntersecting;
      console.log(this.isIntersecting);
      this.isIntersecting
        ? window.addEventListener("scroll", this.throttle)
        : window.removeEventListener("scroll", this.throttle);
    },
    throttle() {
      if (this.isRunning) return;
      else {
        this.isRunning = true;
        window.requestAnimationFrame(() => {
          this.move();
          this.isRunning = false;
        });
      }
    },
    move() {
      console.log("run");
      let scrolled_px = document.documentElement.scrollTop; //已经滚动了的 像素
      //   let scrolled_per =
      //     scrolled_px /
      //     (document.documentElement.scrollHeight -
      // 	  document.documentElement.clientHeight);

      let PerLocal = (scrolled_px / this.$refs.parallax.clientHeight).toFixed(
        3
      );

      this.$refs.top.style.transform = `translateY(${scrolled_px *
        0.8}px) scale(${PerLocal * 0.5 + 1} )`;

      this.$refs.center.style.transform = `translateY(${scrolled_px *
        0.7}px) scale(${PerLocal * 1 + 1} )`;

      this.$refs.bottom.style.transform = `translateY(${scrolled_px *
        0.05}px) scale(${PerLocal * 1 + 1} )`;
      this.$refs.title.style.transform = `translate( -50%, calc(-50% + ${scrolled_px *
        1}px )) scale(${PerLocal * 1 + 1} )`;
    }
  },
  mounted() {
    console.log(this.$refs.parallax);
  }
};
</script>


<style lang="scss" scoped>
.parallax {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  box-sizing: border-box;
  overflow: hidden;
  & > img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
  }
  img:nth-child(3) {
    z-index: 4;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 96px ; 
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;

    color: white;
  }
}
</style>