<template>
  <div class="production" id="production">
    <app-snowflakes></app-snowflakes>
    <div class="container">
      <h1 class="production__title section__title _pink">
        <span>{{ "Продукты-участники" | typograf }}</span>
      </h1>
      <div class="production__content">
        <div class="production__text" v-if="text" v-html="text"></div>
        <div class="production__list">
          <div
            class="production__item"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="production__item-inner">
              <img
                :src="item.img"
                :srcset="`${item.img2x} 2x`"
                alt=""
                class="production__item-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSnowflakes from "./AppSnowflakes.vue";

export default {
  components: { AppSnowflakes },
  props: {
    items: Array,
    text: String,
  },
  data: function () {
    return {
      isMobile: false,
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    nextSlide() {
      this.$refs.production_swiper.$swiper.slideNext();
    },
    prevSlide() {
      this.$refs.production_swiper.$swiper.slidePrev();
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style lang="scss">
.production {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: rem(70px) 0 rem(30px);

  .container {
    position: relative;
    z-index: 1;
  }

  &__content {
    max-width: rem(700px);
    margin: 0 auto;
  }
  &__text {
    margin-bottom: rem(35px);
    text-align: center;
  }
  &__list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__item {
    flex: 0 0 50%;
    height: rem(45px);
    margin-bottom: rem(40px);
  }

  &__item-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 0 5px;
  }

  &__item-img {
    max-width: 100%;
    height: auto;
    margin: auto;
  }
  @media (min-width: $sm) {
    padding: rem(85px) 0 rem(45px);
    &__text {
      width: 70%;
      margin: 0 auto rem(35px);
    }
    &__item {
      flex: 0 0 20%;
    }
  }
  @media (min-width: $md) {
    padding: rem(100px) 0 rem(60px);
  }
}
</style>
