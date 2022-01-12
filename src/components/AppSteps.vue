<template>
  <section class="steps section">
    <div class="container">
      <div class="steps__title section__title" data-show>
        <span>Как создать поздравление?</span>
      </div>
      <div class="steps__content">
        <div class="steps-nav">
          <div
            class="steps-nav__item"
            data-show
            @click="activeStep = 0"
            :class="{ _active: activeStep == 0 }"
          >
            <div class="steps-nav__item-index">1</div>
            <div class="steps-nav__item-col">
              <div class="steps-nav__item-descr">Покупайте продукцию <br>&laquo;Коркунов&raquo;</div>
              <transition>
                <div v-if="activeStep == 0" class="steps-nav__item-hidden">
                  <a
                    href="/"
                    class="steps-nav__item-button btn btn--bordered"
                  >
                    Где купить?
                  </a>
                  <VueSlickCarousel 
                    v-bind="settings"
                    class="steps-production-slider visible-xs">
                    <img
                      v-for="product in production"
                      :key="product.img"
                      :src="require(`../assets/images/production/${product.img}.png`)"
                      :srcset="
                        require(`../assets/images/production/${product.img}@2x.png`)
                      "
                      alt=""
                      class="steps-production__img"
                    />
                  </VueSlickCarousel>
                </div>
              </transition>
            </div>
          </div>
          <div
            class="steps-nav__item"
            data-show
            @click="activeStep = 1"
            :class="{ _active: activeStep == 1 }"
          >
            <div class="steps-nav__item-index">2</div>
            <div class="steps-nav__item-col">
              <div class="steps-nav__item-descr">Сканируйте QR-код <br>на открытке из упаковки</div>
              <transition>
                <div v-if="activeStep == 1" class="steps-nav__item-hidden">
                  <a
                    href=""
                    class="steps-nav__item-button btn btn--bordered visible-xs"
                  >
                    СКАНИРОВАТЬ
                  </a>
                  <iframe class="visible-xs" data-path="/animation/anim-2/index.html" src="" frameborder="0"></iframe>
                </div>
              </transition>
            </div>
          </div>
          <div
            class="steps-nav__item"
            data-show
            @click="activeStep = 2"
            :class="{ _active: activeStep == 2 }"
          >
            <div class="steps-nav__item-index">3</div>
            <div class="steps-nav__item-col">
              <div class="steps-nav__item-descr">Создавайте персонализированное поздравление своим близким!</div>
              <transition>
                <div v-if="activeStep == 2" class="steps-nav__item-hidden">
                  <img
                    src="../assets/images/agutin-mobile.png"
                    alt=""
                    class="steps-nav__agutin visible-xs"
                  />
                  <img
                    src="../assets/images/phone-example-mobile.png"
                    alt=""
                    class="steps-nav__phone-example visible-xs"
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="steps-detail hidden-xs">
          <div class="steps-detail__item">
            <div class="steps-production">
              <img
                v-for="product in production"
                :key="product.img"
                :src="require(`../assets/images/production/${product.img}.png`)"
                :srcset="
                  require(`../assets/images/production/${product.img}@2x.png`)
                "
                alt=""
                class="steps-production__img"
              />
            </div>
          </div>
          <div class="steps-detail__item">
            <iframe data-path="/animation/anim-1/index.html" src="" frameborder="0"></iframe>
          </div>
          <div class="steps-detail__item">
            <img
              src="../assets/images/hero/agutin.png"
              alt=""
              class="steps-detail__agutin"
            />
            <img
              src="../assets/images/phone-example.png"
              alt=""
              class="steps-detail__phone-example"
            />
          </div>
        </div>
      </div>
    </div>
    <AppScrollDown text="Акция в Едадил" />
  </section>
