<template>
  <constructor-step title="видеопоздравление <br>отправлено на модерацию">
    <svg
      class="constructor-step__clock"
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3721 33.7769L46.3126 41.2322C47.1406 41.8522 47.3083 43.0258 46.6879 43.8498L46.6847 43.8541C46.3199 44.3454 45.7622 44.6027 45.1864 44.6027C44.7951 44.6027 44.4035 44.4816 44.0656 44.2282L33.3747 36.2099C32.9052 35.8597 32.6273 35.3044 32.6273 34.7132V18.679C32.6273 17.643 33.4637 16.8066 34.4997 16.8066C35.5357 16.8066 36.3721 17.643 36.3721 18.679V33.7769Z"
        fill="#CFAC72"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.799927 34.4998C0.799927 15.9172 15.9173 0.799805 34.4999 0.799805C53.0826 0.799805 68.1999 15.9172 68.1999 34.4998C68.1999 53.0824 53.0826 68.1998 34.4999 68.1998C15.9173 68.1998 0.799927 53.0824 0.799927 34.4998ZM4.5446 34.4998C4.5446 51.0158 17.9839 64.4551 34.4999 64.4551C51.0159 64.4551 64.4553 51.0158 64.4553 34.4998C64.4553 17.9839 51.0187 4.54447 34.4999 4.54447C17.9839 4.54447 4.5446 17.9838 4.5446 34.4998Z"
        fill="#CFAC72"
      />
    </svg>
    <div class="constructor-step__text">
      Вы&nbsp;получите уведомление о&nbsp;статусе модерации на&nbsp;указанный
      электронный адрес. Модерация видеопоздравления может занимать
      до&nbsp;3&nbsp;часов.
      <br /><br />
      Видеопоздравление будет доступно после успешного прохождения модерации.
    </div>
    <button type="button" class="constructor-step__button btn btn--primary">
      получить кэшбэк
    </button>
  </constructor-step>
</template>

<script>
import ConstructorStep from "../ConstructorStep.vue";
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    sender: null,
    errorMessage: {
      sender: null,
    },
  }),
  validations: {
    sender: { required },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        sender: null,
      };
    },
    goToNext() {
      this.$root.$emit("nextStep");
    },
  },
  components: { ConstructorStep },
};
</script>

<style lang="scss" scoped></style>
