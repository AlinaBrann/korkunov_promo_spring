<template>
  <div class="constructor-step">
    <div class="container constructor-step__container">
      <div
        class="constructor-step__back"
        v-if="back"
        @click="routeBack ? routeTo(routeBack) : goBack()"
      >
        <img src="../assets/images/arrow-white.svg" alt="" />
        {{ back }}
      </div>
      <div class="constructor-step__title" v-html="title"></div>
      <div class="constructor-step__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "back", "routeBack"],
  methods: {
    goBack() {
      this.$root.$emit("goBack");
    },
    routeTo(to) {
      this.$router.push({ path: to});
    },
  },
};
</script>

<style lang="scss" scoped>
.constructor-step {
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  color: #fff;
  background: url("../assets/images/constructor/constructor-background.jpg")
    no-repeat center bottom;
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: rem(94px);
    background: linear-gradient(
      to top,
      #4d0a24 2.53%,
      rgba(152, 31, 78, 0.38) 78.2%,
      rgba(152, 31, 78, 0) 99.9%
    );
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 50%;
    height: 45%;
    background: url("../assets/images/constructor/flowers.png") no-repeat bottom
      right;
    background-size: contain;
  }
  &__container {
    position: relative;
    display: flex;
    height: 100%;
    padding-top: rem(24px);
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 2;
  }
  &__back {
    display: flex;
    align-items: center;
    margin-bottom: rem(17px);
    text-transform: uppercase;
    font-size: rem(10px);
    img {
      width: rem(5px);
      margin-right: rem(9px);
    }
  }
  &__title {
    margin-top: rem(13px);
    margin-bottom: rem(35px);
    font-size: rem(14px);
    text-transform: uppercase;
    font-family: "Demi";
    text-align: center;
    letter-spacing: rem(1px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    flex: auto;
    padding-bottom: rem(30px);
    a.constructor-step__button {
      & + .constructor-step__button {
         margin-top: rem(7px);
      }
    }
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: rem(36px);
    margin-top: rem(7px);
    font-size: rem(12px);
    letter-spacing: rem(1px);
    &:first-of-type {
      margin-top: auto;
    }
  }
  &__video {
    width: 100%;
    min-height: rem(157px);
    &-wrapper {
      position: relative;
      margin-bottom: rem(33px);
      border-radius: rem(10px);
      overflow: hidden;
    }
    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("../assets/images/constructor/overlay.svg") no-repeat
        center;
      background-size: cover;
      &._play {
        background: url("../assets/images/constructor/overlay-2.svg") no-repeat
          center;
        background-size: cover;
      }
    }
  }
  &__clock {
    margin: 0 auto rem(20px);
  }
  &__text {
    font-size: rem(12px);
    line-height: rem(16px);
    font-family: "Light";
    text-align: center;
    font-weight: 800;
  }
  &__field {
    &-block {
      position: relative;
      margin-bottom: rem(30px);
      p {
        margin-bottom: rem(16px);
        text-align: center;
        text-transform: uppercase;
        font-size: rem(10px);
        line-height: rem(14px);
        font-family: "Bold";
      }
    }
    &-wrapper {
      position: relative;
      display: flex;
      width: 100%;
      height: rem(34px);
      padding-right: rem(4px);
      justify-content: space-between;
      align-items: center;
      background: #fff;
      .error-hint {
        bottom: 110%;
        z-index: 10;
      }
    }
    &-code {
      display: block;
      color: $yellow;
      width: 100%;
      height: rem(34px);
      font-size: rem(10px);
      padding: rem(4px) rem(4px) rem(4px) rem(16px);
      border: none !important;
      outline: none !important;
      z-index: 1;
      &::placeholder {
        color: $yellow;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
    &-btn {
      width: rem(84px);
      flex: 0;
      &:hover {
        background: $yellow;
      }
      ._email-block & {
        position: absolute;
        top: rem(23px);
        right: rem(4px);
      }
    }
  }
  &__text {
    margin-bottom: rem(18px);
    font-family: "Bold";
    font-size: rem(16px);
    line-height: rem(22px);
  }
  &__list {
    margin-bottom: rem(35px);
    &-text {
      margin-bottom: rem(20px);
      text-align: center;
      font-size: rem(14px);
      font-family: "Bold";
    }
    li {
      position: relative;
      padding-left: rem(30px);
      margin-bottom: rem(10px);
      font-size: rem(12px);
      font-family: "Light";
      font-weight: 600;
      letter-spacing: 1px;
      a {
        font-family: "Bold";
        text-decoration: underline;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        font-size: rem(14px);
        color: $yellow;
        font-family: "Bold";
      }
    }
  }
  &__social {
    margin-bottom: rem(44px);
    &-text {
      margin-bottom: rem(15px);
      text-align: center;
      font-size: rem(14px);
      font-family: "Demi";
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-link {
      display: flex;
      width: rem(36px);
      height: rem(36px);
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: rem(12px);
      border: 2px solid #fff;
      border-radius: rem(20px);
      &._big {
        width: auto;
        padding: 0 rem(35px);
      }
      span {
        margin-left: rem(5px);
        text-transform: uppercase;
        font-size: rem(12px);
      }
    }
  }
}
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($red, .5);
  opacity: 0;
  pointer-events: none;
  transition: .4s;
  z-index: 10;
  &._show {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
