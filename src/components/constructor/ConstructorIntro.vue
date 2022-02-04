<template>
  <div class="constructor-intro">
    <div class="container">
      <router-link to="/">
        <img
          class="constructor-intro__logo"
          src="../../assets/images/logo.png"
          alt=""
        />
      </router-link>
      <h1 class="constructor-intro__title">
        <small
          >Создайте персональное <br />видеопоздравление <br />
          с Сергеем Безруковым</small
        >
        <strong>Тому, кто важен</strong>
      </h1>
      <button class="constructor-intro__btn" @click="goToNext()">
        Создать поздравление
      </button>
      <router-link :to="{ name: 'EnterPincode', params: { backTo: '/'}}" class="constructor-intro__btn"
        >Посмотреть поздравление</router-link
      >
      <a
        :href="`${publicPath}docs/constructor_rules.pdf`"
        target="_blank"
        class="constructor-intro__rules"
      >
        Правила акции
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
  methods: {
    goToNext() {
      this.$root.$emit("nextStep");
    },
  },
};
</script>

<style lang="scss" scoped>
.constructor-intro {
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  color: #fff;
  text-align: center;
  background: url("../../assets/images/constructor/intro-background.png")
    no-repeat center bottom;
  background-size: 100%;
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
  }
  &__logo {
    display: block;
    margin: rem(10px) auto rem(18px);
    height: rem(49px);
  }
  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: rem(11px);
    align-items: center;
    font-family: "Demi";
    span {
      text-transform: uppercase;
      font-size: rem(16px);
      line-height: rem(24px);
      letter-spacing: rem(2px);
    }
    small {
      font-size: rem(14px);
      line-height: rem(19px);
    }
    strong {
      font-size: rem(24px);
      letter-spacing: rem(2px);
      text-transform: uppercase;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: rem(36px);
    margin-bottom: rem(10px);
    border: rem(2px) solid #fff;
    text-transform: uppercase;
    font-size: rem(12px);
    letter-spacing: rem(1px);
    &:last-of-type {
      margin-bottom: rem(18px);
    }
  }
  &__rules {
    border-bottom: 1px solid #fff;
    font-size: rem(12px);
  }
}
</style>
