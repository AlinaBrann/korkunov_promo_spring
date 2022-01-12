<template>
  <section class="prizes section">
    <div class="container">
      <h2 class="prizes__title" data-show>
        поздравляйте тех, кто важен
        <span>выигрывайте призы</span>
      </h2>
      <div 
        class="prizes-block"
        data-show
        :class="{'hidden-xs': type == 'main'}"
      >
        <div class="prizes-block__title">Еженедельные призы</div>
        <div class="prizes__list">
          <div
            class="prizes__item"
            v-for="(item, index) in prizesWeekly"
            :key="index"
          >
            <div class="prizes__item-img-wrapper">
              <img
                v-if="item.img2x"
                :src="require(`../assets/images/prizes/${item.img}`)"
                :srcset="`${item.img2x} 2x`"
                alt=""
                class="prizes__item-img"
              />
              <img
                v-else-if="item.img"
                :src="require(`../assets/images/prizes/${item.img}`)"
                alt=""
                class="prizes__item-img"
              />
            </div>

            <div class="prizes__item-info">
              <p
                class="prizes__item-text"
                v-if="item.text"
                v-html="item.text"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div 
        class="prizes-block"
        data-show
        :class="{'hidden-xs': type == 'week'}"
      >
        <div class="prizes-block__title">Главные призы</div>
        <div class="prizes__list">
          <div
            class="prizes__item"
            v-for="(item, index) in prizesMain"
            :key="index"
          >
            <div class="prizes__item-img-wrapper">
              <img
                v-if="item.img2x"
                :src="require(`../assets/images/prizes/${item.img}`)"
                :srcset="`${item.img2x} 2x`"
                alt=""
                class="prizes__item-img"
              />
              <img
                v-else-if="item.img"
                :src="require(`../assets/images/prizes/${item.img}`)"
                alt=""
                class="prizes__item-img"
              />
            </div>

            <div class="prizes__item-info">
              <p
                class="prizes__item-text"
                v-if="item.text"
                v-html="item.text"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['type'],
  data: () => ({
    prizesWeekly: [
      {
        img: "prize_1.png",
        img2x: require("../assets/images/prizes/prize_1@2x.png"),
        text: "Сертификат на&nbsp;покупку техники",
      },
      {
        img: "prize_2.png",
        img2x: require("../assets/images/prizes/prize_2@2x.png"),
        text: "Сертификат на&nbsp;Ozon",
      },
      {
        img: "prize_3.png",
        img2x: require("../assets/images/prizes/prize_3@2x.png"),
        text: "Подписка на Яндекс.Плюс",
      },
    ],
    prizesMain: [
      {
        img: "prize_4.png",
        img2x: require("../assets/images/prizes/prize_4@2x.png"),
        text: "<span>к 14 февраля</span> <br>Сертификат на домашний кинотеатр",
      },
      {
        img: "prize_5.png",
        img2x: require("../assets/images/prizes/prize_5@2x.png"),
        text: "<span>к 23 февраля</span> <br>Сертификат на&nbsp;игровую консоль с&nbsp;двумя джойстиками",
      },
      {
        img: "prize_6.png",
        img2x: require("../assets/images/prizes/prize_6@2x.png"),
        text: "<span>к 8 марта</span> <br>2 сертификатана покупку смартфонов",
      },
    ],
  }),
  components: {},
};
</script>

<style lang="scss">
.prizes {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  padding-top: rem(74px);
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: rem(320px);
    width: 100%;
    background: url('../assets/images/prizes/background-mobile.png') no-repeat left bottom;
    background-size: contain;
  }
  .container {
    position: relative;
    z-index: 2;
  }
  &__title {
    margin-bottom: rem(50px);
    text-align: left;
    color: #fff;
    letter-spacing: rem(1px);
    font-size: rem(12px);
    text-transform: uppercase;
    line-height: 1.3;
    span {
      display: block;
      font-size: rem(18px);
    }
  }
  &-block {
    display: flex;
    align-items: center;
    &__title {
      width: rem(270px);
      flex-shrink: 0;
      color: $yellow;
      font-size: rem(29px);
      text-transform: uppercase;
    }
    &:first-of-type {
      padding-bottom: rem(30px);
      margin-bottom: rem(30px);
      border-bottom: rem(8px) solid $yellow;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  &__item {
    display: flex;
    align-items: center;
    &-img {
      display: block;
      margin: auto;
      max-height: 90%;
      &-wrapper {
        position: relative;
        width: rem(162px);
        height: rem(162px);
        flex-shrink: 0;
        margin-right: rem(14px);
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0%;
          width: 100%;
          height: 100%;
          background: #FFF;
          border-radius: 50%;
          z-index: -1;
        }
      }
    }
    &-info {
      flex: auto;
    }
    &-text {
      color: #FFF;
      font-family: "Demi";
      font-size: rem(16px);
      line-height: rem(20px);
      text-transform: none;
      span {
        color: $yellow;
        text-transform: uppercase;
      }
    }
  }

  &__item-title {
    text-align: center;
    text-transform: uppercase;
    font-size: rem(18px);
    font-family: "Bold";
    margin-bottom: rem(20px);
  }


  @media (min-width: $sm) {
    padding: rem(85px) 0 rem(20px);
    &::before {
      width: rem(411px);
      height: rem(538px);
      right: 0;
      left: auto;
      top: rem(30px);
      background: url("../assets/images/flowers-1.png") no-repeat center right;
      background-size: contain;
    }
    &__item {
      flex: 0 0 auto;
    }
    &__item-img-wrapper {
      height: rem(143px);
     
    }
  }
  @media (max-width: $md) {
    &-block {
      padding: rem(20px) rem(19px) rem(20px) rem(30px);
      flex-direction: column;
      align-items: flex-start;
      border: rem(3px) solid $yellow;
      border-bottom-width: rem(3px) !important;
      &__title {
        width: auto;
        margin-bottom: rem(15px);
        text-align: left;
        font-size: rem(16px);
        text-transform: none;
        color: #FFF;
      }
    }
    &__list {
      width: 100%;
    }
    &__item {
      width: 100%;
      &:not(:last-of-type) {
        margin-bottom: rem(13px);
      }
      &-img {
        &-wrapper {
          width: rem(71px);
          height: rem(71px);
        }
      }
      &-text {
        font-size: rem(14px);
        font-family: "Reg";
      }
    }
  }
  @media (min-width: $md) {
    align-items: flex-start;
    padding: rem(145px) 0 rem(20px);
    .container {
      height: 100%;
    }
    &__list {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    &__title {
      margin-bottom: rem(50px);
      font-size: rem(26px);
      text-align: center;
      letter-spacing: rem(3px);
      line-height: 1.1;
      span {
        font-size: rem(45px);
      }
    }
    &__item {
      flex: 0 0 33%;
      padding-right: rem(20px);
      &-img {
        &-wrapper {
          width: rem(162px);
          height: rem(162px);
        }
      }
    }
  }
}
</style>
