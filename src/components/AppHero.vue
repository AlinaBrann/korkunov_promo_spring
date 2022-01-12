<template>
  <section class="hero section">
    <div class="container">
      <div class="hero__content">
        <div class="hero__title" v-html="title"></div>
        <div class="hero__show-example visible-xs" @click="click">Посмотреть пример персональной видеооткрытки</div>
      </div>
    </div>
    <img
      class="hidden-xs hero__agutin"
      src="../assets/images/hero/agutin.png"
      alt=""
    />
    <img
      class="visible-xs hero__agutin"
      src="../assets/images/hero/agutin-mobile.png"
      alt=""
    />
    <div class="hero-wtb">
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
      <a href="" class="hero-wtb__link">Где купить?</a>
    </div>
    <AppExample class="visible-xs"/>
    <AppScrollDown text="Как создать поздравление?" />
  </section>
</template>

<script>
import AppScrollDown from "./AppScrollDown.vue";
import AppExample from "./AppExample.vue";
export default {
  components: {
    AppScrollDown,
    AppExample
},
  data: () => ({
    title: "Поздравьте того, кто важен <small>с Леонидом Агутиным</small>",
  }),
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
    click() {
        this.$emit('update', true);
    }
  },
  mounted() {
    // this.toCheckUpload()
    this.showModal("receipt_question");
  },
};
</script>
<style lang="scss">
.hero {
  height: 100vh;
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: url('../assets/images/hero/bottom-flowers-mobile.png') no-repeat bottom;
    background-size: 100%;
    z-index: 1;
  }
  &::after {
    display: none !important;
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
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    font-size: rem(11px);
    background: $yellow;
    text-decoration: underline;
    &::before {
      content: '';
      position: absolute;
      top: rem(4px);
      left: rem(4px);
      width: 100%;
      height: 100%;
      display: block;
      background: #997C4B;
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
  &__agutin {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    // height: 97vh;
    object-fit: cover;
    object-position: bottom right;
    z-index: 0;
  }
  &-wtb {
    position: absolute;
    right: 0;
    bottom: 7vh;
    z-index: 1;
    &__img {
      width: 70vw;
      max-height: 60vh;
      object-fit: contain;
    }
    &__link {
      position: absolute;
      display: none;
      bottom: 3.7vw;
      left: rem(18px);
      letter-spacing: rem(2px);
      z-index: 1;
      color: #fff;
      font-size: rem(20px);
      line-height: 1;
      text-transform: uppercase;
      border-bottom: 1px solid #fff;
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
    background-size: auto rem(760px);
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
    &::before {
      height: rem(527px);
      background: url('../assets/images/hero/bottom-flowers.png') no-repeat;
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

    &__agutin {
      width: 61vw;
      height: auto;
      max-height: 95vh;
      height: calc(var(--vh, 1vh) * 95);
      object-position: top center;
      right: 14%;
    }
    &-wtb {
      right: rem(-85px);
      &__img {
        width: 48vw;
      }
      &__link {
        display: inline-block;
      }
    }
  }
  @media (max-width: $xlg) {
  }
}
</style>
