<template>
  <constructor-step title="ваше видеопоздравление готово!">
    <div class="constructor-step__video-wrapper">
      <video
        class="constructor-step__video"
        src=""
        poster="../assets/images/constructor/poster.png"
      ></video>
      <button
        @click="showVideoPopup()"
        class="constructor-step__video-overlay _play"
      ></button>
    </div>
    <div class="constructor-step__field-block">
      <p>отправтьте получателю поздравления <br />ПИН-код, указанный ниже</p>
      <div class="constructor-step__field-wrapper">
        <input
          class="constructor-step__field-code"
          id="code"
          v-model="code"
        />
        <button
          @click="copyText()"
          v-tooltip.bottom-end="{
            content: 'Пин-код скопирован',
            trigger: 'click',
          }"
          class="constructor-step__field-btn btn btn--primary btn--sm"
        >
          СКОПИРОВАТЬ
        </button>
      </div>
    </div>
    <div class="constructor-step__field-block _email-block">
      <inputText
        label="Ваш E-mail"
        color="white"
        class="_big-padding"
        placeholder="example@email.com"
        :field="email"
        tooltip="На&nbsp;указанный E-mail будет отправлена информация о&nbsp;статусе модерации"
        @input="email = $event"
        :class="{
          error: validationStatus($v.email) || this.errorMessage.email,
        }"
        :error="
          (!$v.email.required && $v.email.$error ? 'Обязательное поле' : '') ||
          this.errorMessage.email
        "
      />
       <button
          @click="submit()"
          class="constructor-step__field-btn btn btn--primary btn--sm"
        >
          отправить
        </button>
    </div>
    
    <div class="constructor-step__list">
      <p class="constructor-step__list-text">
        Для просмотра поздравления необходимо:
      </p>
      <ul>
        <li><span>1</span>Отсканировать QR-код с открытки</li>
        <li>
          <span>2</span>Перейти в раздел
          <router-link :to="{ name: 'EnterPincode', params: { backTo: 'video-greeting'} }"
            >ПОСМОТРЕТЬ ВИДЕОПОЗДРАВЛЕНИЕ</router-link
          >
        </li>
        <li><span>3</span>Ввести пин-код, указанный на этой странице</li>
      </ul>
    </div>
    <div class="constructor-step__social">
      <div class="constructor-step__social-text">Поделитесь с друзьями:</div>
      <ul>
        <li>
          <button
            v-tooltip.bottom="{
              content: 'Ссылка скопирована',
              trigger: 'click',
            }"
            @click.prevent="
              copyUrl(homeUrl + '/greeting-preview?pincode=' + code)
            "
            class="constructor-step__social-link _big"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_657_278)">
                <path
                  d="M13.8429 1.15706C12.3001 -0.385686 9.79023 -0.385686 8.24746 1.15706L5.94856 3.45595C5.5474 3.85712 5.22235 4.36893 5.01285 4.9938C5.00933 4.99498 5.00593 4.99676 5.00242 4.99793C4.52593 6.43134 4.88731 7.99008 5.94856 9.05133C6.26564 9.36841 6.63871 9.62951 7.04277 9.82225L7.19198 9.67304C7.70801 9.15701 7.70801 8.32395 7.19198 7.80789C6.33402 6.94993 6.33402 5.55727 7.19198 4.69934L9.49087 2.40045C10.3488 1.54249 11.7415 1.54249 12.5994 2.40045C13.4574 3.2584 13.4574 4.65103 12.5994 5.50899L10.8539 7.25456C11.0866 7.97423 11.1359 8.73633 11.0233 9.4781C11.2071 9.34996 11.384 9.21126 11.5439 9.05133L13.8428 6.75244C15.3856 5.20969 15.3856 2.69977 13.8429 1.15706Z"
                  fill="white"
                />
                <path
                  d="M9.05714 5.94296C8.74006 5.62588 8.36705 5.36476 7.95675 5.17822L7.81372 5.32125C7.29772 5.83726 7.29769 6.67034 7.81372 7.18641C8.67168 8.04437 8.67168 9.43702 7.81372 10.295C7.08751 11.0212 6.20152 11.9073 5.50911 12.5997C4.65115 13.4577 3.25853 13.4577 2.40057 12.5997C1.54261 11.7418 1.54261 10.3491 2.40057 9.49117L4.15185 7.73974C3.91908 7.02006 3.86981 6.25793 3.98245 5.51616C3.79859 5.64437 3.62169 5.78303 3.46173 5.94296L1.15712 8.24772C-0.385625 9.79046 -0.385625 12.3004 1.15712 13.8431C2.69986 15.3859 5.20976 15.3859 6.75253 13.8431L9.05714 11.5384C9.4583 11.1372 9.78335 10.6254 9.99286 10.0005C9.99637 9.99935 9.99977 9.99756 10.0033 9.99639C10.4798 8.56295 10.1184 7.00421 9.05714 5.94296Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_657_278">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>ссылка</span>
          </button>
        </li>
        <li>
          <a
            href=""
            @click.prevent="shareLink()"
            class="constructor-step__social-link"
          >
            <svg
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 0.680833C16.616 0.28896 16.5 0.0019988 15.9446 0.0019988H14.0963C13.9238 -0.0102755 13.752 0.0342271 13.6072 0.128716C13.4623 0.223205 13.3523 0.362491 13.294 0.525318C12.7209 1.88559 11.9559 3.15679 11.0224 4.30026C10.5904 4.73224 10.3954 4.86739 10.1585 4.86739C10.0424 4.86739 9.86408 4.72977 9.86408 4.3379V0.680833C9.86408 0.210585 9.73264 0.0019988 9.34385 0.0019988H6.44337C6.38464 -0.00132869 6.32584 0.00700568 6.27035 0.0265218C6.21485 0.046038 6.16377 0.0763496 6.12006 0.115707C6.07634 0.155065 6.04085 0.202689 6.01563 0.255833C5.99041 0.308978 5.97597 0.366589 5.97313 0.425344C5.97313 0.870289 6.63777 0.973966 6.70627 2.22734V4.94762C6.70627 5.54314 6.59951 5.65299 6.365 5.65299C5.738 5.65299 4.21495 3.35297 3.31271 0.720329C3.13066 0.209352 2.95231 0.00261558 2.47898 0.00261558H0.633168C0.106762 0.00261558 0 0.249464 0 0.525935C0 1.0147 0.626997 3.44369 2.91775 6.65273C4.4476 8.84104 6.59704 10.029 8.55393 10.029C9.72647 10.029 9.87334 9.76549 9.87334 9.31129C9.87334 7.21801 9.76658 7.02053 10.3559 7.02053C10.6287 7.02053 11.0965 7.15815 12.1956 8.21466C13.4489 9.46804 13.6557 10.029 14.3555 10.029H16.2013C16.7277 10.029 16.9943 9.76549 16.8407 9.24526C16.4895 8.15172 14.1173 5.90169 14.0105 5.75111C13.7378 5.39997 13.8161 5.24322 14.0105 4.93034C14.0148 4.92725 16.268 1.75586 16.5 0.680833Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href=""
            @click.prevent="shareLink()"
            class="constructor-step__social-link"
          >
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.43164 10.467C9.45298 9.80607 9.90163 9.4179 9.51284 8.61565C9.27772 8.15836 8.64455 7.77574 7.80156 8.4373C6.92904 9.042 5.8891 9.35836 4.82765 9.342C3.76606 9.358 2.7261 9.0412 1.85373 8.43606C1.01074 7.77142 0.37264 8.15712 0.142454 8.61441C-0.252505 9.41975 0.195526 9.80546 1.21748 10.4658C2.09125 10.9497 3.05998 11.2373 4.05624 11.3088L3.41135 11.9524C2.49616 12.8584 1.62787 13.7353 1.02 14.3438C0.134431 15.2244 1.55937 16.6376 2.44309 15.7755L4.83382 13.3786C5.75025 14.2932 6.62656 15.1707 7.22517 15.7786C8.10889 16.6438 9.53135 15.2429 8.65751 14.3481L6.26616 11.9555L5.61139 11.31C6.60113 11.2349 7.56306 10.9474 8.43164 10.467ZM0.760193 4.06437C0.76297 5.1406 1.19237 6.17182 1.95425 6.93197C2.71613 7.69211 3.74833 8.11915 4.82456 8.11948C5.9008 8.11915 6.933 7.69211 7.69488 6.93197C8.45676 6.17182 8.88615 5.1406 8.88893 4.06437C8.88795 2.98673 8.45942 1.95351 7.69742 1.19151C6.93542 0.429504 5.9022 0.000980413 4.82456 0C3.74692 0.000980413 2.71371 0.429504 1.9517 1.19151C1.1897 1.95351 0.761174 2.98673 0.760193 4.06437ZM2.82879 4.06437C2.82764 3.5338 3.03723 3.02448 3.41147 2.64838C3.78572 2.27229 4.29399 2.06019 4.82456 2.05872C5.35524 2.06003 5.86367 2.27205 6.23805 2.64817C6.61243 3.02428 6.8221 3.53369 6.82095 4.06437C6.82014 4.59359 6.60954 5.10091 6.23532 5.47513C5.8611 5.84935 5.35379 6.05994 4.82456 6.06076C4.29534 6.05994 3.78802 5.84935 3.4138 5.47513C3.03958 5.10091 2.82899 4.59359 2.82817 4.06437H2.82879Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href=""
            @click.prevent="shareLink()"
            class="constructor-step__social-link"
          >
            <svg
              width="9"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.76058 2.66423H8.26944V0.113043C7.5387 0.0353776 6.80426 -0.00232217 6.0694 0.000110608C3.89157 0.000110608 2.39999 1.32877 2.39999 3.77011V6.01767H0V8.86939H2.40369V16.0459H5.34737V8.86939H7.65232L8.02259 6.01767H5.34737V4.05275C5.34737 3.22828 5.57632 2.66423 6.76058 2.66423Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <a
      href="http://promo.korkunov.ru/"
      target="_blank"
      class="constructor-step__button btn btn--primary"
    >
      получить кэшбэк
    </a>
  </constructor-step>
