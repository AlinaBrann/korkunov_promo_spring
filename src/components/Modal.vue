<template>
  <modal
    :name="name"
    height="auto"
    :adaptive="true"
    :scrollable="true"
    @before-open="beforeOpen"
  >
    <div
      class="modal"
      :class="[
        'modal-' + name,
        size ? 'modal--' + size : '',
        success ? 'modal-success' : '',
      ]"
    >
      <div class="modal__content">
        <div class="modal__close" @click="closeModal(name)"></div>
        <div class="modal__header">
          <h2
            v-if="title"
            class="modal__title"
            :class="success ? 'modal-success__title' : ''"
            v-html="title"
          ></h2>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    success: {
      type: Boolean,
    },
  },
  methods: {
    closeModal(name) {
      this.$emit("closeModal", name);
    },
    beforeOpen(event) {
      this.$parent.beforeOpen(event);
    },
  },
  mounted() {
    // this.$modal.show("success_modal");
  },
};
</script>

<style lang="scss">
.vm--container {
  overflow: auto;
  z-index: 999999 !important;
  .vm--overlay {
    background: rgba(26, 21, 17, 0.85);
  }
}
.vm--modal {
  top: 0 !important;
  left: 0 !important;
  height: auto !important;
  width: auto !important;
  min-height: 100vh;
  justify-content: center;
  overflow: visible !important;
  display: flex;
  align-items: center;
  box-shadow: none !important;
  background-color: transparent !important;

  @media (min-width: $md) {
    padding: 20px 0;
  }
}

.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: rem(440px);
  max-width: 88%;
  padding: rem(65px) rem(15px) rem(45px);
  background: #fff7f4;
  overflow: hidden;
  &-check_photo {
    min-height: auto;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: rem(236px);
    height: rem(424px);
    max-height: 100%;
    background: url("../assets/images/popup-flowers.png") no-repeat top left;
    background-size: contain;
    z-index: 0;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
  }
  &__close {
    cursor: pointer;
    position: absolute;
    top: rem(6px);
    right: rem(6px);
    width: rem(38px);
    height: rem(38px);
    background-image: url("../assets/images/close_icon.svg");
    background-repeat: no-repeat;
    background-size: rem(16px);
    background-position: center;
    transition: 0.4s;
    z-index: 1;
  }
  &__content {
    position: static;
    z-index: 1;
  }
  &__title {
    margin-bottom: rem(30px);
    font-size: rem(24px);
    line-height: rem(30px);
    font-family: "Bold";
    text-transform: uppercase;
    color: $red;
    text-align: center;
    & + .modal__text {
      margin-top: rem(-7px);
    }
  }
  &__subtitle {
    position: relative;
    margin-bottom: rem(27px);
    font-size: rem(14px);
    color: $red;

    letter-spacing: rem(1px);
    text-align: center;
    z-index: 1;
  }
  &__text {
    margin-top: rem(0px);
    margin-bottom: rem(16px);
    text-align: center;
    font-size: rem(16px);
    line-height: rem(19px);
  }
  &-signup {
    width: rem(758px);
  }
  &-video_popup {
    padding: 0;
    transform: rotate(-90deg);
    width: calc(var(--vh, 1vh) * 100);
    flex-shrink: 0;
    max-width: 100vh;
    height: 100vw;
  }
  &-success {
    &__title {
      position: relative;
      padding-top: rem(76px);
      margin-bottom: rem(5px) !important;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: rem(60px);
        height: rem(60px);
        transform: translateX(-50%);
        background: url("../assets/images/success.svg") no-repeat center;
      }
    }
  }
  .success_modal {
    &__text {
      margin-top: 0;
    }
    &-back {
      font-size: rem(12px);
      color: #afafaf;
      text-align: center;
    }
    &-image {
      margin: auto;
    }
  }

  @media (min-width: $sm) {
    min-height: auto;
    justify-content: flex-start;
    padding: rem(50px) rem(85px) rem(60px);
    &--md {
      width: rem(608px);
      padding: rem(40px) rem(25px) rem(46px);
    }
    &--lg {
      width: rem(758px);
      padding: rem(40px) rem(25px) rem(46px);
    }
    &-reminder__popup {
      padding-top: rem(98px);
      padding-bottom: rem(105px);
    }
    &__title {
      margin-bottom: rem(25px);
      font-size: rem(28px);
      line-height: rem(34px);
    }
    &__text {
      margin-top: rem(27px);
    }
    &__list {
      width: 70%;
    }
    &__close {
      width: rem(48px);
      height: rem(48px);
      background-size: rem(26px);
    }
    &__subtitle {
      margin-bottom: 0;
      font-size: rem(24px);
    }
    &-success {
      padding: rem(80px) rem(123px);
    }
  }
}
</style>
