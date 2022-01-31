<template>
  <section class="faq section">
    <div class="container">
      <div class="section__title" data-show>FAQ</div>
      <div class="faq__row">
        <div class="faq__content" data-show>
          <div class="faq__list">
            <div
              class="faq__item"
              v-for="(item, index) in items"
              :key="index"
              :class="item.isActive ? 'faq__item--active' : ''"
            >
              <div
                class="faq__item-header"
                @click="item.isActive = !item.isActive"
              >
                <h2 class="faq__item-title">
                  <span v-html="item.title"></span>
                </h2>
                <div class="faq__item-trigger">
                  <svg
                    width="21"
                    height="11"
                    viewBox="0 0 21 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 2L10.5 9L2 2"
                      stroke="white"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <transition name="fade">
                <div
                  class="faq__item-content"
                  v-if="item.isActive"
                  v-html="item.text"
                ></div>
              </transition>
            </div>
          </div>
        </div>
        <div class="faq__feedback" data-show>
          <div class="faq__feedback-title">Обратная <br />связь</div>
          <p>Не нашли ответа на свой вопрос? <br />Напишите нам!</p>
          <button @click="toFeedback()" class="btn btn--bordered">
            задать вопрос
          </button>
        </div>
      </div>
    </div>
    <AppFooter class="hidden-xs"/>
  </section>
</template>

