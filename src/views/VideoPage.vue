<template>
  <div class="video-wrapper">
    <button @click="$router.go(-1)" class="video-wrapper__back">
      <img src="../assets/images/arrow-white.svg" alt="" />
      Назад
    </button>
    <div class="video-trigger" @click="playing ? pause() : play()">
      <span v-text="playing ? 'пауза' : 'запустить'"></span>
      <div class="video-trigger__icon">
        <transition name="fade">
          <svg
            v-if="playing"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2" height="18" rx="1" fill="white" />
            <rect x="9" width="2" height="18" rx="1" fill="white" />
          </svg>
          <svg
            v-else
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.6664 7.65331C7.85268 7.8469 7.85268 8.1531 7.6664 8.34669L1.36029 14.9002C1.0482 15.2245 0.5 15.0036 0.5 14.5535L0.5 1.4465C0.5 0.996391 1.0482 0.775474 1.36029 1.09981L7.6664 7.65331Z"
              fill="white"
            />
          </svg>
        </transition>
      </div>
    </div>
    <video width="100%" poster="../assets/images/video-preview.jpg" id="video">
      <source :src="videoUrl" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  data: () => ({
    playing: true,
    videoUrl: null,
  }),
  methods: {
    pause() {
      let videoElement = document.getElementById("video");
      videoElement.pause();
      this.playing = false;
    },
    play() {
      let videoElement = document.getElementById("video");
      videoElement.play();
      this.playing = true;
    },
  },
  mounted() {
    this.videoUrl = this.$route.params.video;
    setTimeout(() => {
      this.play();
    }, 500);
    /* Get the documentElement (<html>) to display the page in fullscreen */
    // let videoElement = document.getElementById('video');
    // videoElement.webkitRequestFullScreen()
    // screen.orientation.lock('landscape');
  },
};
</script>

<style lang="scss" scoped>
.video-wrapper {
  transform: rotate(-90deg);
  transform-origin: left top;
  width: calc(var(--vh, 1vh) * 100);
  height: 100vw;
  overflow: hidden;
  position: fixed;
  top: 100%;
  left: 0;
  &__back {
    position: fixed;
    top: rem(25px);
    left: rem(21px);
    display: flex;
    align-items: center;
    margin-bottom: rem(17px);
    text-transform: uppercase;
    font-size: rem(10px);
    color: #fff;
    z-index: 1;
    img {
      width: rem(5px);
      margin-right: rem(9px);
    }
  }
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.video {
  &-trigger {
    position: fixed;
    top: rem(25px);
    right: rem(21px);
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: rem(10px);
    color: #fff;
    z-index: 1;
    span {
      margin-right: rem(10px);
    }
  }
}
</style>
