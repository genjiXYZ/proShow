<template>
  <div class="project">
    <div class="mask-plus"></div>
    <div
      class="pro-logo"
      ref="logo"
      v-intersect="{ handler: onIntersectLogo,
            options: {
              threshold: [0.5]
            }}"
    >
      <p class="pro-logo-title text-h3 text-md-h2 text-lg-h1" ref="title">Soldier76</p>
   


    </div>

    <div class="pro-bg">
      <img class="pro-bg" src="../assets/over.jpg" alt />
    </div>

    <v-container
      pa-0
      v-intersect="{ handler: onIntersectBg,
            options: {
              threshold: [0.75]
            }}"
    >
      <div class="drawer d-flex flex-row justify-space-between align-center">
        <div
          class="drawer-side dis d-flex flex-column align-content-end justify-space-around"
          ref="side"
        >
          <p class="drawer-side-title text-h3">demo</p>
          <i>+</i>
          <div class="drawer-side-scroll" ref="wrapper">
            <ul class="pa-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <i>__</i>
        </div>

        <div class="drawer-info"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: ""
    };
  },

  methods: {
    onIntersectLogo(entries) {
      let isIntersecting = entries[0].isIntersecting;
      console.log(isIntersecting + "logo");
      console.dir(this.$refs.logo);
      let ob = this.$refs.logo.getBoundingClientRect();
      console.dir(ob);
      console.log(document.documentElement.scrollTop);
      isIntersecting
        ? window.addEventListener("scroll", this.move)
        : window.removeEventListener("scroll", this.move);
    },
    onIntersectBg(entries) {
      let isIntersecting = entries[0].isIntersecting;
      console.log(this.isIntersecting + "bg");

      if (isIntersecting) {
        this.$refs.side.classList.remove("dis");
        this.$refs.side.classList.add(
          "animate__bounceInDown",
          "animate__animated"
        );
      }
    },
    move() {
      let scrolledABS =
        document.documentElement.scrollTop - this.$refs.logo.clientHeight / 2;

      this.$refs.title.style.transform = `translate3d(-50%,${scrolledABS}px ,0 ) `;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 500
        },
        scrollY: true
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.project {
  width: 100vw;

  
  //   background-image: linear-gradient(#2c131d, #482467);
  background-color: #482467;

  position: relative;

  transform-style: preserve-3d;
}
.mask-plus {
  width: 100vw;
  height: 2.5vh;
  mask-image: url("../assets/reverse.webp");
  mask-repeat: no-repeat;
  background-color: #2c131d;
  mask-size: 100% 100%;
  position: absolute;
  top: 0;
  z-index: 4;
  
}
.mask-sub {
  width: 100vw;
  height: 2.5vh;
  mask-image: url("../assets/horizontal-rip.webp");
  mask-repeat: no-repeat;
  background-color: #210719;
  mask-size: 100% 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
}

.pro-bg {
  display: block;
  position: absolute;

  width: 100vw;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  //   border-radius: 20px;
  //   overflow: hidden;

  img {
    width: 100%;
    height: 100vh;
    display: block;
    position: absolute;

    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    // background-image: radial-gradient(
    //   ellipse farthest-side,
    //   rgba(15, 14, 22, 0.65),
    //   #2e1343
    // );
    background-image: linear-gradient(90deg, #482467, rgba(15, 14, 22, 0.25));
  }
}

.drawer {
  width: 100%;
  height: 100vh;
  border: 2px #ccc dashed;
  box-sizing: border-box;

  &-side {
    @media screen and (max-width: 960px) {
      width: 100px;
    }
    font-size: 24px;
    width: 400px;
    height: 80%;
    border: 2px #ccc dashed;
    &:before,
    &:after {
      content: "";
      display: block;
    }

    i {
      display: block;
      width: 130%;
      text-align: center;
      color: white;
    }

    &-title {
      width: 100%;

      text-align: center;
      color: white;
      border-radius: 10px;
      background-color: rgba(15, 14, 22, 0.75);
    }

    &-scroll {
      width: 130%;

      height: 70%;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 10px;

      ul {
        width: 100%;
      }
      li {
        width: 100%;
        height: 200px;
        margin: 10px 0;
        background-color: rgba(15, 14, 22, 0.75);
        border-radius: 10px;
      }
    }
  }

  &-info {
    width: 100%;
    height: 90%;
    border: 2px #ccc dashed;
  }
}

.pro-logo {
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-position:center;
  background-size:  cover ;
  background-color: white;
  overflow: hidden;
  background-image: radial-gradient(
      circle farthest-corner,
      rgba(15, 14, 22, 0),
      #0f0e2f
    ),
    
  url("../assets/../assets/campfire_4x.jpg");
  
    
  background-attachment: fixed;
  position: relative;
  &-title {
    position: absolute;
    font-family: piedra !important;
    left: 50%;
    bottom: 100%;
    color: #faa04b;
    transform: translate(-50%, 0);
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 5;

  }
}

// .pro-trapezoid {
//   width: 100vw;
//   height: 30vh;
//   background-position: center;
//   background-size: cover;
//   background-color: white;
//   background-image: url("../assets/../assets/campfire_4x.jpg");
//   background-attachment: fixed;
// }

.dis {
  display: none;
}
</style>