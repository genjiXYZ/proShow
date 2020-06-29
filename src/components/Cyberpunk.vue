<template>
  <div>
    <div class="casino">
		
      <!-- <video
        autoplay
        muted
        loop
        playsinline
        class="casino__video"
        poster="../assets/Cyberpunk/casino.png"
      >
        <source type="video/mp4" src="../assets/Cyberpunk/casino_mp4.mp4" />
      </video> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.casino {
  width: 100vw;
  height: 100vh;
  position: relative;
  border: 1px solid black;
  

  &__video {
    height: 100%;
    margin: 0 auto;

    display: block;
    object-fit: contain;
  }


  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      ellipse closest-side,
      rgba(15, 14, 22, 0.25),
      #2E1343
    );
  }
}
</style>