<template>
  <footer class="footer fp-auto-heigh" :class="className">
    <div class="container">
      <div class="footer__row">
        <div class="footer__nav">
          <a
            class="footer__nav-link"
            href="https://www.mars.com/privacy-policy-russia"
            target="_blank"
          >
            Конфиденциальность
          </a>
          <a
            class="footer__nav-link"
            href="https://www.mars.com/legal-russia"
            target="_blank"
          >
            Юридические условия
          </a>
          <a
            href="https://www.mars.com/"
            target="_blank"
            class="footer__nav-link"
          >
            Владелец сайта
          </a>
          <a href="" @click.prevent="toFeedback()" class="footer__nav-link">
            Задать вопрос о продукте
          </a>
          <a
            :href="`${publicPath}docs/user_agreement.pdf`"
            target="_blank"
            class="footer__nav-link"
          >
            Пользовательское соглашение
          </a>
        </div>
      </div>
      <p class="footer__copyright">
        {{
          "© 2022 Mars, Incorporated. Все права защищены"
            | typograf
        }}
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  props: ["className"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    toFeedback() {
      this.$modal.show("feedback");
    },
  },
};
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  padding: rem(20px) 0 rem(30px);
  text-align: left;
  background: #700838;
  z-index: 10;
  .container {
    position: relative;
    z-index: 10;
  }
  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__nav-link {
    position: relative;
    margin-bottom: rem(15px);
    font-size: rem(12px);
    text-align: center;
    line-height: rem(22px);
    color: #FFF;
  }

  &__nav-link:last-child {
    margin-right: 0;
  }

  &__nav-link:hover {
    text-decoration: none;
  }

  &__copyright {
    margin: rem(30px) auto 0;
    font-size: rem(10px);
    text-align: center;
    color: #FFF;
  }
  @media (min-width: $md) {
    padding: rem(70px) rem(123px) rem(50px);
    &__row {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    &__nav {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__nav-link {
      margin-bottom: 0;
      font-size: rem(16px);
      text-align: left;
    }
    &__copyright {
      margin-top: rem(40px);
      font-size: rem(14px);
    }
  }
  @media (min-width: $md) {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: rem(45px) 0 rem(20px);
    &__copyright {
      margin: rem(40px) auto 0;
      font-size: rem(14px);
    }
  }
}
</style>
