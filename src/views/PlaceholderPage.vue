<template>
  <div class="placeholder-page">
    <div class="container">
      <img
        src="../assets/images/logo-big.png"
        alt=""
        class="placeholder-page__logo"
      />
      <h1 class="placeholder-page__title">
        Сайт доступен для <strong>просмотра со смартфона</strong>
      </h1>
      <div class="placeholder-page__text">
        {{
          "Для просмотра этой страницы откройте ее на мобильном устройстве"
            | typograf
        }}
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from "../utils/device";

export default {
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
  },
  created() {
    if (isMobile()) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.placeholder-page {
  position: relative;
  padding-top: rem(34px);
  padding-bottom: rem(144px);
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
  }
  &::before {
    width: rem(106px);
    height: rem(114px);
    right: 0;
    top: rem(-15px);
    background: url("../assets/images/flowers-1-mobile.png") no-repeat center
      right;
    background-size: contain;
  }
  &::after {
    bottom: 0;
    left: 0;
    width: rem(156px);
    height: rem(200px);
    background: url("../assets/images/flowers-2-mobile.png") no-repeat top left;
    background-size: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__logo {
    position: relative;
    height: rem(39px);
    margin-bottom: rem(50px);
    z-index: 1;
  }
  &__title {
    width: 80%;
    margin-bottom: rem(28px);
    color: #fff;
    font-size: rem(18px);

    letter-spacing: rem(2px);
    text-align: center;
    line-height: 1.35;
    text-transform: uppercase;
    strong {
      display: block;
      color: $yellow;
      font-size: rem(74px);
      line-height: rem(102px);
    }
  }
  &__timer {
    width: 100%;
    &-label {
      margin-bottom: rem(11px);
      color: #fff;
      text-align: center;
      font-size: rem(9px);

      text-transform: uppercase;
    }
  }
  @media (min-width: $sm) {
    padding-top: 9vh;
    padding-bottom: 17.53vh;
    height: 100vh;
    &::before {
      width: rem(411px);
      height: rem(598px);
      right: 0;
      top: rem(10px);
      background: url("../assets/images/flowers-1.png") no-repeat center right;
      background-size: contain;
    }
    &::after {
      bottom: 0;
      left: 0;
      width: rem(550px);
      height: rem(306px);
      background: url("../assets/images/flowers-2.png") no-repeat bottom left;
      background-size: contain;
    }
    &__logo {
      height: 9.62vh;
      margin-bottom: 11vh;
    }
    &__title {
      margin-bottom: 6.3vh;
      font-size: rem(46px);
      font-family: "Demi";
    }
    &__text {
      width: 38%;
      margin: auto;
      font-size: rem(24px);
      text-align: center;
      color: #fff;
      font-family: "Bold";
    }
  }
}
</style>
