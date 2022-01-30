<template>
  <div class="coming-soon">
    <img src="../assets/images/logo-big.png" alt="" class="coming-soon__logo" />
    <h1 class="coming-soon__title">Поздравьте того, <br />кто важен</h1>
    <div class="coming-soon__timer-label">До старта акции осталось:</div>
    <vac end-time="Sat, 01 Feb 2022 10:00:00 GMT" class="coming-soon__timer">
      <div slot="process" slot-scope="{ timeObj }">
        <div class="timer">
          <div class="timer__item">
            <div class="timer__number">
              {{ timeObj.d }}
            </div>
            <div class="timer__text">дней</div>
          </div>
          <div class="timer__item">
            <div class="timer__number">
              {{ timeObj.h }}
            </div>
            <div class="timer__text">часов</div>
          </div>
          <div class="timer__item">
            <div class="timer__number">
              {{ timeObj.m }}
            </div>
            <div class="timer__text">минут</div>
          </div>
        </div>
      </div>
      <span slot="finish">Акция уже началась!</span>
    </vac>
    <button class="btn btn--primary" @click="showModal('reminder__popup')">
      НАПОМНИТЬ
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
  },
  mounted() {
    this.$parent.showHeader = false;
    this.$parent.showFooter = true;
  },
};
</script>

<style lang="scss" scoped>
.coming-soon {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  &__logo {
    position: relative;
    height: rem(39px);
    margin-bottom: rem(50px);
    z-index: 1;
  }
  &__title {
    margin-bottom: rem(28px);
    color: #fff;
    font-size: rem(18px);

    letter-spacing: rem(2px);
    text-align: center;
    line-height: 1.35;
    text-transform: uppercase;
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
      font-size: 5.7vh;
    }
    &__timer {
      width: 55%;
      margin: 0 auto;
      &-label {
        margin-bottom: 2.2vh;
        font-size: rem(22px);
        letter-spacing: rem(1px);
      }
    }
  }
}
.timer {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: rem(30px);
  &__item {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
  }

  &__number {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6.5vh;
    line-height: 6.5vh;

    color: #fff;
  }
  &__text {
    color: $yellow;

    font-size: rem(9.3px);
    line-height: rem(11px);
    text-transform: uppercase;
    text-align: center;
  }
  @media (min-width: $sm) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 11.27vh;
    &__number {
      margin-bottom: rem(10px);
      font-size: 10.47vh;
      line-height: 1;
      color: #fff;
    }
    &__text {
      font-size: rem(22px);
      line-height: 3.65vh;
    }
  }
}
</style>