<script>
import AppFooter from './AppFooter.vue'
export default {
  components: { AppFooter },
  data: () => ({
    items: [
      {
        title: "Кто является организатором акции?",
        text: "Организатором акции является ООО &laquo;Едадил Промо&raquo;.",
        isActive: false,
      },
      {
        title: "Где проводится акция?",
        text: "Акция проводится на&nbsp;территории&nbsp;РФ.",
        isActive: false,
      },
      {
        title: "Какой срок регистрации чеков?",
        text: "Стать участником акции возможно зарегистрировав чек на&nbsp;сайте акции или в&nbsp;сервисе &laquo;Едадил&raquo; в&nbsp;период с&nbsp;31&nbsp;января 2022 года по&nbsp;23&nbsp;часа 59&nbsp;минут 20&nbsp;марта 2022 года включительно.",
        isActive: false,
      },
      {
        title: "Как зарегистрировать чек?",
        text: "1. Для участия в&nbsp;акции пользователю сети Интернет необходимо пройти процедуру регистрации в&nbsp;сервисе или на&nbsp;сайте акции. Порядок регистрации в&nbsp;сервисе регулируется Пользовательским соглашением сервиса <a href='https://corp.edadeal.ru/legal' target='_blank'>corp.edadeal.ru/legal</a>. При регистрации пользователь соглашается с&nbsp;Пользовательским соглашением сервиса, получает аккаунт и&nbsp;ему присваивается&nbsp;id. Если пользователь сети Интернет уже зарегистрирован в&nbsp;сервисе, то&nbsp;необходимость в&nbsp;повторной регистрации отсутствует. <br>2. В&nbsp;период, с&nbsp;31&nbsp;января 2022 по&nbsp;20&nbsp;марта 2022, выполнить следующие действия: <br>&mdash;&nbsp;приобрести продукцию под товарным знаком &laquo;Коркунов&raquo;, на&nbsp;любую сумму от&nbsp;одной штуки, согласно ассортименту, указанному в&nbsp;правилах акции;<br>&mdash;&nbsp;найти на&nbsp;чеке QR-код; <br>&mdash;&nbsp;отсканировать QR-код в&nbsp;сервисе или на&nbsp;сайте (пройдя сперва этап авторизации);<br>&mdash;&nbsp;успешно пройти проверку чека (проверка чека может занимать до&nbsp;3&nbsp;календарных дней).<br><br><b>После проверки чека лицо становится участником.</b>",
        isActive: false,
      },
      {
        title: "Какие призы возможно выиграть в&nbsp;акции?",
        text: "Призовой фонд Акции составляет следующие Призы: <br>Гарантированный приз:<br>&mdash;&nbsp;5&nbsp;(пять) %&nbsp;за&nbsp;покупку одной единицы продукции<br>&mdash;&nbsp;7&nbsp;(семь) %&nbsp;за&nbsp;покупку двух единиц продукции<br>&mdash;&nbsp;10&nbsp;(десять) %&nbsp;за&nbsp;покупку четырех единиц продукции<br>Еженедельные призы <br>Еженедельные призы &#8470;&nbsp;1: <br>&bull; Электронный подарочный сертификат (промокод) Ozon номиналом 500 (пятьсот) рублей 00&nbsp;копеек. <br>Еженедельные призы &#8470;&nbsp;2: <br>&bull; Электронный подарочный сертификат (промокод) Giftery номиналом 1&nbsp;000 (одна тысяча) рублей 00&nbsp;копеек. <br>Еженедельные призы &#8470;&nbsp;3: <br>&bull; Подписка на&nbsp;1&nbsp;месяц сервис &laquo;Яндекс Плюс&raquo; (промокод). <br>Главные призы: <br>&bull; Главные призы состоит из&nbsp;2 (двух) частей: <br>Главный приз &#8470;&nbsp;1:<br>&bull; Электронный подарочный сертификат (промокод) re:Store номинальной стоимостью 100&nbsp;000 (сто тысяч) рублей 00&nbsp;копеек и&nbsp;денежная часть приза в&nbsp;размере 53&nbsp;846 (пятьдесят три тысячи восемьсот сорок шесть) рублей 00&nbsp;копеек, рассчитываемая по&nbsp;формуле: N= Q&nbsp;*35/65(где, Q&nbsp;&mdash; сумма Приза с&nbsp;НДС, а&nbsp;N&nbsp;&mdash; размер денежного приза).<br>Главный приз &#8470;&nbsp;2:<br>&bull; Электронный подарочный сертификат (промокод) SONY номинальной стоимостью 90&nbsp;000 (девяносто тысяч) рублей 00&nbsp;копеек и&nbsp;денежная часть приза в&nbsp;размере 48&nbsp;462 (сорок восемь тысяч четыреста шестьдесят два) рублей 00&nbsp;копеек, рассчитываемая по&nbsp;формуле: N= Q&nbsp;*35/65(где, Q&nbsp;&mdash; сумма Приза с&nbsp;НДС, а&nbsp;N&nbsp;&mdash; размер денежного приза).<br>Главный приз &#8470;&nbsp;3:<br>&bull; Два электронных подарочных сертификата (промокода) re:Store номинальной стоимостью каждый 100&nbsp;000 (сто тысяч) рублей 00&nbsp;копеек и&nbsp;денежная часть приза в&nbsp;размере 53&nbsp;846 (пятьдесят три тысячи восемьсот сорок шесть) рублей 00&nbsp;копеек, рассчитываемая по&nbsp;формуле: N= Q&nbsp;*35/65(где, Q&nbsp;&mdash; сумма Приза с&nbsp;НДС, а&nbsp;N&nbsp;&mdash; размер денежного приза).",
        isActive: false,
      },
      {
        title: "Сколько призов я могу получить? ",
        text: "Один участник за&nbsp;весь срок проведения акции может получить не&nbsp;более 1&nbsp;еженедельного приза или 1&nbsp;главного приза. <br>Ограничения начисления кэшбэка: <br>&mdash;&nbsp;Максимальный размер кэшбэка за&nbsp;1&nbsp;чек равно 100 рублей 00&nbsp;копеек;<br>&mdash;&nbsp;За&nbsp;один календарный день каждый участник может загрузить не&nbsp;более 2&nbsp;чеков;<br>&mdash;&nbsp;За&nbsp;время проведения акции каждый участник может загрузить не&nbsp;более 8&nbsp;чеков.",
        isActive: false,
      },
      {
        title: "Как происходит розыгрыш призов? ",
        text: "Победитель определяется по&nbsp;формуле:<br>X = Y/2, где X&nbsp;&mdash; определяемое число, Y&nbsp;&mdash; общее количество чеков за&nbsp;период розыгрыша отсортированных по&nbsp;возрастанию номера ФП. Если X&nbsp;&mdash; целое число, то&nbsp;выигравшими становятся чек с&nbsp;порядковым номером в&nbsp;базе, кратным X.&nbsp;Если X&nbsp;&mdash; дробное число, то&nbsp;оно округляется до&nbsp;целого к&nbsp;меньшему значению. <br>Подробное описание розыгрыша доступно в&nbsp;правилах акции.",
        isActive: false,
      },
      {
        title: "Где я&nbsp;могу посмотреть выигранные мною призы?",
        text: "Статус возможно отслежиать в&nbsp;сервисе &laquo;Едадил&raquo;.",
        isActive: false,
      },
      {
        title: "Как узнать, стал&nbsp;ли я&nbsp;обладателем приза?",
        text: "Участнику придет уведомление в&nbsp;сервисе &laquo;Едадил&raquo;.",
        isActive: false,
      },
      {
        title:
          "Я&nbsp;выиграл еженедельный приз, какую информацию мне нужно сообщить организатору акции для получения приза?",
        text: "Для получения еженедельного приза, победитель обязан предоставить следующую информацию:<br>&bull; ФИО;<br>&bull; Адрес электронной почты;<br>&bull; Мобильный телефон.",
        isActive: false,
      },
      {
        title:
          "Я&nbsp;выиграл главный приз, какую информацию мне нужно сообщить организатору акции для получения приза?",
        text: "Предоставить для получения приза все документы, по&nbsp;требованию организатора/оператора на&nbsp;адрес электронной почты <a href='mailto:korkunov@tma-draft.com'>korkunov@tma-draft.com</a> <br>&bull; ФИО;<br>&bull; Адрес электронной почты (e-mail);<br>&bull; Номер мобильного телефона;<br>&bull; Сканированную копию паспорта гражданина Российской Федерации (основной разворот и&nbsp;страница с&nbsp;постоянной регистрацией), при этом фотография может быть любым способом скрыта, страница с&nbsp;постоянной регистрацией должна содержать информацию о&nbsp;последнем месте жительства;<br>&bull; Номер ИНН;<br>&bull; Адрес проживания (для доставки и&nbsp;подписания актов приема-передачи призов).",
        isActive: false,
      },
      {
        title:
          "Я передал организатору все данные о себе. Когда и как мне пришлют приз?",
        text: "Еженедельные призы вручаются путем отправки через сервис &laquo;Едадил&raquo;. Главный приз вручается Оператором путем отправки приза по&nbsp;электронной почте.",
        isActive: false,
      },
      {
        title: "Я могу вместо приза получить деньги?",
        text: "Призы не&nbsp;могут быть востребованы участниками повторно, денежная компенсация им&nbsp;не&nbsp;выдается.",
        isActive: false,
      },
    ],
  }),
  methods: {
    toFeedback() {
      this.$modal.show("feedback");
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
  padding-top: 15vh;
  &__row {
    display: flex;
    flex-direction: column;
  }
  .container {
    position: relative;
    z-index: 10;
  }
  &__content {
    width: 100%;
    height: calc(var(--vh, 1vh) * 40);
    margin-bottom: rem(25px);
    padding-right: rem(18px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar:vertical {
    -webkit-appearance: none;
}
    &::-webkit-scrollbar {
      width: rem(6px) !important;
      display: block !important;
      -webkit-overflow-scrolling: auto;
      opacity: 1 !important;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2) !important;
      border-radius: 0px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      border-radius: 0px;
      background: $yellow !important;
      transition: all 0.3s ease-in-out;
    }
  }
  &__item {
    padding: rem(10px) 0px 0 0px;
    color: #fff;
    &-header {
      cursor: pointer;
      position: relative;
      margin-bottom: rem(10px);
    }
    &-trigger {
      position: absolute;
      top: rem(3px);
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: rem(13px);
        transition: 0.4s;
      }
    }
    &-title {
      display: flex;
      padding-right: rem(35px);
      font-size: rem(14px);
      line-height: 1;
      font-family: "Bold";
      text-transform: none;
      transition: color 0.3s ease-in-out;
      span {
        display: inline-block;
        vertical-align: top;
      }
      .faq__item--active & {
        color: $yellow;
      }
    }
    &-content {
      width: 90%;
      margin-bottom: rem(18px);
      font-size: rem(12px);
      text-transform: none;
      color: #fff7f4;
    }
  }

  &__item--active {
    .faq__item-trigger {
      svg {
        transform: rotate(180deg);
      }

      .horizontal {
        opacity: 0;
      }
    }
  }

  &__feedback {
    flex: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: #fff;
    &-title {
      margin-bottom: rem(10px);
      font-size: rem(20px);
      line-height: rem(23px);
      font-family: "Bold";
      text-transform: uppercase;
      letter-spacing: rem(2px);
    }
    p {
      margin-bottom: rem(14px);
      font-size: rem(12px);
    }
  }
  @media (min-width: $sm) {
    padding-top: rem(85px);
    padding-bottom: rem(25px);
    &__row {
      flex-direction: row;
    }
    &__content {
      width: 60%;
      height: calc(var(--vh, 1vh) * 45);
      padding-right: rem(48px);
      margin-bottom: 0;
      &::-webkit-scrollbar {
        width: rem(11px);
      }
    }
    &__item {
      padding: rem(10px) 0px rem(23px) 0px;
      &-header,
      &-content {
        margin-bottom: rem(30px);
      }
      &-title {
        padding-right: rem(70px);
        font-size: rem(24px);
      }
      &-trigger {
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        svg {
          width: rem(17px);
        }
      }
      &-content {
        font-size: rem(18px);
      }
    }
    &__feedback {
      &-title {
        margin-bottom: rem(18px);
        font-size: rem(35px);
        line-height: rem(44px);
        letter-spacing: rem(2px);
      }
      p {
        margin-bottom: rem(34px);
        font-size: rem(18px);
      }
    }
  }
  @media (min-width: $md) {
    padding-top: rem(145px);
    &::after {
      bottom: rem(140px);
    }
  }
}
</style>
