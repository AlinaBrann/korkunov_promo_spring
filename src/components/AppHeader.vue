<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <a href="/#about">
          <img
            src="@/assets/images/logo.png"
            class="header__logo _left"
            alt=""
          />
        </a>
        <div class="header__inner">
          <div class="header__hamburger" @click="showBurger()">
            <svg
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 1H1"
                stroke="#9E0D53"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 7H7"
                stroke="#9E0D53"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 13H5"
                stroke="#9E0D53"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="header__nav">
            <a
              href="#steps"
              class="header__nav-link"
              :class="{ _active: $route.hash == '#steps' }"
            >
              <span>Как создать поздравление?</span>
            </a>
            <a 
              href="#where-to-buy" 
              class="header__nav-link"
              :class="{ _active: $route.hash == '#where-to-buy' }"
            > 
              <span>
                Где купить? 
              </span>
            </a>
            <a 
              href="#faq" 
              class="header__nav-link"
              :class="{ _active: $route.hash == '#faq' }"
            >
              FAQ
            </a>
            <!-- <a href="#winners" class="header__nav-link">Победители</a> -->
            <div class="header__nav-dropdown" :class="{ _open: dropdownShow}">
              <div class="header__nav-dropdown-trigger" @mouseenter="dropdownShow = true">
                <span>Правила</span>
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none">
                  <path d="M1 1L4.5 4L8 1" stroke="#FFF7F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <ul class="header__nav-dropdown-list" @mouseleave="dropdownShow = false">
                <li class="header__nav-dropdown-item">
                  <a 
                    :href="`${publicPath}docs/constructor_rules.pdf`"
                    target="_blank"
                  >
                    <span>Правила использования <br>конструктора видеопоздравления</span>
                  </a>
                </li>
                <li class="header__nav-dropdown-item">
                  <a 
                    :href="`${publicPath}docs/rules.pdf`"
                    target="_blank"
                  >
                    <span>Правила акции Едадил</span>
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="#edadil"
              class="header__nav-link _accent _green"
              :class="{ _active: $route.hash == '#edadil' }"
            >
              <img src="../assets/images/edadil_logo.svg" alt="" />
              <span>Акция в Едадил</span>
            </a>
            <!-- <a
              href="http://dixypromo.ru/"
              class="header__nav-link _accent _orange"
              target="_blank"
            >
              <img src="../assets/images/logo_dixy.png" alt="" />
              <span>Акция в Дикси</span>
            </a> -->
          </div>
        </div>
        <div class="header__shadow" @click="showBurger()"></div>
        <div class="header__menu_mob">
          <button class="header__menu_mob-close" @click="showBurger()"></button>
          <a
            href="#about"
            @click="showBurger()"
            class="header__nav-link"
            :class="{ _active: $route.hash == '#about' }"
          >
            Главная
          </a>
          <a
            href="#steps"
            @click="showBurger()"
            class="header__nav-link"
            :class="{ _active: $route.hash == '#steps' }"
          >
            Как создать поздравление?
          </a>
          <a
            href="#where-to-buy"
            @click="showBurger()"
            class="header__nav-link"
            :class="{ _active: $route.hash == '#where-to-buy' }"
          >
            Где купить?
          </a>
          <a 
            href="#faq" 
            @click="showBurger()" 
            class="header__nav-link"
            :class="{ _active: $route.hash == '#faq' }"
          >
            FAQ
          </a>
          <!-- <a href="#winners" @click="showBurger()" class="header__nav-link">
            победители
          </a> -->
          <a 
            class="header__nav-link"
            :href="`${publicPath}docs/constructor_rules.pdf`"
            target="_blank"
          >
            <span>Правила использования <br>конструктора видеопоздравления</span>
          </a>
          <a 
            class="header__nav-link"
            :href="`${publicPath}docs/rules.pdf`"
            target="_blank"
          >
            <span>Правила акции Едадил</span>
          </a>
          <a
            href="#edadil"
            @click="showBurger()"
            class="header__nav-link _accent _green"
            :class="{ _active: $route.hash == '#edadil' }"
          >
            <img src="../assets/images/edadil_logo.svg" alt="" />
            <span>Акция в Едадил</span>
          </a>
          <!-- <a
            href="http://dixypromo.ru/"
            class="header__nav-link _accent _orange"
            target="_blank"
          >
            <img src="../assets/images/logo_dixy.png" alt="" />
            <span>Акция в Дикси</span>
          </a> -->
          <div class="header__show-example" @click="click(), showBurger()">
            Посмотреть пример персональной видеооткрытки
          </div>
        </div>
      </div>
    </div>
    <AppExample class="visible-xs" />
  </header>
