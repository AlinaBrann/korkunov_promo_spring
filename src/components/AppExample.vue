<template>
  <div class="example" :class="{ _open: showPopup }">
    <div class="example__shadow" @click="togglePopup()"></div>
    <div class="example__opener" @click="togglePopup()">
      Посмотреть пример персональной видеооткрытки
    </div>
    <div class="example__body">
      <button class="example__close" @click="togglePopup()">
        <img src="../assets/images/close_icon.svg" alt="" />
      </button>
      <div class="example__wrapper">
        <div class="example__title">пример персонального поздравления</div>
        <img
          @click="$modal.show('video_popup')"
          class="example__video-trigger"
          src="../assets/images/video-preview.png"
          alt=""
        />

        <img
          class="example__img hidden-xs"
          src="../assets/images/example-img.png"
          srcset="../assets/images/example-img@2x.png"
          alt=""
        />
        <img
          class="example__img visible-xs"
          src="../assets/images/example-img-mobile.png"
          srcset="../assets/images/example-img-mobile@2x.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showPopup: false,
    playing: false,
  }),
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
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
    setValue(value) {
      this.showPopup = value;
      console.log(value);
    },
  },
  created: function () {
    this.$parent.$on("update", this.setValue);
  },
};
</script>

<style lang="scss" scoped>
.example {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10000;
  opacity: 0;
  .fp-viewing-steps &,
  .fp-viewing-about & {
    opacity: 1;
  }
  &__shadow {
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(#4a0e25, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
    ._open & {
      opacity: 1;
      pointer-events: all;
      cursor: pointer;
    }
  }
  &._open {
    pointer-events: all;
    opacity: 1;
  }
  &__body {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 80vw;
    height: 100%;
    background: #fff7f4 url("../assets/images/popup-background.png") no-repeat
      bottom center;
    background-size: 100%;
    transform: translateX(101%);
    transition: 0.4s;
    ._open & {
      transition-delay: 0.4s;
      transform: translateX(0%);
    }
  }
  &__opener {
    display: none;
    position: absolute;
    top: rem(140px);
    right: rem(53px);
    width: rem(294px);
    padding: rem(23px) rem(37px) rem(23px) rem(15px);
    color: #fff;
    font-size: rem(19px);
    line-height: rem(26px);
    letter-spacing: rem(1px);
    text-align: right;
    text-transform: uppercase;
    background: $yellow;
    transition: 0.4s;
    pointer-events: all;
    cursor: pointer;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: rem(-20px);
      width: rem(40px);
      height: rem(40px);
      transform: translateY(-50%) rotate(45deg);
      background: $yellow;
    }
    &:hover {
      transform: translateX(-10px);
    }
    ._open & {
      opacity: 0;
      transform: translateX(150%);
    }
    .fp-viewing-steps & {
      transform: translateY(-34%);
    }
  }
  &__wrapper {
    height: 100%;
    padding: rem(23px) 0 rem(24px) 0;
    overflow: auto;
    transition: 0.4s;
    opacity: 0;
    ._open & {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
  &__close {
    display: block;
    width: rem(14px);
    height: rem(14px);
    position: absolute;
    top: rem(24px);
    right: rem(22px);
    z-index: 1;
  }
  &__title {
    width: 73%;
    margin-bottom: rem(28px);
    margin-left: rem(16px);
    font-size: rem(10px);
    line-height: rem(13px);
    font-family: "Demi";
    letter-spacing: rem(1px);
    color: $red;
    text-transform: uppercase;
  }
  &__video-trigger {
    width: calc(100% - #{rem(38px)});
    margin-left: rem(16px);
  }
  &__img {
    position: relative;
    margin-top: rem(25px);
    z-index: 1;
  }
  @media (min-width: $md) {
    &__opener {
      display: block;
    }
    &__title {
      width: 45%;
      margin-left: 0;
      font-size: rem(21px);
      line-height: rem(28px);
      letter-spacing: rem(2px);
    }
    &__close {
      width: rem(35px);
      height: rem(35px);
      top: rem(32px);
      right: rem(16px);
    }
    &__body {
      width: 50vw;
      transform: translateX(calc(100% - #{rem(80px)}));
    }
    &__video-trigger {
      width: 90%;
      margin-left: 0;
    }
    &__wrapper {
      padding: rem(53px) 0 0 rem(57px);
    }
    &__img {
      margin-top: rem(-40px);
    }
  }
}
</style>