</template>
<script>
import AppScrollDown from "./AppScrollDown.vue";
import VueSlickCarousel from 'vue-slick-carousel';
export default {
  components: { AppScrollDown, VueSlickCarousel },
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
      activeStep: 0,
      settings: {
        infinity: true,
        fade: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10vw",
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "80px",
            }
          },
        ]
      },
      production: [
        {
          img: "product_1",
        },
        {
          img: "product_2",
        },
        {
          img: "product_3",
        },
        {
          img: "product_4",
        },
      ],
    };
  },
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
  },
  mounted() {
    let scroll = false;
    let $this = this;
    let stepsItems = document.querySelectorAll(".steps-detail__item");
    stepsItems[0].classList.add("_active");
    
    document
      .querySelector(".steps")
      .addEventListener("wheel", function (event) {
        if (event.deltaY < 0 && !scroll) {
          if ($this.activeStep > 0) {
            $this.activeStep -= 1;
            scroll = true;
          } else if ($this.activeStep === 0) {
            $this.$root.$emit("prevSection");
            scroll = true;
          }
          setTimeout(() => {
            scroll = false;
          }, 1000);
        } else if (event.deltaY > 0 && !scroll) {
          if ($this.activeStep < $this.steps.length - 1) {
            $this.activeStep += 1;
            scroll = true;
          } else if ($this.activeStep === $this.steps.length - 1) {
            $this.$root.$emit("nextSection");
            scroll = true;
          }
          setTimeout(() => {
            scroll = false;
          }, 1000);
        }
      });
  },
  watch: {
    activeStep(newVal) {
      let steps = document.querySelectorAll(".steps-detail__item");
      steps.forEach((element) => {
        element.classList.remove("_active");
      });
      steps[newVal].classList.add("_active");
      setTimeout(() => {
        if (!steps[newVal].classList.contains("_passed")) {
          steps[newVal].className += " _passed";
        }
        if (newVal == 1) {
          let iframes = document.querySelector('.steps').querySelectorAll('iframe')
          for (let index = 0; index < iframes.length; index++) {
            const element = iframes[index];
            if (element.getAttribute('src') == "") {
              element.setAttribute('src',element.getAttribute('data-path'))
            }
            
          }
        }
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.steps {
  position: relative;
  display: flex;
  padding: rem(70px) 0 0;
  overflow: hidden;
  z-index: 2;
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 99;
  }
  &__title {
    margin-bottom: rem(10px);
  }
  &__content {
    position: relative;
    display: flex;
    flex: auto;
    max-width: 100%;
    height: 100%;
    z-index: 9;
  }
  &-nav {
    position: relative;
    display: flex;
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    &__item {
      position: relative;
      display: flex;
      width: 100%;
      max-width: 100%;
      padding-left: rem(33px);
      margin-bottom: rem(25px);
      color: #fff;
      transform-origin: left center;
      transition: 0.4s;
      cursor: pointer;
      &-hidden {
        position: relative;
        height: 100%;
      }
      &-col {
        flex: 0 1 auto;
        max-width: 100%;
        width: 100%;
        iframe {
          position: relative;
          right: rem(-20px);
        }
      }
      &-button {
        margin-bottom: rem(18px);
        opacity: 0;
        transition: 0.4s;
        ._active & {
          opacity: 1;
        }
      }
      &-index {
        position: absolute;
        top: 0;
        left: 0;
        width: rem(26px);
        height: rem(26px);
        margin-right: rem(7px);
        color: $yellow;
        font-family: "Bold";
        font-size: rem(14px);
        line-height: rem(19px);
        transition: .4s;
        transform-origin: left top;
        ._active & {
          transform: scale(2);
        }
      }
      &-descr {
        min-height: rem(40px);
        font-family: "Demi";
        font-size: rem(14px);
        line-height: rem(16px);
        opacity: 0.7;
        transition: .4s;
        transform-origin: left top;
        a,
        span {
          color: $pink;
          font-family: "Bold";
          text-decoration: none;
        }
        a {
          border-bottom: 1px solid currentColor;
        }
        ._active & {
          opacity: 1;
        }
      }
    }
    &__agutin {
      position: absolute;
      left: -15%;
      height: 100%;
      object-fit: contain;
      object-position: bottom center;
    }
    &__phone-example {
      position: absolute;
      width: 45vw;
      bottom: 0;
      right: 0;
    }
  }
  &-detail {
    position: relative;
    flex: auto;
    &__item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      opacity: 0;
      &._active {
        transition: 0.4s;
        opacity: 1;
      }
    }
    &__single-product {
      width: 70%;
      margin: auto 0;
    }
    &__agutin {
      position: absolute;
      bottom: 0;
      left: -20%;
      height: 80vh;
      object-fit: contain;
    }
    &__phone-example {
      position: absolute;
      bottom: 0;
      right: 13%;
      width: rem(350px);
      transform: translateY(100%);
      transition: 0.4s;
      transition-delay: .5s;
      ._passed & {
        transform: translateY(0%);
      }
    }
  }
  &-production {
    display: flex;
    width: 100%;
    height: 90%;
    flex-wrap: wrap;
    &__img {
      display: block;
      width: 50%;
      height: auto;
      object-fit: contain;
    }
    &-slider {
      left: rem(-48px);
      width: 100vw;
      max-width: 100vw;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: rem(30px);
        background: linear-gradient(to right, #9E0D53 32.86%, rgba(158, 13, 83, 0) 100%);
        z-index: 10;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: rem(30px);
        background: linear-gradient(to left, #9E0D53 32.86%, rgba(158, 13, 83, 0) 100%);
        z-index: 10;
      }
      img {
        height: rem(85px);
        object-fit: contain;
      }
      .slick-next,
      .slick-prev {
        width: rem(30px);
        height: rem(40px);
        z-index: 20;
        &:before {
          display: block;
          width: 100%;
          height: 100%;
          font-size: 0;
          background: url('../assets/images/arrow-white.svg') no-repeat center;
          background-size: rem(14px);
          opacity: 1;
        }
      }
      .slick-prev {
        left: 0;
      }
      .slick-next {
        right: 0;
        &:before {
          transform: rotate(180deg);
        }
      }
    }
  }
  &__list {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 0 auto;
  }

  &__item-title {
    font-size: rem(16px);
    font-family: "Bold";
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  @media (max-width: $md) {
    .container {
      padding-right: 0;
    }
    &-nav {
      &__item {
        &:last-of-type {
          margin-bottom: 0;
          flex: auto;
        }
      }
    }
    &-production-slider {
      max-width: 100vw !important;
    }
  }
  @media (min-width: $sm) {

    &-production-slider {
      left: rem(-85px);
    }
    &-nav {
      &__item {
        padding-left: rem(50px);
        &-index {
          font-size: rem(23px);
          line-height: rem(30px);
        }
        &-descr {
          font-size: rem(18px);
          line-height: rem(24px);
        }
      }
    }
  }
  @media (min-width: $md) {
    padding: rem(140px) 0 0;
    background: url("../assets/images/hero/flowers.png") no-repeat right bottom !important;
    background-size: auto rem(760px);
    &__list {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: flex-start;
      max-width: rem(970px);
      padding-bottom: rem(70px);
      margin: 0 auto;
    }
    &__title {
      margin-bottom: rem(60px);
    }
    &-nav {
      flex: 0 0 33%;
      margin-right: 3%;
      &__item {
        height: rem(145px);
        margin-bottom: rem(34px);
        padding-left: rem(70px);
        &-index {
          width: rem(50px);
          height: rem(50px);
          margin-right: rem(20px);
          font-size: rem(33px);
          line-height: rem(40px);
        }
        &-button {
          margin-top: rem(40px);
          margin-bottom: 0;
          opacity: 0;
          ._active & {
            opacity: 1;
          }
        }
        &-descr {
          font-size: rem(18px);
          line-height: rem(24px);
          opacity: 1;
          ._active & {
            transform: scale(1.7);
          }
        }
      }
    }
    &__item-index {
      width: rem(45px);
      height: rem(45px);
      font-size: rem(30px);
      line-height: 1;
    }
  }
}
iframe {
  width: 100%;
}
</style>
