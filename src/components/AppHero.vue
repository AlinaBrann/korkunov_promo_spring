<template>
  <section class="hero section">
    <div class="container">
      <div class="hero__content">
        <div class="hero__title">
          Поздравьте того, кто важен <small>с Сергеем Безруковым</small>
        </div>
        <div class="hero__show-example visible-xs" @click="click">
          Посмотреть пример персональной видеооткрытки
        </div>
      </div>
    </div>
    <img class="hero__seleb" src="../assets/images/bezrukov.png" alt="" />

    <div class="hero-wtb">
      <a href="#edadil" class="hero-wtb__edadil visible-xs">
        <img src="../assets/images/edadil_logo.png" alt="" />
        <span>Акция в Едадил</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1.66223 1.94849L4.84973 4.71637L8.03723 1.94849"
            stroke="#48A237"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <img
        class="hero-wtb__img hidden-xs"
        src="../assets/images/hero/hero-1.png"
        srcset="
          ../assets/images/hero/hero-1.png,
          ../assets/images/hero/hero-1@2x.png 2x
        "
        alt=""
      />
      <img
        class="hero-wtb__img visible-xs"
        src="../assets/images/hero/hero-1-mobile.png"
        srcset="
          ../assets/images/hero/hero-1-mobile.png,
          ../assets/images/hero/hero-1-mobile@2x.png 2x
        "
        alt=""
      />
      <a href="#where-to-buy" class="hero-wtb__link">Где купить?</a>
    </div>
    <AppExample class="visible-xs" />
    <AppScrollDown text="Как создать поздравление?" />
  </section>
</template>

<script>
import AppScrollDown from "./AppScrollDown.vue";
import AppExample from "./AppExample.vue";
export default {
  components: {
    AppScrollDown,
    AppExample,
  },
  data: () => ({}),
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
    click() {
      this.$emit("update", true);
    },
  },
  mounted() {
    // this.toCheckUpload()
    this.showModal("receipt_question");
  },
};
</script>
<style lang="scss" scoped>
.hero {
  height: 100vh;
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 100;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: url("../assets/images/hero/bottom-flowers-mobile.png") no-repeat
      bottom;
    background-size: 100%;
    z-index: 2;
  }
  .container {
    position: relative;
    height: 100%;
    z-index: 3;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    z-index: 3;
  }
  &__show-example {
    position: relative;
    width: rem(160px);
    padding: rem(10px);
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-size: rem(11px);
    background: $yellow;
    text-decoration: underline;
    &::before {
      content: "";
      position: absolute;
      top: rem(4px);
      left: rem(4px);
      width: 100%;
      height: 100%;
      display: block;
      background: #997c4b;
      z-index: -1;
    }
  }

  &__title {
    width: 55%;
    margin-bottom: rem(20px);
    font-size: rem(24px);
    line-height: 1.3;
    text-transform: uppercase;
    color: #fff;
    small {
      display: block;
      font-size: rem(14px);
      text-transform: none;
    }
  }
  &__seleb {
    position: absolute;
    right: -20%;
    bottom: -5vh;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 85);
    // height: 97vh;
    object-fit: cover;
    object-position: bottom right;
    z-index: 1;
  }
  &-wtb {
    position: absolute;
    right: 0;
    bottom: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    &__img {
      max-height: 60vh;
      object-fit: contain;
    }
    &__link {
      position: absolute;
      display: none;
      bottom: 3.7vw;
      left: rem(38px);
      letter-spacing: rem(2px);
      z-index: 1;
      color: #fff;
      font-size: rem(20px);
      line-height: 1;
      text-transform: uppercase;
      border-bottom: 1px solid #fff;
    }
    &__edadil {
      display: flex;
      align-items: center;
      padding: rem(6px) rem(10px) rem(6px) rem(15px);
      background: #fff;
      color: $green;
      * {
        flex-shrink: 0;
        flex-grow: 0;
      }
      img {
        width: rem(22px);
        height: rem(22px);
        margin-right: rem(3px);
        flex-shrink: 0;
        flex-grow: 0;
      }
      span {
        margin-right: rem(5px);
        font-size: rem(10px);
        white-space: nowrap;
      }
    }
  }
  &__text {
    margin: rem(10px) auto;
    font-size: rem(16px);
    text-align: center;
    text-transform: uppercase;
    line-height: rem(19px);
    color: #fff;
  }
  @media (min-width: $sm) {
    background: url("../assets/images/hero/flowers.png") no-repeat right bottom !important;
    background-size: auto rem(760px) !important;
    &__title {
      font-size: rem(45px);
      line-height: rem(56px);
      margin-bottom: rem(22px);
    }

    &__text {
      width: 80%;
    }
  }
  @media (min-width: $md) {
    &::after {
      display: none;
    }
    &::before {
      height: 90%;
      background: url("../assets/images/hero/bottom-flowers.png") no-repeat bottom;
      background-size: 100%;
      pointer-events: none;
    }
    &__content {
      padding-top: rem(235px);
    }
    &__title {
      width: 40%;
      margin-bottom: 0;
      font-size: rem(71px);
      line-height: rem(81px);
      letter-spacing: rem(6px);
      small {
        display: block;
        font-size: rem(35px);
        letter-spacing: normal;
      }
    }
    &__date {
      margin-bottom: 0;
      font-size: rem(24px);
    }
    &__text {
      width: 100%;
      margin: 0;
      text-align: left;
      font-size: rem(24px);
      line-height: rem(29px);
    }

    &__seleb {
      width: 61vw;
      bottom: 0;
      height: auto;
      max-height: 90vh;
      height: calc(var(--vh, 1vh) * 90);
      object-position: top center;
      right: 14%;
    }
    &-wtb {
      max-height: 60vh;
      right: -5.9vw;
      &__img {
        max-width: 100%;
        height: 100%;
      }
      &__link {
        display: inline-block;
        left: 1.8vw;
        bottom: 8%;
      }
    }
  }
  @media (max-width: $sm) {
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: url("../assets/images/hero/white-line.png") no-repeat top
        right;
    }
    &-wtb {
      width: 100%;
      &__img {
        width: 55%;
      }
    }
  }
}
</style>