</template>

<script>
import AppExample from "./AppExample.vue";
export default {
  components: { AppExample },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      dropdownShow: false
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    clickPrize() {
      if (this.$store.getters.user) {
        let apmButton = document.querySelector(
          "#apm-scan-qr .apm-action-button"
        );
        if (apmButton) apmButton.click();
      } else {
        this.$modal.show("authorization");
      }
    },

    showModal(name) {
      this.$modal.show(name);
    },

    showBurger() {
      let header = document.querySelector(".header");
      if (!header.classList.contains("header--mob_active"))
        header.classList.add("header--mob_active");
      else header.classList.remove("header--mob_active");
    },
    click() {
      this.$emit("update", true);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  .container {
    position: relative;
    padding-top: rem(10px);
    padding-bottom: rem(17px);
  }
  &__row {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &.header--mob_active {
    .header__menu_mob {
      transform: translateX(0%);
    }
  }
  &__logo {
    height: rem(38px);
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
  }
  &__nav {
    position: relative;
    width: 100%;
    display: none;
    align-items: center;
  }

  &__nav-link {
    display: flex;
    align-items: center;
    width: 100%;
    height: rem(35px);
    padding-left: rem(40px);
    margin-bottom: rem(15px);
    font-size: rem(14px);
    line-height: 1.4;
    color: #9e0d53;
    transition: all 0.3s ease-in-out;

    &.router-link-exact-active,
    &._active {
      color: #fff;
      background: #9e0d53;
    }
    &._accent {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: rem(20px);
      padding: rem(10px) rem(16px);
      margin-left: 0;
      background: #fff;
      img {
        height: rem(18px);
        margin-right: rem(6px);
      }
      &._active {
        background: #48a237;
        color: #fff;
      }
    }
    &._green {
      color: #48a237;
    }
    &._orange {
      color: #FF7E00;
    }
  }

  &__nav-link:not(._exit):hover {
    border-bottom-color: currentColor;
  }
  &__nav-retail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  &__nav-retail-img {
    max-height: rem(35px);
    margin-bottom: rem(30px);
  }
  &__hamburger {
    display: block;
    width: rem(18px);
    margin: auto 0 auto auto;
    svg {
      width: 100%;
    }
    path {
      ._small & {
        stroke: #fff;
      }
    }
  }
  &__show-example {
    position: relative;
    width: rem(216px);
    padding: rem(16px);
    color: #fff;
    font-size: rem(14px);
    line-height: rem(19px);
    letter-spacing: rem(1px);
    text-transform: uppercase;
    text-decoration: underline;
    background: $yellow;
    transition: 0.4s;
    pointer-events: all;
    cursor: pointer;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: rem(-15px);
      width: rem(30px);
      height: rem(30px);
      transform: translateY(-50%) rotate(45deg);
      background: $yellow;
    }
  }
  &__menu_mob {
    display: flex;
    position: absolute;
    width: 90%;
    top: 0px;
    right: 0;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    padding-top: 0;
    transform: translateX(100%);
    padding-bottom: rem(25px);
    transition: 0.4s;
    z-index: 10;
    .btn--default {
      background-color: transparent;
    }

    .btn {
      margin-bottom: 21px;
      min-width: 280px;
    }

    .btn:last-child {
      margin-top: 20px;
    }
  }
  &__shadow {
    position: absolute;
    display: block;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    background: rgba(#4a0e25, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
    z-index: 0;
    .header--mob_active & {
      opacity: 1;
      pointer-events: all;
      cursor: pointer;
    }
  }
  &__menu_mob-close {
    cursor: pointer;
    align-self: flex-end;
    margin: rem(20px) rem(5px) rem(13px) 0;
    width: rem(34px);
    height: rem(34px);
    flex-shrink: 0;
    margin-bottom: rem(30px);
    background: #ffffff url("../assets/images/close_icon-mobile.svg") no-repeat
      center;
    background-size: rem(16px);
  }
  @media (min-width: $sm) {
    &__logo {
      height: rem(38px);
    }
    &__menu_mob {
      max-width: 45%;
      box-shadow: -5px 4px 10px rgba(0, 0, 0, 0.15);
    }
    &__menu_mob-close {
      background-image: url("../assets/images/close_icon.svg");
    }
  }
  @media (min-width: $md) {
    
    .container {
      padding-top: rem(24px);
    }
    &__row {
      align-items: flex-start;
    }
    &__logo {
      height: rem(56px);
      transform-origin: left top;

    }
    &__nav {
      display: flex;
      align-items: center;
      margin-right: rem(20px);
      &-dropdown {
        position: relative;
        margin-left: rem(26px);
        z-index: 10;
        &-trigger {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 rem(24px);
          cursor: pointer;
          &::before {
            content: '';
            display: block;
            width: 100%;
            height: rem(66px);
            position: absolute;
            top: rem(-18px);
            left: 0;
            background: #FFF;
            border-radius: rem(10px) rem(10px) 0 0;
            opacity: 0;
            transition: .4s;
            z-index: -1;
          }
          span {
            margin-right: rem(5px);
            color: #FFF;
            transition: .4s;
            ._open & {
              color: $red;
            }
          }
          svg {
            transition: .4s;
            ._open & {
              transform: rotate(180deg);
            }
          }
          path {
            stroke: #FFF;
            transition: .4s;
            ._open & {
              stroke: $red;
            }
          }
          ._open & {
            &::before {
              opacity: 1;
            }
          }
        }
        &-list {
          position: absolute;
          top: calc(100% + #{rem(23px)});
          right: 0;
          padding: rem(17px) rem(24px);
          background: #FFF;
          border-radius: rem(10px) 0 rem(10px) rem(10px);
          transition: .4s;
          opacity: 0;
          pointer-events: none;
          ._open & {
            opacity: 1;
            pointer-events: all;
          }
        }
        &-item {
          white-space: nowrap;
          color: $red;          
          &:not(:last-of-type) {
            margin-bottom: rem(11px);
          }
          span {
            border-bottom: 2px solid transparent;
          }
          &:hover {
            span {
              border-color: $red;
            }
          }
        }
      }
    }
    &__nav-link {
      width: auto;
      height: auto;
      display: inline;
      font-size: rem(16px);
      margin-left: rem(26px);
      padding: 0;
      margin-bottom: 0;
      line-height: 1.4;
      color: #fff;
      letter-spacing: rem(1px);
      text-transform: none;
      span {
        border-bottom: 1px solid transparent;
        transition: all 0.3s ease-in-out;
      }
      &.router-link-exact-active,
      &._active {
        background: none;
        color: #fff;
        span {
          border-color: #fff;
        }
        
      }
      &._accent {
        width: auto;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: rem(35px);
        padding: rem(9px) rem(17px);
        background: #fff;
        border-radius: rem(40px);
        letter-spacing: normal;
        border: none;
        font-size: rem(16px);
        img {
          width: rem(32px);
          height: rem(32px);
          margin-right: rem(6px);
        }
        &._active {
          b span {
            border-bottom-color: #48a237;
          }
        }
      }
    }
    
    .container {
      display: flex;
    }

    &__nav_mob {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__hamburger,
    &__menu_mob {
      display: none;
    }
  }
}

.header__menu_mob.active {
  display: flex !important;
}
</style>
