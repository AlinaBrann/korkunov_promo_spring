<template>
  <section class="edadil-promo section">
    <div class="container">
      <div class="edadil-promo__title" data-show>
        поздравляйте тех, кто важен <span>получайте кешбэк</span>
      </div>
      <ul class="edadil-promo__steps">
        <li v-for="(item, i) in steps" :key="i" class="edadil-promo__item" data-show>
          <span>{{ i + 1 }}</span>
          {{ item }}
          <img src="../assets/images/edadil-enter.png" v-if="i == 1" alt="">
        </li>
      </ul>
    </div>
    <AppScrollDown text="Призы" />
  </section>
</template>

<script>
import AppScrollDown from "./AppScrollDown.vue";
export default {
  components: { AppScrollDown },
  data: () => ({
    steps: [
      "купите «Коркунов»",
      "СКАНИРУЙте ЧЕК В ЕДАДИЛ",
      "ПОЛУЧИте КЕШБЭК",
      "ВЫИГРЫВАЙте ПРИЗЫ",
    ],
  }),
};
</script>

<style lang="scss" scoped>
.edadil-promo {
  display: flex;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: rem(210px);
    width: 50%;
    background: url('../assets/images/flowers-2-mobile.png') no-repeat left bottom;
    background-size: contain;
  }
  .container {
    position: relative;
    z-index: 4;
  }
  &__title {
    margin-bottom: rem(20px);
    text-align: left;
    color: #fff;
    font-size: rem(12px);
    text-transform: uppercase;
    letter-spacing: rem(1px);
    line-height: 1.3;
    span {
      display: block;
      font-size: rem(18px);
    }
  }
  &__steps {
    display: flex;
    width: 100%;
    min-height: 50vh;
    flex-direction: column;
    padding: rem(7px) rem(29px);
    border: rem(3px) solid $yellow;
    color: #fff;
  }
  &__item {
    display: flex;
    flex-direction: column;
    margin-bottom: rem(15px);
    align-items: flex-start;
    font-size: rem(13px);
    text-transform: uppercase;
    span {
      color: $yellow;
      font-size: rem(15px);
      line-height: rem(20px);
    }
    img {
      width: 60%;
      margin-top: rem(10px);
    }
  }
  @media (min-width: $sm) {
    &__item {
      font-size: rem(18px);
      span {
        font-size: rem(20px);
        line-height: rem(25px);
      }
    }
  }
  @media (min-width: $md) {
    align-items: flex-start;
    padding-top: rem(145px);
    &::before {
      width: rem(411px);
      height: rem(538px);
      right: 0;
      left: auto;
      top: rem(30px);
      background: url("../assets/images/flowers-1.png") no-repeat center right;
      background-size: contain;
    }
    &__title {
      margin-bottom: rem(50px);
      font-size: rem(26px);
      text-align: center;
      line-height: 1.1;
      letter-spacing: rem(3px);
      span {
        font-size: rem(45px);
      }
    }
    &__steps {
      padding: rem(90px) rem(56px);
      flex-direction: row;
      justify-content: space-between;
      border-width: rem(8px);
    }
    &__item {
      flex: 0 0 23%;
      margin-bottom: 0;
      font-size: rem(30px);
      span {
        font-size: rem(33px);
        line-height: rem(50px);
      }
      img {
        width: auto;
        margin-top: rem(40px);
      }
    }
  }
}
</style>