</template>

<script>
import InputText from '../components/form/inputText.vue'
import ConstructorStep from "../components/ConstructorStep.vue";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    homeUrl: window.location.origin,
    code: "8jd38e48",
    email: null,
    videoUrl: null,
    errorMessage: {
      email: null,
    },
    submitStatus: null
  }),
  validations: {
    email: { required },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        email: null,
      };
    },
    showVideoPopup() {
      this.$modal.show("video_popup", {
        videoUrl: this.videoUrl,
      });
    },
    copyText() {
      var copyText = document.getElementById("code");
      copyText.select();
      document.execCommand("copy");
    },
    copyUrl(val) {
      var inp = document.createElement("input");
      document.body.appendChild(inp);
      inp.value = val;
      inp.select();
      document.execCommand("copy", false);
      inp.remove();
    },
    shareLink() {
      if (navigator.share) {
        navigator
          .share({
            title: "Тому, кто важен. Создавайте видеопоздравления от Коркунов",
            url: this.homeUrl + "/greeting-preview?pincode=" + this.code,
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        this.$modal.show("common_error", {
          text: "Функция не поддерживается",
        });
      }
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";
      this.$store
        .dispatch("CompleteCongratulation2", {
          congratulation_id: this.$store.getters.congratulation_id,
          sender_email: this.email,
        })
        .then((r) => {
          console.log(r);
          if (r.error != 0) {
            this.submitStatus = null;
            this.$modal.show("common_error", {
              text: "Что-то пошло не так, " + r.message.common,
            });
          } else {
            this.submitStatus = null;
            this.$modal.show("succes_popup", {
              text: "На&nbsp;указанный E-mail будет отправлена информация о&nbsp;статусе модерации и пинкод поздравления"
            });
          }
        })
        .catch((e) => {
          this.submitStatus = null;
          this.$modal.show("common_error", {
            text: "Что-то пошло не так, " + e,
          });
        });
      }
    }
  },
  created() {},
  mounted() {
    this.code = this.$store.getters.pincode;
    this.videoUrl = this.$store.getters.video_url;
  },
  components: { ConstructorStep, InputText },
};
</script>

<style lang="scss" scoped></style>
