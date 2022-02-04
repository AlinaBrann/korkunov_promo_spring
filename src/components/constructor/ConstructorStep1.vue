<template>
  <constructor-step
    title="шаг 1. Какое чувство&nbsp;Вы хотите передать к&nbsp;получателю поздравления? Выберите один вариант"
    back="Назад"
  >
    <VueSlickCarousel v-bind="settings" class="constructor-step__slider" @afterChange="selectBackground">
      <div
        v-for="(item, i) in backgrounds"
        :key="i"
        class="constructor-step__slide"
        :class="{ _active: currentBackground === i + 1 }"
        @click="selectBackground(i + 1)"
      >
        <div class="constructor-step__slide-title">{{ item.title }}</div>
        <div class="constructor-step__slide-background">
          <img
            :src="require(`../../assets/images/constructor/${item.img}`)"
            alt=""
            class="constructor-step__slide-img"
          />
          <div class="constructor-step__slide-text">{{ item.text }}</div>
        </div>
      </div>
    </VueSlickCarousel>
    <button
      class="constructor-step__button btn btn--bordered"
      @click="submit()"
    >
      продолжить
    </button>
  </constructor-step>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import ConstructorStep from "../ConstructorStep.vue";
export default {
  data: () => ({
    settings: {
      centerMode: true,
      centerPadding: "30px",
    },
    currentBackground: 1,
    backgrounds: [
      {
        title: "благодарность",
        text: "С благодарностью",
        img: "background-1.png",
      },
      {
        title: "Любовь",
        text: "С любовью",
        img: "background-1.png",
      },
      {
        title: "Счастье",
        text: "Счастья",
        img: "background-1.png",
      },
      {
        title: "уважение",
        text: "С уважением",
        img: "background-1.png",
      },
    ],
  }),
  methods: {
    goToNext() {
      this.$root.$emit("nextStep");
    },
    selectBackground(idx) {
      this.currentBackground = idx + 1;
      console.log(idx);
    },
    submit() {
      this.$store
        .dispatch("CreateCongratulation", {
          type: this.currentBackground,
        })
        .then((r) => {
          console.log(r);
          if (r.error != 0) {
            this.$modal.show("common_error", {
              text: "Что-то пошло не так, " + r.message.common,
            });
          } else {
            this.$store.commit("CHANGE_CONGRATULATION_ID", r.congratulation_id);
            this.$store.commit("CHANGE_VIDEO_URL",  r.video);

            this.$root.$emit("nextStep");
          }
        })
        .catch((e) => {
          this.$modal.show("common_error", {
            text: "Что-то пошло не так, " + e,
          });
        });
    },
  },
  components: { ConstructorStep, VueSlickCarousel },
};
</script>

<style lang="scss">
.constructor-step {
  &__slider {
    width: 100%;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -20px;
      height: 110%;
      width: rem(42px);
      background: linear-gradient(
        to right,
        #9e0d53 32.86%,
        rgba(158, 13, 83, 0) 100%
      );
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -20px;
      height: 110%;
      width: rem(42px);
      background: linear-gradient(
        to left,
        #9e0d53 32.86%,
        rgba(158, 13, 83, 0) 100%
      );
      z-index: 1;
    }
    .slick-prev,
    .slick-next {
      width: rem(42px);
      height: 100%;
      z-index: 10;
      &::before {
        font-size: 0;
        background-position: top center;
      }
    }
    .slick-next {
      &::before {
        transform: rotate(180deg);
        background-position: bottom center;
      }
    }
  }
  &__slide {
    position: relative;
    padding-bottom: rem(40px);
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: rem(26px);
      height: rem(16px);
      background: url("../../assets/images/arrow-up.svg") no-repeat center;
      opacity: 0;
      transition: 0.4s;
      background-size: contain;
    }
    &._active {
      &::after {
        opacity: 1;
      }
    }
    &-title {
      margin-bottom: rem(33px);
      font-size: rem(12px);
      text-transform: uppercase;
      text-align: center;
      font-family: "Demi";
      letter-spacing: 1px;
    }
    &-background {
      position: relative;
      width: 100%;
      padding: 0 rem(15px);
    }
    &-img {
      width: 100%;
    }
    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      transform: translate(-50%, -50%);
      font-family: "Magnolia";
      text-align: center;
    }
  }
}
</style>
